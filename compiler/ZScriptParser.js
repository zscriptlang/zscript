// Generated from ZScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ZScriptVisitor from './ZScriptVisitor.js';

const serializedATN = [4,1,75,505,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,120,8,1,1,2,1,2,5,2,124,8,2,10,2,12,2,127,9,2,1,2,1,2,1,3,1,3,
1,3,1,3,3,3,135,8,3,1,3,1,3,3,3,139,8,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,147,
8,4,1,4,1,4,1,4,3,4,152,8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,160,8,5,10,5,12,
5,163,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,178,8,
7,10,7,12,7,181,9,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,189,8,8,10,8,12,8,192,9,
8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,
11,1,11,3,11,211,8,11,1,11,1,11,5,11,215,8,11,10,11,12,11,218,9,11,1,11,
1,11,1,12,1,12,1,12,3,12,225,8,12,1,12,1,12,1,12,3,12,230,8,12,1,12,1,12,
3,12,234,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,3,13,249,8,13,1,14,1,14,1,14,5,14,254,8,14,10,14,12,14,257,9,14,1,15,
1,15,1,15,3,15,262,8,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,270,8,16,1,17,
1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,282,8,18,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,3,19,291,8,19,1,19,3,19,294,8,19,1,19,1,19,1,19,3,19,
299,8,19,1,20,1,20,1,20,1,20,1,20,3,20,306,8,20,1,20,3,20,309,8,20,1,20,
1,20,3,20,313,8,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,
3,22,326,8,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,
1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,
29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,3,32,367,
8,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,375,8,32,10,32,12,32,378,9,32,1,
32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,393,
8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
1,32,3,32,424,8,32,1,32,5,32,427,8,32,10,32,12,32,430,9,32,1,33,1,33,3,33,
434,8,33,1,33,1,33,1,33,3,33,439,8,33,1,34,1,34,1,34,5,34,444,8,34,10,34,
12,34,447,9,34,1,35,1,35,1,35,3,35,452,8,35,1,35,1,35,3,35,456,8,35,1,36,
1,36,1,36,5,36,461,8,36,10,36,12,36,464,9,36,1,37,1,37,1,37,3,37,469,8,37,
1,37,1,37,1,37,5,37,474,8,37,10,37,12,37,477,9,37,1,38,1,38,1,38,1,39,1,
39,3,39,484,8,39,1,39,1,39,1,40,1,40,1,40,1,40,5,40,492,8,40,10,40,12,40,
495,9,40,1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,0,2,64,74,43,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,0,7,1,0,2,4,1,0,44,46,1,0,51,
53,1,0,49,50,1,0,54,59,1,0,60,61,1,0,65,70,545,0,89,1,0,0,0,2,119,1,0,0,
0,4,121,1,0,0,0,6,130,1,0,0,0,8,142,1,0,0,0,10,155,1,0,0,0,12,166,1,0,0,
0,14,171,1,0,0,0,16,184,1,0,0,0,18,195,1,0,0,0,20,200,1,0,0,0,22,206,1,0,
0,0,24,233,1,0,0,0,26,248,1,0,0,0,28,250,1,0,0,0,30,258,1,0,0,0,32,263,1,
0,0,0,34,271,1,0,0,0,36,274,1,0,0,0,38,283,1,0,0,0,40,300,1,0,0,0,42,317,
1,0,0,0,44,323,1,0,0,0,46,329,1,0,0,0,48,332,1,0,0,0,50,335,1,0,0,0,52,338,
1,0,0,0,54,344,1,0,0,0,56,348,1,0,0,0,58,351,1,0,0,0,60,355,1,0,0,0,62,358,
1,0,0,0,64,392,1,0,0,0,66,433,1,0,0,0,68,440,1,0,0,0,70,448,1,0,0,0,72,457,
1,0,0,0,74,465,1,0,0,0,76,478,1,0,0,0,78,481,1,0,0,0,80,487,1,0,0,0,82,498,
1,0,0,0,84,502,1,0,0,0,86,88,3,2,1,0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,
0,0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,93,5,0,0,1,93,1,1,0,0,
0,94,120,3,4,2,0,95,120,3,6,3,0,96,120,3,20,10,0,97,120,3,8,4,0,98,120,3,
22,11,0,99,120,3,10,5,0,100,120,3,14,7,0,101,120,3,16,8,0,102,120,3,26,13,
0,103,120,3,32,16,0,104,120,3,34,17,0,105,120,3,36,18,0,106,120,3,38,19,
0,107,120,3,40,20,0,108,120,3,42,21,0,109,120,3,44,22,0,110,120,3,46,23,
0,111,120,3,48,24,0,112,120,3,50,25,0,113,120,3,52,26,0,114,120,3,54,27,
0,115,120,3,56,28,0,116,120,3,58,29,0,117,120,3,60,30,0,118,120,3,62,31,
0,119,94,1,0,0,0,119,95,1,0,0,0,119,96,1,0,0,0,119,97,1,0,0,0,119,98,1,0,
0,0,119,99,1,0,0,0,119,100,1,0,0,0,119,101,1,0,0,0,119,102,1,0,0,0,119,103,
1,0,0,0,119,104,1,0,0,0,119,105,1,0,0,0,119,106,1,0,0,0,119,107,1,0,0,0,
119,108,1,0,0,0,119,109,1,0,0,0,119,110,1,0,0,0,119,111,1,0,0,0,119,112,
1,0,0,0,119,113,1,0,0,0,119,114,1,0,0,0,119,115,1,0,0,0,119,116,1,0,0,0,
119,117,1,0,0,0,119,118,1,0,0,0,120,3,1,0,0,0,121,125,5,38,0,0,122,124,3,
2,1,0,123,122,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,
128,1,0,0,0,127,125,1,0,0,0,128,129,5,39,0,0,129,5,1,0,0,0,130,131,7,0,0,
0,131,134,5,71,0,0,132,133,5,48,0,0,133,135,3,74,37,0,134,132,1,0,0,0,134,
135,1,0,0,0,135,138,1,0,0,0,136,137,5,44,0,0,137,139,3,64,32,0,138,136,1,
0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,5,42,0,0,141,7,1,0,0,0,142,
143,5,1,0,0,143,144,5,71,0,0,144,146,5,36,0,0,145,147,3,68,34,0,146,145,
1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,151,5,37,0,0,149,150,5,48,0,
0,150,152,3,74,37,0,151,149,1,0,0,0,151,152,1,0,0,0,152,153,1,0,0,0,153,
154,3,4,2,0,154,9,1,0,0,0,155,156,5,21,0,0,156,157,5,71,0,0,157,161,5,38,
0,0,158,160,3,12,6,0,159,158,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,
162,1,0,0,0,162,164,1,0,0,0,163,161,1,0,0,0,164,165,5,39,0,0,165,11,1,0,
0,0,166,167,5,71,0,0,167,168,5,48,0,0,168,169,3,74,37,0,169,170,5,42,0,0,
170,13,1,0,0,0,171,172,5,22,0,0,172,173,5,71,0,0,173,174,5,38,0,0,174,179,
5,71,0,0,175,176,5,43,0,0,176,178,5,71,0,0,177,175,1,0,0,0,178,181,1,0,0,
0,179,177,1,0,0,0,179,180,1,0,0,0,180,182,1,0,0,0,181,179,1,0,0,0,182,183,
5,39,0,0,183,15,1,0,0,0,184,185,5,23,0,0,185,186,5,71,0,0,186,190,5,38,0,
0,187,189,3,18,9,0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,
1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,193,194,5,39,0,0,194,17,1,0,0,0,
195,196,5,71,0,0,196,197,5,48,0,0,197,198,3,74,37,0,198,199,5,42,0,0,199,
19,1,0,0,0,200,201,5,25,0,0,201,202,5,71,0,0,202,203,5,44,0,0,203,204,3,
74,37,0,204,205,5,42,0,0,205,21,1,0,0,0,206,207,5,9,0,0,207,210,5,71,0,0,
208,209,5,10,0,0,209,211,5,71,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,212,
1,0,0,0,212,216,5,38,0,0,213,215,3,24,12,0,214,213,1,0,0,0,215,218,1,0,0,
0,216,214,1,0,0,0,216,217,1,0,0,0,217,219,1,0,0,0,218,216,1,0,0,0,219,220,
5,39,0,0,220,23,1,0,0,0,221,222,5,71,0,0,222,224,5,36,0,0,223,225,3,68,34,
0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,229,5,37,0,0,227,228,
5,48,0,0,228,230,3,74,37,0,229,227,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,
0,231,234,3,4,2,0,232,234,3,6,3,0,233,221,1,0,0,0,233,232,1,0,0,0,234,25,
1,0,0,0,235,236,5,11,0,0,236,237,5,38,0,0,237,238,3,28,14,0,238,239,5,39,
0,0,239,240,5,13,0,0,240,241,5,69,0,0,241,242,5,42,0,0,242,249,1,0,0,0,243,
244,5,11,0,0,244,245,5,71,0,0,245,246,5,13,0,0,246,247,5,69,0,0,247,249,
5,42,0,0,248,235,1,0,0,0,248,243,1,0,0,0,249,27,1,0,0,0,250,255,3,30,15,
0,251,252,5,43,0,0,252,254,3,30,15,0,253,251,1,0,0,0,254,257,1,0,0,0,255,
253,1,0,0,0,255,256,1,0,0,0,256,29,1,0,0,0,257,255,1,0,0,0,258,261,5,71,
0,0,259,260,5,24,0,0,260,262,5,71,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,
31,1,0,0,0,263,269,5,12,0,0,264,270,3,6,3,0,265,270,3,8,4,0,266,270,3,22,
11,0,267,270,3,10,5,0,268,270,3,14,7,0,269,264,1,0,0,0,269,265,1,0,0,0,269,
266,1,0,0,0,269,267,1,0,0,0,269,268,1,0,0,0,270,33,1,0,0,0,271,272,5,5,0,
0,272,273,3,2,1,0,273,35,1,0,0,0,274,275,5,6,0,0,275,276,5,36,0,0,276,277,
3,64,32,0,277,278,5,37,0,0,278,281,3,2,1,0,279,280,5,7,0,0,280,282,3,2,1,
0,281,279,1,0,0,0,281,282,1,0,0,0,282,37,1,0,0,0,283,284,5,14,0,0,284,285,
3,4,2,0,285,293,5,15,0,0,286,287,5,36,0,0,287,290,5,71,0,0,288,289,5,48,
0,0,289,291,3,74,37,0,290,288,1,0,0,0,290,291,1,0,0,0,291,292,1,0,0,0,292,
294,5,37,0,0,293,286,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,298,3,4,
2,0,296,297,5,16,0,0,297,299,3,4,2,0,298,296,1,0,0,0,298,299,1,0,0,0,299,
39,1,0,0,0,300,301,5,18,0,0,301,305,5,36,0,0,302,306,3,6,3,0,303,306,3,46,
23,0,304,306,5,42,0,0,305,302,1,0,0,0,305,303,1,0,0,0,305,304,1,0,0,0,306,
308,1,0,0,0,307,309,3,64,32,0,308,307,1,0,0,0,308,309,1,0,0,0,309,310,1,
0,0,0,310,312,5,42,0,0,311,313,3,64,32,0,312,311,1,0,0,0,312,313,1,0,0,0,
313,314,1,0,0,0,314,315,5,37,0,0,315,316,3,2,1,0,316,41,1,0,0,0,317,318,
5,19,0,0,318,319,5,36,0,0,319,320,3,64,32,0,320,321,5,37,0,0,321,322,3,2,
1,0,322,43,1,0,0,0,323,325,5,8,0,0,324,326,3,64,32,0,325,324,1,0,0,0,325,
326,1,0,0,0,326,327,1,0,0,0,327,328,5,42,0,0,328,45,1,0,0,0,329,330,3,64,
32,0,330,331,5,42,0,0,331,47,1,0,0,0,332,333,5,28,0,0,333,334,3,2,1,0,334,
49,1,0,0,0,335,336,5,29,0,0,336,337,3,4,2,0,337,51,1,0,0,0,338,339,5,30,
0,0,339,340,5,36,0,0,340,341,3,64,32,0,341,342,5,37,0,0,342,343,3,2,1,0,
343,53,1,0,0,0,344,345,5,31,0,0,345,346,3,64,32,0,346,347,3,2,1,0,347,55,
1,0,0,0,348,349,5,32,0,0,349,350,3,2,1,0,350,57,1,0,0,0,351,352,5,33,0,0,
352,353,3,64,32,0,353,354,5,42,0,0,354,59,1,0,0,0,355,356,5,34,0,0,356,357,
5,42,0,0,357,61,1,0,0,0,358,359,5,35,0,0,359,360,5,42,0,0,360,63,1,0,0,0,
361,362,6,32,-1,0,362,363,5,17,0,0,363,364,3,64,32,0,364,366,5,36,0,0,365,
367,3,72,36,0,366,365,1,0,0,0,366,367,1,0,0,0,367,368,1,0,0,0,368,369,5,
37,0,0,369,393,1,0,0,0,370,371,5,26,0,0,371,372,3,64,32,0,372,376,5,38,0,
0,373,375,3,66,33,0,374,373,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,0,376,
377,1,0,0,0,377,379,1,0,0,0,378,376,1,0,0,0,379,380,5,39,0,0,380,393,1,0,
0,0,381,382,5,62,0,0,382,393,3,64,32,7,383,393,5,71,0,0,384,393,3,84,42,
0,385,393,3,78,39,0,386,393,3,80,40,0,387,393,5,20,0,0,388,389,5,36,0,0,
389,390,3,64,32,0,390,391,5,37,0,0,391,393,1,0,0,0,392,361,1,0,0,0,392,370,
1,0,0,0,392,381,1,0,0,0,392,383,1,0,0,0,392,384,1,0,0,0,392,385,1,0,0,0,
392,386,1,0,0,0,392,387,1,0,0,0,392,388,1,0,0,0,393,428,1,0,0,0,394,395,
10,14,0,0,395,396,5,63,0,0,396,427,3,64,32,15,397,398,10,12,0,0,398,399,
7,1,0,0,399,427,3,64,32,12,400,401,10,11,0,0,401,402,7,2,0,0,402,427,3,64,
32,12,403,404,10,10,0,0,404,405,7,3,0,0,405,427,3,64,32,11,406,407,10,9,
0,0,407,408,7,4,0,0,408,427,3,64,32,10,409,410,10,8,0,0,410,411,7,5,0,0,
411,427,3,64,32,9,412,413,10,18,0,0,413,414,5,47,0,0,414,427,5,71,0,0,415,
416,10,17,0,0,416,417,5,40,0,0,417,418,3,64,32,0,418,419,5,41,0,0,419,427,
1,0,0,0,420,421,10,16,0,0,421,423,5,36,0,0,422,424,3,72,36,0,423,422,1,0,
0,0,423,424,1,0,0,0,424,425,1,0,0,0,425,427,5,37,0,0,426,394,1,0,0,0,426,
397,1,0,0,0,426,400,1,0,0,0,426,403,1,0,0,0,426,406,1,0,0,0,426,409,1,0,
0,0,426,412,1,0,0,0,426,415,1,0,0,0,426,420,1,0,0,0,427,430,1,0,0,0,428,
426,1,0,0,0,428,429,1,0,0,0,429,65,1,0,0,0,430,428,1,0,0,0,431,434,3,64,
32,0,432,434,5,27,0,0,433,431,1,0,0,0,433,432,1,0,0,0,434,435,1,0,0,0,435,
438,5,64,0,0,436,439,3,64,32,0,437,439,3,4,2,0,438,436,1,0,0,0,438,437,1,
0,0,0,439,67,1,0,0,0,440,445,3,70,35,0,441,442,5,43,0,0,442,444,3,70,35,
0,443,441,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,69,
1,0,0,0,447,445,1,0,0,0,448,451,5,71,0,0,449,450,5,48,0,0,450,452,3,74,37,
0,451,449,1,0,0,0,451,452,1,0,0,0,452,455,1,0,0,0,453,454,5,44,0,0,454,456,
3,64,32,0,455,453,1,0,0,0,455,456,1,0,0,0,456,71,1,0,0,0,457,462,3,64,32,
0,458,459,5,43,0,0,459,461,3,64,32,0,460,458,1,0,0,0,461,464,1,0,0,0,462,
460,1,0,0,0,462,463,1,0,0,0,463,73,1,0,0,0,464,462,1,0,0,0,465,466,6,37,
-1,0,466,468,5,71,0,0,467,469,3,76,38,0,468,467,1,0,0,0,468,469,1,0,0,0,
469,475,1,0,0,0,470,471,10,1,0,0,471,472,5,61,0,0,472,474,3,74,37,2,473,
470,1,0,0,0,474,477,1,0,0,0,475,473,1,0,0,0,475,476,1,0,0,0,476,75,1,0,0,
0,477,475,1,0,0,0,478,479,5,40,0,0,479,480,5,41,0,0,480,77,1,0,0,0,481,483,
5,40,0,0,482,484,3,72,36,0,483,482,1,0,0,0,483,484,1,0,0,0,484,485,1,0,0,
0,485,486,5,41,0,0,486,79,1,0,0,0,487,488,5,38,0,0,488,493,3,82,41,0,489,
490,5,43,0,0,490,492,3,82,41,0,491,489,1,0,0,0,492,495,1,0,0,0,493,491,1,
0,0,0,493,494,1,0,0,0,494,496,1,0,0,0,495,493,1,0,0,0,496,497,5,39,0,0,497,
81,1,0,0,0,498,499,5,71,0,0,499,500,5,48,0,0,500,501,3,64,32,0,501,83,1,
0,0,0,502,503,7,6,0,0,503,85,1,0,0,0,43,89,119,125,134,138,146,151,161,179,
190,210,216,224,229,233,248,255,261,269,281,290,293,298,305,308,312,325,
366,376,392,423,426,428,433,438,445,451,455,462,468,475,483,493];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ZScriptParser extends antlr4.Parser {

    static grammarFileName = "ZScript.g4";
    static literalNames = [ null, "'fn'", "'let'", "'var'", "'const'", "'defer'",
                            "'if'", "'else'", "'return'", "'class'", "'extends'",
                            "'import'", "'export'", "'from'", "'try'", "'catch'",
                            "'finally'", "'new'", "'for'", "'while'", "'this'",
                            "'struct'", "'enum'", "'interface'", "'as'",
                            "'type'", "'match'", "'default'", "'queue'",
                            "'js'", "'unless'", "'repeat'", "'forever'",
                            "'fail'", "'break'", "'continue'", "'('", "')'",
                            "'{'", "'}'", "'['", "']'", "';'", "','", "'='",
                            "'+='", "'-='", "'.'", "':'", "'+'", "'-'",
                            "'*'", "'/'", "'%'", "'<'", "'>'", "'<='", "'>='",
                            "'=='", "'!='", "'&&'", "'||'", "'!'", "'|>'",
                            "'=>'", "'null'" ];
    static symbolicNames = [ null, "FN", "LET", "VAR", "CONST", "DEFER",
                             "IF", "ELSE", "RETURN", "CLASS", "EXTENDS",
                             "IMPORT", "EXPORT", "FROM", "TRY", "CATCH",
                             "FINALLY", "NEW", "FOR", "WHILE", "THIS", "STRUCT",
                             "ENUM", "INTERFACE", "AS", "TYPE", "MATCH",
                             "DEFAULT", "QUEUE", "JS", "UNLESS", "REPEAT",
                             "FOREVER", "FAIL", "BREAK", "CONTINUE", "OpenParen",
                             "CloseParen", "OpenBrace", "CloseBrace", "OpenBracket",
                             "CloseBracket", "SemiColon", "Comma", "Assign",
                             "PlusAssign", "MinusAssign", "Dot", "COLON",
                             "Plus", "Minus", "Multiply", "Divide", "Modulus",
                             "LessThan", "MoreThan", "LessEqual", "MoreEqual",
                             "Equals_", "NotEquals", "AND", "OR", "NOT",
                             "Pipe", "Arrow", "NullLiteral", "BooleanLiteral",
                             "DecimalLiteral", "BigIntLiteral", "StringLiteral",
                             "TemplateString", "Identifier", "DOC_COMMENT",
                             "LineComment", "BlockComment", "WhiteSpaces" ];
    static ruleNames = [ "program", "statement", "block", "varDecl", "functionDecl",
                         "structDecl", "structField", "enumDecl", "interfaceDecl",
                         "interfaceField", "typeAlias", "classDecl", "classElement",
                         "importStmt", "importItems", "importItem", "exportStmt",
                         "deferStmt", "ifStatement", "tryStatement", "forStatement",
                         "whileStatement", "returnStatement", "expressionStatement",
                         "queueStmt", "jsBlock", "unlessStmt", "repeatStmt",
                         "foreverStmt", "failStmt", "breakStmt", "continueStmt",
                         "expression", "matchArm", "formalParameterList",
                         "parameter", "arguments", "type", "typeSuffix",
                         "arrayLiteral", "objectLiteral", "property", "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ZScriptParser.ruleNames;
        this.literalNames = ZScriptParser.literalNames;
        this.symbolicNames = ZScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 32:
			return this.expression_sempred(localctx, predIndex);
	case 37:
			return this.type_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 18);
		case 7:
			return this.precpred(this._ctx, 17);
		case 8:
			return this.precpred(this._ctx, 16);
		default:
			throw "No predicate with index:" + predIndex;
	}
    };

    type_sempred(localctx, predIndex) {
	switch(predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ZScriptParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4143864702) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1073742175) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 127) !== 0)) {
	            this.state = 86;
	            this.statement();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(ZScriptParser.EOF);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ZScriptParser.RULE_statement);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.varDecl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 96;
	            this.typeAlias();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 97;
	            this.functionDecl();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 98;
	            this.classDecl();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 99;
	            this.structDecl();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 100;
	            this.enumDecl();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 101;
	            this.interfaceDecl();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 102;
	            this.importStmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 103;
	            this.exportStmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 104;
	            this.deferStmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 105;
	            this.ifStatement();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 106;
	            this.tryStatement();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 107;
	            this.forStatement();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 108;
	            this.whileStatement();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 109;
	            this.returnStatement();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 110;
	            this.expressionStatement();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 111;
	            this.queueStmt();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 112;
	            this.jsBlock();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 113;
	            this.unlessStmt();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 114;
	            this.repeatStmt();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 115;
	            this.foreverStmt();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 116;
	            this.failStmt();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 117;
	            this.breakStmt();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 118;
	            this.continueStmt();
	            break;

	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ZScriptParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4143864702) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1073742175) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 127) !== 0)) {
	            this.state = 122;
	            this.statement();
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 128;
	        this.match(ZScriptParser.CloseBrace);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDecl() {
	    let localctx = new VarDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ZScriptParser.RULE_varDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
			this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 131;
	        this.match(ZScriptParser.Identifier);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 132;
	            this.match(ZScriptParser.COLON);
	            this.state = 133;
	            this.type(0);
	        }

	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 136;
	            this.match(ZScriptParser.Assign);
	            this.state = 137;
	            this.expression(0);
	        }

	        this.state = 140;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDecl() {
	    let localctx = new FunctionDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ZScriptParser.RULE_functionDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(ZScriptParser.FN);
	        this.state = 143;
	        this.match(ZScriptParser.Identifier);
	        this.state = 144;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===71) {
	            this.state = 145;
	            this.formalParameterList();
	        }

	        this.state = 148;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 149;
	            this.match(ZScriptParser.COLON);
	            this.state = 150;
	            this.type(0);
	        }

	        this.state = 153;
	        this.block();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structDecl() {
	    let localctx = new StructDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ZScriptParser.RULE_structDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(ZScriptParser.STRUCT);
	        this.state = 156;
	        this.match(ZScriptParser.Identifier);
	        this.state = 157;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 158;
	            this.structField();
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 164;
	        this.match(ZScriptParser.CloseBrace);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structField() {
	    let localctx = new StructFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ZScriptParser.RULE_structField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(ZScriptParser.Identifier);
	        this.state = 167;
	        this.match(ZScriptParser.COLON);
	        this.state = 168;
	        this.type(0);
	        this.state = 169;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumDecl() {
	    let localctx = new EnumDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ZScriptParser.RULE_enumDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(ZScriptParser.ENUM);
	        this.state = 172;
	        this.match(ZScriptParser.Identifier);
	        this.state = 173;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 174;
	        this.match(ZScriptParser.Identifier);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 175;
	            this.match(ZScriptParser.Comma);
	            this.state = 176;
	            this.match(ZScriptParser.Identifier);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 182;
	        this.match(ZScriptParser.CloseBrace);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceDecl() {
	    let localctx = new InterfaceDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ZScriptParser.RULE_interfaceDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(ZScriptParser.INTERFACE);
	        this.state = 185;
	        this.match(ZScriptParser.Identifier);
	        this.state = 186;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 187;
	            this.interfaceField();
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 193;
	        this.match(ZScriptParser.CloseBrace);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceField() {
	    let localctx = new InterfaceFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ZScriptParser.RULE_interfaceField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(ZScriptParser.Identifier);
	        this.state = 196;
	        this.match(ZScriptParser.COLON);
	        this.state = 197;
	        this.type(0);
	        this.state = 198;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeAlias() {
	    let localctx = new TypeAliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ZScriptParser.RULE_typeAlias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(ZScriptParser.TYPE);
	        this.state = 201;
	        this.match(ZScriptParser.Identifier);
	        this.state = 202;
	        this.match(ZScriptParser.Assign);
	        this.state = 203;
	        this.type(0);
	        this.state = 204;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classDecl() {
	    let localctx = new ClassDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ZScriptParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(ZScriptParser.CLASS);
	        this.state = 207;
	        this.match(ZScriptParser.Identifier);
	        this.state = 210;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 208;
	            this.match(ZScriptParser.EXTENDS);
	            this.state = 209;
	            this.match(ZScriptParser.Identifier);
	        }

	        this.state = 212;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0) || _la===71) {
	            this.state = 213;
	            this.classElement();
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 219;
	        this.match(ZScriptParser.CloseBrace);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classElement() {
	    let localctx = new ClassElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ZScriptParser.RULE_classElement);
	    var _la = 0;
	    try {
	        this.state = 233;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 71:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.match(ZScriptParser.Identifier);
	            this.state = 222;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===71) {
	                this.state = 223;
	                this.formalParameterList();
	            }

	            this.state = 226;
	            this.match(ZScriptParser.CloseParen);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 227;
	                this.match(ZScriptParser.COLON);
	                this.state = 228;
	                this.type(0);
	            }

	            this.state = 231;
	            this.block();
	            break;
	        case 2:
	        case 3:
	        case 4:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            this.varDecl();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStmt() {
	    let localctx = new ImportStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ZScriptParser.RULE_importStmt);
	    try {
	        this.state = 248;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 235;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 236;
	            this.match(ZScriptParser.OpenBrace);
	            this.state = 237;
	            this.importItems();
	            this.state = 238;
	            this.match(ZScriptParser.CloseBrace);
	            this.state = 239;
	            this.match(ZScriptParser.FROM);
	            this.state = 240;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 241;
	            this.match(ZScriptParser.SemiColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 243;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 244;
	            this.match(ZScriptParser.Identifier);
	            this.state = 245;
	            this.match(ZScriptParser.FROM);
	            this.state = 246;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 247;
	            this.match(ZScriptParser.SemiColon);
	            break;

	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importItems() {
	    let localctx = new ImportItemsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ZScriptParser.RULE_importItems);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.importItem();
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 251;
	            this.match(ZScriptParser.Comma);
	            this.state = 252;
	            this.importItem();
	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importItem() {
	    let localctx = new ImportItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ZScriptParser.RULE_importItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(ZScriptParser.Identifier);
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 259;
	            this.match(ZScriptParser.AS);
	            this.state = 260;
	            this.match(ZScriptParser.Identifier);
	        }

	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exportStmt() {
	    let localctx = new ExportStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ZScriptParser.RULE_exportStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(ZScriptParser.EXPORT);
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	            this.state = 264;
	            this.varDecl();
	            break;
	        case 1:
	            this.state = 265;
	            this.functionDecl();
	            break;
	        case 9:
	            this.state = 266;
	            this.classDecl();
	            break;
	        case 21:
	            this.state = 267;
	            this.structDecl();
	            break;
	        case 22:
	            this.state = 268;
	            this.enumDecl();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deferStmt() {
	    let localctx = new DeferStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ZScriptParser.RULE_deferStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(ZScriptParser.DEFER);
	        this.state = 272;
	        this.statement();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ZScriptParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(ZScriptParser.IF);
	        this.state = 275;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 276;
	        this.expression(0);
	        this.state = 277;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 278;
	        this.statement();
	        this.state = 281;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 279;
	            this.match(ZScriptParser.ELSE);
	            this.state = 280;
	            this.statement();

	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tryStatement() {
	    let localctx = new TryStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ZScriptParser.RULE_tryStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(ZScriptParser.TRY);
	        this.state = 284;
	        this.block();
	        this.state = 285;
	        this.match(ZScriptParser.CATCH);
	        this.state = 293;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 286;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 287;
	            this.match(ZScriptParser.Identifier);
	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 288;
	                this.match(ZScriptParser.COLON);
	                this.state = 289;
	                this.type(0);
	            }

	            this.state = 292;
	            this.match(ZScriptParser.CloseParen);
	        }

	        this.state = 295;
	        this.block();
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 296;
	            this.match(ZScriptParser.FINALLY);
	            this.state = 297;
	            this.block();
	        }

	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ZScriptParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(ZScriptParser.FOR);
	        this.state = 301;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 305;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	            this.state = 302;
	            this.varDecl();
	            break;
	        case 17:
	        case 20:
	        case 26:
	        case 36:
	        case 38:
	        case 40:
	        case 62:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	            this.state = 303;
	            this.expressionStatement();
	            break;
	        case 42:
	            this.state = 304;
	            this.match(ZScriptParser.SemiColon);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 308;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 11010569) !== 0) || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 1017) !== 0)) {
	            this.state = 307;
	            this.expression(0);
	        }

	        this.state = 310;
	        this.match(ZScriptParser.SemiColon);
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 11010569) !== 0) || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 1017) !== 0)) {
	            this.state = 311;
	            this.expression(0);
	        }

	        this.state = 314;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 315;
	        this.statement();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ZScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(ZScriptParser.WHILE);
	        this.state = 318;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 319;
	        this.expression(0);
	        this.state = 320;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 321;
	        this.statement();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ZScriptParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.match(ZScriptParser.RETURN);
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 11010569) !== 0) || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 1017) !== 0)) {
	            this.state = 324;
	            this.expression(0);
	        }

	        this.state = 327;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ZScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.expression(0);
	        this.state = 330;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	queueStmt() {
	    let localctx = new QueueStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ZScriptParser.RULE_queueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.match(ZScriptParser.QUEUE);
	        this.state = 333;
	        this.statement();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jsBlock() {
	    let localctx = new JsBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ZScriptParser.RULE_jsBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(ZScriptParser.JS);
	        this.state = 336;
	        this.block();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unlessStmt() {
	    let localctx = new UnlessStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ZScriptParser.RULE_unlessStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(ZScriptParser.UNLESS);
	        this.state = 339;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 340;
	        this.expression(0);
	        this.state = 341;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 342;
	        this.statement();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeatStmt() {
	    let localctx = new RepeatStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ZScriptParser.RULE_repeatStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(ZScriptParser.REPEAT);
	        this.state = 345;
	        this.expression(0);
	        this.state = 346;
	        this.statement();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	foreverStmt() {
	    let localctx = new ForeverStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ZScriptParser.RULE_foreverStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.match(ZScriptParser.FOREVER);
	        this.state = 349;
	        this.statement();
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	failStmt() {
	    let localctx = new FailStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, ZScriptParser.RULE_failStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(ZScriptParser.FAIL);
	        this.state = 352;
	        this.expression(0);
	        this.state = 353;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	breakStmt() {
	    let localctx = new BreakStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ZScriptParser.RULE_breakStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(ZScriptParser.BREAK);
	        this.state = 356;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	continueStmt() {
	    let localctx = new ContinueStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ZScriptParser.RULE_continueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(ZScriptParser.CONTINUE);
	        this.state = 359;
	        this.match(ZScriptParser.SemiColon);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 64;
	    this.enterRecursionRule(localctx, 64, ZScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            localctx = new NewExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 362;
	            this.match(ZScriptParser.NEW);
	            this.state = 363;
	            this.expression(0);
	            this.state = 364;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 366;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 11010569) !== 0) || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 1017) !== 0)) {
	                this.state = 365;
	                this.arguments();
	            }

	            this.state = 368;
	            this.match(ZScriptParser.CloseParen);
	            break;
	        case 26:
	            localctx = new MatchExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 370;
	            this.match(ZScriptParser.MATCH);
	            this.state = 371;
	            this.expression(0);
	            this.state = 372;
	            this.match(ZScriptParser.OpenBrace);
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 11011593) !== 0) || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 1017) !== 0)) {
	                this.state = 373;
	                this.matchArm();
	                this.state = 378;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 379;
	            this.match(ZScriptParser.CloseBrace);
	            break;
	        case 62:
	            localctx = new UnaryOpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 381;
	            this.match(ZScriptParser.NOT);
	            this.state = 382;
	            this.expression(7);
	            break;
	        case 71:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 383;
	            this.match(ZScriptParser.Identifier);
	            break;
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 384;
	            this.literal();
	            break;
	        case 40:
	            localctx = new ArrayExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 385;
	            this.arrayLiteral();
	            break;
	        case 38:
	            localctx = new ObjectExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 386;
	            this.objectLiteral();
	            break;
	        case 20:
	            localctx = new ThisExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 387;
	            this.match(ZScriptParser.THIS);
	            break;
	        case 36:
	            localctx = new ParenthesizedExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 388;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 389;
	            this.expression(0);
	            this.state = 390;
	            this.match(ZScriptParser.CloseParen);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 428;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 426;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PipeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 394;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 395;
	                    this.match(ZScriptParser.Pipe);
	                    this.state = 396;
	                    this.expression(15);
	                    break;

	                case 2:
	                    localctx = new AssignmentExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 397;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 398;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 399;
	                    this.expression(12);
	                    break;

	                case 3:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 400;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 401;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 402;
	                    this.expression(12);
	                    break;

	                case 4:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 403;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 404;
	                    _la = this._input.LA(1);
	                    if(!(_la===49 || _la===50)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 405;
	                    this.expression(11);
	                    break;

	                case 5:
	                    localctx = new CompareOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 406;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 407;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 54)) & ~0x1f) === 0 && ((1 << (_la - 54)) & 63) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 408;
	                    this.expression(10);
	                    break;

	                case 6:
	                    localctx = new LogicalOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 409;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 410;
	                    _la = this._input.LA(1);
	                    if(!(_la===60 || _la===61)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 411;
	                    this.expression(9);
	                    break;

	                case 7:
	                    localctx = new MemberIndexContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 412;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 413;
	                    this.match(ZScriptParser.Dot);
	                    this.state = 414;
	                    this.match(ZScriptParser.Identifier);
	                    break;

	                case 8:
	                    localctx = new ArrayAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 415;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 416;
	                    this.match(ZScriptParser.OpenBracket);
	                    this.state = 417;
	                    this.expression(0);
	                    this.state = 418;
	                    this.match(ZScriptParser.CloseBracket);
	                    break;

	                case 9:
	                    localctx = new CallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 420;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 421;
	                    this.match(ZScriptParser.OpenParen);
	                    this.state = 423;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 11010569) !== 0) || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 1017) !== 0)) {
	                        this.state = 422;
	                        this.arguments();
	                    }

	                    this.state = 425;
	                    this.match(ZScriptParser.CloseParen);
	                    break;

	                }
	            }
	            this.state = 430;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
			throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	matchArm() {
	    let localctx = new MatchArmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ZScriptParser.RULE_matchArm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 20:
	        case 26:
	        case 36:
	        case 38:
	        case 40:
	        case 62:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	            this.state = 431;
	            this.expression(0);
	            break;
	        case 27:
	            this.state = 432;
	            this.match(ZScriptParser.DEFAULT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 435;
	        this.match(ZScriptParser.Arrow);
	        this.state = 438;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 436;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 437;
	            this.block();
	            break;

	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameterList() {
	    let localctx = new FormalParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, ZScriptParser.RULE_formalParameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.parameter();
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 441;
	            this.match(ZScriptParser.Comma);
	            this.state = 442;
	            this.parameter();
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, ZScriptParser.RULE_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(ZScriptParser.Identifier);
	        this.state = 451;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 449;
	            this.match(ZScriptParser.COLON);
	            this.state = 450;
	            this.type(0);
	        }

	        this.state = 455;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 453;
	            this.match(ZScriptParser.Assign);
	            this.state = 454;
	            this.expression(0);
	        }

	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ZScriptParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this.expression(0);
	        this.state = 462;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 458;
	            this.match(ZScriptParser.Comma);
	            this.state = 459;
	            this.expression(0);
	            this.state = 464;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	type(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TypeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 74;
	    this.enterRecursionRule(localctx, 74, ZScriptParser.RULE_type, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 466;
	        this.match(ZScriptParser.Identifier);
	        this.state = 468;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        if(la_===1) {
	            this.state = 467;
	            this.typeSuffix();

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 475;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TypeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_type);
	                this.state = 470;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 471;
	                this.match(ZScriptParser.OR);
	                this.state = 472;
	                this.type(2);
	            }
	            this.state = 477;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
			throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	typeSuffix() {
	    let localctx = new TypeSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ZScriptParser.RULE_typeSuffix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 479;
	        this.match(ZScriptParser.CloseBracket);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayLiteral() {
	    let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, ZScriptParser.RULE_arrayLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 483;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 11010569) !== 0) || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 1017) !== 0)) {
	            this.state = 482;
	            this.arguments();
	        }

	        this.state = 485;
	        this.match(ZScriptParser.CloseBracket);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectLiteral() {
	    let localctx = new ObjectLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, ZScriptParser.RULE_objectLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 488;
	        this.property();
	        this.state = 493;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 489;
	            this.match(ZScriptParser.Comma);
	            this.state = 490;
	            this.property();
	            this.state = 495;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 496;
	        this.match(ZScriptParser.CloseBrace);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, ZScriptParser.RULE_property);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 498;
	        this.match(ZScriptParser.Identifier);
	        this.state = 499;
	        this.match(ZScriptParser.COLON);
	        this.state = 500;
	        this.expression(0);
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, ZScriptParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 502;
	        _la = this._input.LA(1);
	        if(!(((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
			this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
		if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
			throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ZScriptParser.EOF = antlr4.Token.EOF;
ZScriptParser.FN = 1;
ZScriptParser.LET = 2;
ZScriptParser.VAR = 3;
ZScriptParser.CONST = 4;
ZScriptParser.DEFER = 5;
ZScriptParser.IF = 6;
ZScriptParser.ELSE = 7;
ZScriptParser.RETURN = 8;
ZScriptParser.CLASS = 9;
ZScriptParser.EXTENDS = 10;
ZScriptParser.IMPORT = 11;
ZScriptParser.EXPORT = 12;
ZScriptParser.FROM = 13;
ZScriptParser.TRY = 14;
ZScriptParser.CATCH = 15;
ZScriptParser.FINALLY = 16;
ZScriptParser.NEW = 17;
ZScriptParser.FOR = 18;
ZScriptParser.WHILE = 19;
ZScriptParser.THIS = 20;
ZScriptParser.STRUCT = 21;
ZScriptParser.ENUM = 22;
ZScriptParser.INTERFACE = 23;
ZScriptParser.AS = 24;
ZScriptParser.TYPE = 25;
ZScriptParser.MATCH = 26;
ZScriptParser.DEFAULT = 27;
ZScriptParser.QUEUE = 28;
ZScriptParser.JS = 29;
ZScriptParser.UNLESS = 30;
ZScriptParser.REPEAT = 31;
ZScriptParser.FOREVER = 32;
ZScriptParser.FAIL = 33;
ZScriptParser.BREAK = 34;
ZScriptParser.CONTINUE = 35;
ZScriptParser.OpenParen = 36;
ZScriptParser.CloseParen = 37;
ZScriptParser.OpenBrace = 38;
ZScriptParser.CloseBrace = 39;
ZScriptParser.OpenBracket = 40;
ZScriptParser.CloseBracket = 41;
ZScriptParser.SemiColon = 42;
ZScriptParser.Comma = 43;
ZScriptParser.Assign = 44;
ZScriptParser.PlusAssign = 45;
ZScriptParser.MinusAssign = 46;
ZScriptParser.Dot = 47;
ZScriptParser.COLON = 48;
ZScriptParser.Plus = 49;
ZScriptParser.Minus = 50;
ZScriptParser.Multiply = 51;
ZScriptParser.Divide = 52;
ZScriptParser.Modulus = 53;
ZScriptParser.LessThan = 54;
ZScriptParser.MoreThan = 55;
ZScriptParser.LessEqual = 56;
ZScriptParser.MoreEqual = 57;
ZScriptParser.Equals_ = 58;
ZScriptParser.NotEquals = 59;
ZScriptParser.AND = 60;
ZScriptParser.OR = 61;
ZScriptParser.NOT = 62;
ZScriptParser.Pipe = 63;
ZScriptParser.Arrow = 64;
ZScriptParser.NullLiteral = 65;
ZScriptParser.BooleanLiteral = 66;
ZScriptParser.DecimalLiteral = 67;
ZScriptParser.BigIntLiteral = 68;
ZScriptParser.StringLiteral = 69;
ZScriptParser.TemplateString = 70;
ZScriptParser.Identifier = 71;
ZScriptParser.DOC_COMMENT = 72;
ZScriptParser.LineComment = 73;
ZScriptParser.BlockComment = 74;
ZScriptParser.WhiteSpaces = 75;

ZScriptParser.RULE_program = 0;
ZScriptParser.RULE_statement = 1;
ZScriptParser.RULE_block = 2;
ZScriptParser.RULE_varDecl = 3;
ZScriptParser.RULE_functionDecl = 4;
ZScriptParser.RULE_structDecl = 5;
ZScriptParser.RULE_structField = 6;
ZScriptParser.RULE_enumDecl = 7;
ZScriptParser.RULE_interfaceDecl = 8;
ZScriptParser.RULE_interfaceField = 9;
ZScriptParser.RULE_typeAlias = 10;
ZScriptParser.RULE_classDecl = 11;
ZScriptParser.RULE_classElement = 12;
ZScriptParser.RULE_importStmt = 13;
ZScriptParser.RULE_importItems = 14;
ZScriptParser.RULE_importItem = 15;
ZScriptParser.RULE_exportStmt = 16;
ZScriptParser.RULE_deferStmt = 17;
ZScriptParser.RULE_ifStatement = 18;
ZScriptParser.RULE_tryStatement = 19;
ZScriptParser.RULE_forStatement = 20;
ZScriptParser.RULE_whileStatement = 21;
ZScriptParser.RULE_returnStatement = 22;
ZScriptParser.RULE_expressionStatement = 23;
ZScriptParser.RULE_queueStmt = 24;
ZScriptParser.RULE_jsBlock = 25;
ZScriptParser.RULE_unlessStmt = 26;
ZScriptParser.RULE_repeatStmt = 27;
ZScriptParser.RULE_foreverStmt = 28;
ZScriptParser.RULE_failStmt = 29;
ZScriptParser.RULE_breakStmt = 30;
ZScriptParser.RULE_continueStmt = 31;
ZScriptParser.RULE_expression = 32;
ZScriptParser.RULE_matchArm = 33;
ZScriptParser.RULE_formalParameterList = 34;
ZScriptParser.RULE_parameter = 35;
ZScriptParser.RULE_arguments = 36;
ZScriptParser.RULE_type = 37;
ZScriptParser.RULE_typeSuffix = 38;
ZScriptParser.RULE_arrayLiteral = 39;
ZScriptParser.RULE_objectLiteral = 40;
ZScriptParser.RULE_property = 41;
ZScriptParser.RULE_literal = 42;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_program;
    }

	EOF() {
	    return this.getToken(ZScriptParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_statement;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	typeAlias() {
	    return this.getTypedRuleContext(TypeAliasContext,0);
	};

	functionDecl() {
	    return this.getTypedRuleContext(FunctionDeclContext,0);
	};

	classDecl() {
	    return this.getTypedRuleContext(ClassDeclContext,0);
	};

	structDecl() {
	    return this.getTypedRuleContext(StructDeclContext,0);
	};

	enumDecl() {
	    return this.getTypedRuleContext(EnumDeclContext,0);
	};

	interfaceDecl() {
	    return this.getTypedRuleContext(InterfaceDeclContext,0);
	};

	importStmt() {
	    return this.getTypedRuleContext(ImportStmtContext,0);
	};

	exportStmt() {
	    return this.getTypedRuleContext(ExportStmtContext,0);
	};

	deferStmt() {
	    return this.getTypedRuleContext(DeferStmtContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	tryStatement() {
	    return this.getTypedRuleContext(TryStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	queueStmt() {
	    return this.getTypedRuleContext(QueueStmtContext,0);
	};

	jsBlock() {
	    return this.getTypedRuleContext(JsBlockContext,0);
	};

	unlessStmt() {
	    return this.getTypedRuleContext(UnlessStmtContext,0);
	};

	repeatStmt() {
	    return this.getTypedRuleContext(RepeatStmtContext,0);
	};

	foreverStmt() {
	    return this.getTypedRuleContext(ForeverStmtContext,0);
	};

	failStmt() {
	    return this.getTypedRuleContext(FailStmtContext,0);
	};

	breakStmt() {
	    return this.getTypedRuleContext(BreakStmtContext,0);
	};

	continueStmt() {
	    return this.getTypedRuleContext(ContinueStmtContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_block;
    }

	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_varDecl;
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	LET() {
	    return this.getToken(ZScriptParser.LET, 0);
	};

	VAR() {
	    return this.getToken(ZScriptParser.VAR, 0);
	};

	CONST() {
	    return this.getToken(ZScriptParser.CONST, 0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Assign() {
	    return this.getToken(ZScriptParser.Assign, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitVarDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_functionDecl;
    }

	FN() {
	    return this.getToken(ZScriptParser.FN, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitFunctionDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_structDecl;
    }

	STRUCT() {
	    return this.getToken(ZScriptParser.STRUCT, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	structField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructFieldContext);
	    } else {
	        return this.getTypedRuleContext(StructFieldContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitStructDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_structField;
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitStructField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EnumDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_enumDecl;
    }

	ENUM() {
	    return this.getToken(ZScriptParser.ENUM, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Identifier);
	    } else {
	        return this.getToken(ZScriptParser.Identifier, i);
	    }
	};


	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Comma);
	    } else {
	        return this.getToken(ZScriptParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitEnumDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_interfaceDecl;
    }

	INTERFACE() {
	    return this.getToken(ZScriptParser.INTERFACE, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	interfaceField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InterfaceFieldContext);
	    } else {
	        return this.getTypedRuleContext(InterfaceFieldContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitInterfaceDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_interfaceField;
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitInterfaceField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeAliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_typeAlias;
    }

	TYPE() {
	    return this.getToken(ZScriptParser.TYPE, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(ZScriptParser.Assign, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitTypeAlias(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_classDecl;
    }

	CLASS() {
	    return this.getToken(ZScriptParser.CLASS, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Identifier);
	    } else {
	        return this.getToken(ZScriptParser.Identifier, i);
	    }
	};


	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	EXTENDS() {
	    return this.getToken(ZScriptParser.EXTENDS, 0);
	};

	classElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassElementContext);
	    } else {
	        return this.getTypedRuleContext(ClassElementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitClassDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_classElement;
    }



		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ClassMethodContext extends ClassElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitClassMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ClassMethodContext = ClassMethodContext;

class ClassFieldContext extends ClassElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitClassField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ClassFieldContext = ClassFieldContext;

class ImportStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_importStmt;
    }

	IMPORT() {
	    return this.getToken(ZScriptParser.IMPORT, 0);
	};

	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	importItems() {
	    return this.getTypedRuleContext(ImportItemsContext,0);
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	FROM() {
	    return this.getToken(ZScriptParser.FROM, 0);
	};

	StringLiteral() {
	    return this.getToken(ZScriptParser.StringLiteral, 0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitImportStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportItemsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_importItems;
    }

	importItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportItemContext);
	    } else {
	        return this.getTypedRuleContext(ImportItemContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Comma);
	    } else {
	        return this.getToken(ZScriptParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitImportItems(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_importItem;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Identifier);
	    } else {
	        return this.getToken(ZScriptParser.Identifier, i);
	    }
	};


	AS() {
	    return this.getToken(ZScriptParser.AS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitImportItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExportStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_exportStmt;
    }

	EXPORT() {
	    return this.getToken(ZScriptParser.EXPORT, 0);
	};

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	functionDecl() {
	    return this.getTypedRuleContext(FunctionDeclContext,0);
	};

	classDecl() {
	    return this.getTypedRuleContext(ClassDeclContext,0);
	};

	structDecl() {
	    return this.getTypedRuleContext(StructDeclContext,0);
	};

	enumDecl() {
	    return this.getTypedRuleContext(EnumDeclContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitExportStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeferStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_deferStmt;
    }

	DEFER() {
	    return this.getToken(ZScriptParser.DEFER, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitDeferStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(ZScriptParser.IF, 0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(ZScriptParser.ELSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TryStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_tryStatement;
    }

	TRY() {
	    return this.getToken(ZScriptParser.TRY, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	CATCH() {
	    return this.getToken(ZScriptParser.CATCH, 0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	FINALLY() {
	    return this.getToken(ZScriptParser.FINALLY, 0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitTryStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(ZScriptParser.FOR, 0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	SemiColon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.SemiColon);
	    } else {
	        return this.getToken(ZScriptParser.SemiColon, i);
	    }
	};


	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(ZScriptParser.WHILE, 0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_returnStatement;
    }

	RETURN() {
	    return this.getToken(ZScriptParser.RETURN, 0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QueueStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_queueStmt;
    }

	QUEUE() {
	    return this.getToken(ZScriptParser.QUEUE, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitQueueStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JsBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_jsBlock;
    }

	JS() {
	    return this.getToken(ZScriptParser.JS, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitJsBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnlessStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_unlessStmt;
    }

	UNLESS() {
	    return this.getToken(ZScriptParser.UNLESS, 0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitUnlessStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepeatStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_repeatStmt;
    }

	REPEAT() {
	    return this.getToken(ZScriptParser.REPEAT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitRepeatStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForeverStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_foreverStmt;
    }

	FOREVER() {
	    return this.getToken(ZScriptParser.FOREVER, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitForeverStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FailStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_failStmt;
    }

	FAIL() {
	    return this.getToken(ZScriptParser.FAIL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitFailStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BreakStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_breakStmt;
    }

	BREAK() {
	    return this.getToken(ZScriptParser.BREAK, 0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitBreakStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContinueStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_continueStmt;
    }

	CONTINUE() {
	    return this.getToken(ZScriptParser.CONTINUE, 0);
	};

	SemiColon() {
	    return this.getToken(ZScriptParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitContinueStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_expression;
    }



		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnaryOpContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(ZScriptParser.NOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitUnaryOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.UnaryOpContext = UnaryOpContext;

class NewExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEW() {
	    return this.getToken(ZScriptParser.NEW, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitNewExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.NewExpressionContext = NewExpressionContext;

class LogicalOpContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	AND() {
	    return this.getToken(ZScriptParser.AND, 0);
	};

	OR() {
	    return this.getToken(ZScriptParser.OR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitLogicalOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.LogicalOpContext = LogicalOpContext;

class AssignmentExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Assign() {
	    return this.getToken(ZScriptParser.Assign, 0);
	};

	PlusAssign() {
	    return this.getToken(ZScriptParser.PlusAssign, 0);
	};

	MinusAssign() {
	    return this.getToken(ZScriptParser.MinusAssign, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitAssignmentExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.AssignmentExprContext = AssignmentExprContext;

class ArrayExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arrayLiteral() {
	    return this.getTypedRuleContext(ArrayLiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitArrayExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ArrayExprContext = ArrayExprContext;

class ArrayAccessContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	OpenBracket() {
	    return this.getToken(ZScriptParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(ZScriptParser.CloseBracket, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitArrayAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ArrayAccessContext = ArrayAccessContext;

class ObjectExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	objectLiteral() {
	    return this.getTypedRuleContext(ObjectLiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitObjectExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ObjectExprContext = ObjectExprContext;

class IdentifierExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitIdentifierExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.IdentifierExprContext = IdentifierExprContext;

class MemberIndexContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	Dot() {
	    return this.getToken(ZScriptParser.Dot, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitMemberIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.MemberIndexContext = MemberIndexContext;

class PipeExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Pipe() {
	    return this.getToken(ZScriptParser.Pipe, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitPipeExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.PipeExprContext = PipeExprContext;

class LiteralExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitLiteralExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.LiteralExprContext = LiteralExprContext;

class ParenthesizedExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitParenthesizedExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ParenthesizedExprContext = ParenthesizedExprContext;

class CompareOpContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LessThan() {
	    return this.getToken(ZScriptParser.LessThan, 0);
	};

	MoreThan() {
	    return this.getToken(ZScriptParser.MoreThan, 0);
	};

	LessEqual() {
	    return this.getToken(ZScriptParser.LessEqual, 0);
	};

	MoreEqual() {
	    return this.getToken(ZScriptParser.MoreEqual, 0);
	};

	Equals_() {
	    return this.getToken(ZScriptParser.Equals_, 0);
	};

	NotEquals() {
	    return this.getToken(ZScriptParser.NotEquals, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitCompareOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.CompareOpContext = CompareOpContext;

class CallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.CallExpressionContext = CallExpressionContext;

class MatchExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MATCH() {
	    return this.getToken(ZScriptParser.MATCH, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	matchArm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MatchArmContext);
	    } else {
	        return this.getTypedRuleContext(MatchArmContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitMatchExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.MatchExprContext = MatchExprContext;

class ThisExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	THIS() {
	    return this.getToken(ZScriptParser.THIS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitThisExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ThisExprContext = ThisExprContext;

class BinaryOpContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Multiply() {
	    return this.getToken(ZScriptParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(ZScriptParser.Divide, 0);
	};

	Modulus() {
	    return this.getToken(ZScriptParser.Modulus, 0);
	};

	Plus() {
	    return this.getToken(ZScriptParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(ZScriptParser.Minus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitBinaryOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.BinaryOpContext = BinaryOpContext;

class MatchArmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_matchArm;
    }

	Arrow() {
	    return this.getToken(ZScriptParser.Arrow, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DEFAULT() {
	    return this.getToken(ZScriptParser.DEFAULT, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitMatchArm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormalParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_formalParameterList;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Comma);
	    } else {
	        return this.getToken(ZScriptParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitFormalParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_parameter;
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Assign() {
	    return this.getToken(ZScriptParser.Assign, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_arguments;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Comma);
	    } else {
	        return this.getToken(ZScriptParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_type;
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	typeSuffix() {
	    return this.getTypedRuleContext(TypeSuffixContext,0);
	};

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	OR() {
	    return this.getToken(ZScriptParser.OR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_typeSuffix;
    }

	OpenBracket() {
	    return this.getToken(ZScriptParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(ZScriptParser.CloseBracket, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitTypeSuffix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_arrayLiteral;
    }

	OpenBracket() {
	    return this.getToken(ZScriptParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(ZScriptParser.CloseBracket, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitArrayLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_objectLiteral;
    }

	OpenBrace() {
	    return this.getToken(ZScriptParser.OpenBrace, 0);
	};

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Comma);
	    } else {
	        return this.getToken(ZScriptParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitObjectLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_property;
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_literal;
    }

	StringLiteral() {
	    return this.getToken(ZScriptParser.StringLiteral, 0);
	};

	DecimalLiteral() {
	    return this.getToken(ZScriptParser.DecimalLiteral, 0);
	};

	BigIntLiteral() {
	    return this.getToken(ZScriptParser.BigIntLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(ZScriptParser.BooleanLiteral, 0);
	};

	NullLiteral() {
	    return this.getToken(ZScriptParser.NullLiteral, 0);
	};

	TemplateString() {
	    return this.getToken(ZScriptParser.TemplateString, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ZScriptParser.ProgramContext = ProgramContext;
ZScriptParser.StatementContext = StatementContext;
ZScriptParser.BlockContext = BlockContext;
ZScriptParser.VarDeclContext = VarDeclContext;
ZScriptParser.FunctionDeclContext = FunctionDeclContext;
ZScriptParser.StructDeclContext = StructDeclContext;
ZScriptParser.StructFieldContext = StructFieldContext;
ZScriptParser.EnumDeclContext = EnumDeclContext;
ZScriptParser.InterfaceDeclContext = InterfaceDeclContext;
ZScriptParser.InterfaceFieldContext = InterfaceFieldContext;
ZScriptParser.TypeAliasContext = TypeAliasContext;
ZScriptParser.ClassDeclContext = ClassDeclContext;
ZScriptParser.ClassElementContext = ClassElementContext;
ZScriptParser.ImportStmtContext = ImportStmtContext;
ZScriptParser.ImportItemsContext = ImportItemsContext;
ZScriptParser.ImportItemContext = ImportItemContext;
ZScriptParser.ExportStmtContext = ExportStmtContext;
ZScriptParser.DeferStmtContext = DeferStmtContext;
ZScriptParser.IfStatementContext = IfStatementContext;
ZScriptParser.TryStatementContext = TryStatementContext;
ZScriptParser.ForStatementContext = ForStatementContext;
ZScriptParser.WhileStatementContext = WhileStatementContext;
ZScriptParser.ReturnStatementContext = ReturnStatementContext;
ZScriptParser.ExpressionStatementContext = ExpressionStatementContext;
ZScriptParser.QueueStmtContext = QueueStmtContext;
ZScriptParser.JsBlockContext = JsBlockContext;
ZScriptParser.UnlessStmtContext = UnlessStmtContext;
ZScriptParser.RepeatStmtContext = RepeatStmtContext;
ZScriptParser.ForeverStmtContext = ForeverStmtContext;
ZScriptParser.FailStmtContext = FailStmtContext;
ZScriptParser.BreakStmtContext = BreakStmtContext;
ZScriptParser.ContinueStmtContext = ContinueStmtContext;
ZScriptParser.ExpressionContext = ExpressionContext;
ZScriptParser.MatchArmContext = MatchArmContext;
ZScriptParser.FormalParameterListContext = FormalParameterListContext;
ZScriptParser.ParameterContext = ParameterContext;
ZScriptParser.ArgumentsContext = ArgumentsContext;
ZScriptParser.TypeContext = TypeContext;
ZScriptParser.TypeSuffixContext = TypeSuffixContext;
ZScriptParser.ArrayLiteralContext = ArrayLiteralContext;
ZScriptParser.ObjectLiteralContext = ObjectLiteralContext;
ZScriptParser.PropertyContext = PropertyContext;
ZScriptParser.LiteralContext = LiteralContext;
