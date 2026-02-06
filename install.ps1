$Version = "v0.4.1"
$BaseUrl = "https://github.com/zscriptlang/zscript/releases/download/$Version"

$Arch = if ($env:PROCESSOR_ARCHITECTURE -eq "AMD64") { "x64" } else { "arm64" }

if ($Arch -ne "x64") {
    Write-Error "Unsupported architecture: $Arch. Only x64 is supported on Windows for now."
    exit 1
}

$Flavor = "baseline"
# Detect AVX2 support via a tiny inline C# class
try {
    Add-Type -TypeDefinition @"
    using System;
    using System.Runtime.InteropServices;
    public class CpuCheck {
        [DllImport("kernel32.dll")]
        public static extern bool IsProcessorFeaturePresent(uint Feature);
        public static bool HasAvx2() {
            // PF_AVX2_INSTRUCTIONS_AVAILABLE = 40
            return IsProcessorFeaturePresent(40);
        }
    }
"@ -ErrorAction SilentlyContinue
    if ([CpuCheck]::HasAvx2()) {
        $Flavor = "avx2"
    }
} catch {
    # Fallback to baseline if check fails
}

$AssetName = "zsc-windows-x64-$Flavor"
$AssetFile = "$AssetName.zip"
$DownloadUrl = "$BaseUrl/$AssetFile"

$InstallDir = Join-Path $env:USERPROFILE ".zsc"
if (!(Test-Path $InstallDir)) { New-Item -Path $InstallDir -ItemType Directory }

$ZipPath = Join-Path $InstallDir $AssetFile
$ExePath = Join-Path $InstallDir "zsc.exe"

Write-Host "Detected System: Windows $Arch ($Flavor)"
Write-Host "Downloading ZScript $Version from $DownloadUrl..."

Invoke-WebRequest -Uri $DownloadUrl -OutFile $ZipPath

Write-Host "Extracting..."
Expand-Archive -Path $ZipPath -DestinationPath $InstallDir -Force

$InternalName = "zsc-$Flavor.exe"
$ExtractedExe = Join-Path $InstallDir $InternalName

if (Test-Path $ExtractedExe) {
    Move-Item -Path $ExtractedExe -Destination $ExePath -Force
} elseif (Test-Path (Join-Path $InstallDir "zsc.exe")) {
    # Already named correctly
}

# Cleanup zip
Remove-Item $ZipPath

# Add to PATH
$UserPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($UserPath -notlike "*$InstallDir*") {
    [Environment]::SetEnvironmentVariable("Path", "$UserPath;$InstallDir", "User")
    Write-Host "ZScript added to User PATH."
}

Write-Host "ZScript installed successfully! Please restart your terminal."
Write-Host "Then try running 'zsc -v'"
