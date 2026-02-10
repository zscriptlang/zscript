#!/bin/bash
set -e

VERSION="v0.4.1"
BASE_URL="https://github.com/zscriptlang/zscript/releases/download/$VERSION"

OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
if [ "$OS" == "darwin" ]; then OS="macos"; fi
ARCH="$(uname -m)"

# Normalize Architecture
case "$ARCH" in
    x86_64) ARCH="x64" ;;
    aarch64|arm64) ARCH="arm64" ;;
    *) echo "Unsupported architecture: $ARCH"; exit 1 ;;
esac

FLAVOR="baseline"
if [ "$ARCH" == "x64" ]; then
    # Check for AVX2 support
    if [[ "$OS" == "linux" ]]; then
        if grep -q "avx2" /proc/cpuinfo; then
            FLAVOR="avx2"
        fi
    elif [[ "$OS" == "darwin" ]]; then
        if sysctl -n hw.optional.avx2 2>/dev/null | grep -q 1; then
            FLAVOR="avx2"
        fi
    fi
fi

# Determine Linux libc type
LIBC=""
if [[ "$OS" == "linux" && "$ARCH" == "x64" ]]; then
    if ldd --version 2>&1 | grep -q "musl"; then
        LIBC="-musl"
    fi
fi

# Construct filename
# Examples: zsc-linux-x64-avx2.tar.gz, zsc-macos-arm64.tar.gz
if [ "$ARCH" == "arm64" ]; then
    ASSET_NAME="zsc-$OS-$ARCH"
else
    ASSET_NAME="zsc-$OS-$ARCH$LIBC-$FLAVOR"
fi

ASSET_FILE="$ASSET_NAME.tar.gz"
DOWNLOAD_URL="$BASE_URL/$ASSET_FILE"

echo "Detected System: $OS $ARCH ($FLAVOR)"
echo "Downloading ZScript $VERSION from $DOWNLOAD_URL..."

curl -L "$DOWNLOAD_URL" -o "$ASSET_FILE"

echo "Extracting..."
mkdir -p zsc_temp
tar -xzf "$ASSET_FILE" -C zsc_temp

# Determine internal binary name to rename
if [ "$ARCH" == "arm64" ]; then
    INTERNAL_NAME="zsc"
else
    # x64
    if [ -n "$LIBC" ]; then
        INTERNAL_NAME="zsc-musl-$FLAVOR"
    else
        INTERNAL_NAME="zsc-$FLAVOR"
    fi
fi

# Fallback check
if [ ! -f "zsc_temp/$INTERNAL_NAME" ]; then
    if [ -f "zsc_temp/zsc" ]; then
        INTERNAL_NAME="zsc"
    fi
fi

echo "Installing to /usr/local/bin/zsc..."
if [ -w "/usr/local/bin" ]; then
    mv "zsc_temp/$INTERNAL_NAME" /usr/local/bin/zsc
    chmod +x /usr/local/bin/zsc
else
    sudo mv "zsc_temp/$INTERNAL_NAME" /usr/local/bin/zsc
    sudo chmod +x /usr/local/bin/zsc
fi

# Cleanup
rm -rf zsc_temp "$ASSET_FILE"

echo "ZScript installed successfully! Try running 'zsc -v'"
