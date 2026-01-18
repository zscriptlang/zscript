// Generated from ZScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ZScriptListener from './ZScriptListener.js';
import ZScriptVisitor from './ZScriptVisitor.js';

const serializedATN = [4,1,70,471,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,5,0,84,
8,0,10,0,12,0,87,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,115,8,1,1,2,1,2,
5,2,119,8,2,10,2,12,2,122,9,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,130,8,3,1,3,1,
3,3,3,134,8,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,142,8,4,1,4,1,4,1,4,3,4,147,8,
4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,155,8,5,10,5,12,5,158,9,5,1,5,1,5,1,6,1,6,
1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,173,8,7,10,7,12,7,176,9,7,1,7,1,
7,1,8,1,8,1,8,1,8,5,8,184,8,8,10,8,12,8,187,9,8,1,8,1,8,1,9,1,9,1,9,1,9,
1,9,1,10,1,10,1,10,1,10,3,10,200,8,10,1,10,1,10,5,10,204,8,10,10,10,12,10,
207,9,10,1,10,1,10,1,11,1,11,1,11,3,11,214,8,11,1,11,1,11,1,11,3,11,219,
8,11,1,11,1,11,3,11,223,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,3,12,238,8,12,1,13,1,13,1,13,5,13,243,8,13,10,13,12,
13,246,9,13,1,14,1,14,1,14,3,14,251,8,14,1,15,1,15,1,15,1,15,1,15,1,15,3,
15,259,8,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,271,8,
17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,280,8,18,1,18,3,18,283,8,18,1,
18,1,18,1,18,3,18,288,8,18,1,19,1,19,1,19,1,19,1,19,3,19,295,8,19,1,19,3,
19,298,8,19,1,19,1,19,3,19,302,8,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,
20,1,20,1,21,1,21,3,21,315,8,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,
1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,
27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,
1,31,1,31,3,31,356,8,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,3,31,371,8,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,
31,1,31,1,31,3,31,399,8,31,1,31,5,31,402,8,31,10,31,12,31,405,9,31,1,32,
1,32,1,32,5,32,410,8,32,10,32,12,32,413,9,32,1,33,1,33,1,33,3,33,418,8,33,
1,33,1,33,3,33,422,8,33,1,34,1,34,1,34,5,34,427,8,34,10,34,12,34,430,9,34,
1,35,1,35,1,35,3,35,435,8,35,1,35,1,35,1,35,5,35,440,8,35,10,35,12,35,443,
9,35,1,36,1,36,1,36,1,37,1,37,3,37,450,8,37,1,37,1,37,1,38,1,38,1,38,1,38,
5,38,458,8,38,10,38,12,38,461,9,38,1,38,1,38,1,39,1,39,1,39,1,39,1,40,1,
40,1,40,0,2,62,70,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,7,1,
0,2,4,1,0,41,43,1,0,48,50,1,0,46,47,1,0,51,56,1,0,57,58,1,0,60,65,507,0,
85,1,0,0,0,2,114,1,0,0,0,4,116,1,0,0,0,6,125,1,0,0,0,8,137,1,0,0,0,10,150,
1,0,0,0,12,161,1,0,0,0,14,166,1,0,0,0,16,179,1,0,0,0,18,190,1,0,0,0,20,195,
1,0,0,0,22,222,1,0,0,0,24,237,1,0,0,0,26,239,1,0,0,0,28,247,1,0,0,0,30,252,
1,0,0,0,32,260,1,0,0,0,34,263,1,0,0,0,36,272,1,0,0,0,38,289,1,0,0,0,40,306,
1,0,0,0,42,312,1,0,0,0,44,318,1,0,0,0,46,321,1,0,0,0,48,324,1,0,0,0,50,327,
1,0,0,0,52,333,1,0,0,0,54,337,1,0,0,0,56,340,1,0,0,0,58,344,1,0,0,0,60,347,
1,0,0,0,62,370,1,0,0,0,64,406,1,0,0,0,66,414,1,0,0,0,68,423,1,0,0,0,70,431,
1,0,0,0,72,444,1,0,0,0,74,447,1,0,0,0,76,453,1,0,0,0,78,464,1,0,0,0,80,468,
1,0,0,0,82,84,3,2,1,0,83,82,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,
0,0,0,86,88,1,0,0,0,87,85,1,0,0,0,88,89,5,0,0,1,89,1,1,0,0,0,90,115,3,4,
2,0,91,115,3,6,3,0,92,115,3,8,4,0,93,115,3,20,10,0,94,115,3,10,5,0,95,115,
3,14,7,0,96,115,3,16,8,0,97,115,3,24,12,0,98,115,3,30,15,0,99,115,3,32,16,
0,100,115,3,34,17,0,101,115,3,36,18,0,102,115,3,38,19,0,103,115,3,40,20,
0,104,115,3,42,21,0,105,115,3,44,22,0,106,115,3,46,23,0,107,115,3,48,24,
0,108,115,3,50,25,0,109,115,3,52,26,0,110,115,3,54,27,0,111,115,3,56,28,
0,112,115,3,58,29,0,113,115,3,60,30,0,114,90,1,0,0,0,114,91,1,0,0,0,114,
92,1,0,0,0,114,93,1,0,0,0,114,94,1,0,0,0,114,95,1,0,0,0,114,96,1,0,0,0,114,
97,1,0,0,0,114,98,1,0,0,0,114,99,1,0,0,0,114,100,1,0,0,0,114,101,1,0,0,0,
114,102,1,0,0,0,114,103,1,0,0,0,114,104,1,0,0,0,114,105,1,0,0,0,114,106,
1,0,0,0,114,107,1,0,0,0,114,108,1,0,0,0,114,109,1,0,0,0,114,110,1,0,0,0,
114,111,1,0,0,0,114,112,1,0,0,0,114,113,1,0,0,0,115,3,1,0,0,0,116,120,5,
35,0,0,117,119,3,2,1,0,118,117,1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,
121,1,0,0,0,121,123,1,0,0,0,122,120,1,0,0,0,123,124,5,36,0,0,124,5,1,0,0,
0,125,126,7,0,0,0,126,129,5,66,0,0,127,128,5,45,0,0,128,130,3,70,35,0,129,
127,1,0,0,0,129,130,1,0,0,0,130,133,1,0,0,0,131,132,5,41,0,0,132,134,3,62,
31,0,133,131,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,136,5,39,0,0,136,
7,1,0,0,0,137,138,5,1,0,0,138,139,5,66,0,0,139,141,5,33,0,0,140,142,3,64,
32,0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,146,5,34,0,0,144,
145,5,45,0,0,145,147,3,70,35,0,146,144,1,0,0,0,146,147,1,0,0,0,147,148,1,
0,0,0,148,149,3,4,2,0,149,9,1,0,0,0,150,151,5,21,0,0,151,152,5,66,0,0,152,
156,5,35,0,0,153,155,3,12,6,0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,1,
0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,5,36,0,0,160,
11,1,0,0,0,161,162,5,66,0,0,162,163,5,45,0,0,163,164,3,70,35,0,164,165,5,
39,0,0,165,13,1,0,0,0,166,167,5,22,0,0,167,168,5,66,0,0,168,169,5,35,0,0,
169,174,5,66,0,0,170,171,5,40,0,0,171,173,5,66,0,0,172,170,1,0,0,0,173,176,
1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,0,176,174,1,0,0,0,
177,178,5,36,0,0,178,15,1,0,0,0,179,180,5,23,0,0,180,181,5,66,0,0,181,185,
5,35,0,0,182,184,3,18,9,0,183,182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,
0,185,186,1,0,0,0,186,188,1,0,0,0,187,185,1,0,0,0,188,189,5,36,0,0,189,17,
1,0,0,0,190,191,5,66,0,0,191,192,5,45,0,0,192,193,3,70,35,0,193,194,5,39,
0,0,194,19,1,0,0,0,195,196,5,9,0,0,196,199,5,66,0,0,197,198,5,10,0,0,198,
200,5,66,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,205,5,35,
0,0,202,204,3,22,11,0,203,202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,
206,1,0,0,0,206,208,1,0,0,0,207,205,1,0,0,0,208,209,5,36,0,0,209,21,1,0,
0,0,210,211,5,66,0,0,211,213,5,33,0,0,212,214,3,64,32,0,213,212,1,0,0,0,
213,214,1,0,0,0,214,215,1,0,0,0,215,218,5,34,0,0,216,217,5,45,0,0,217,219,
3,70,35,0,218,216,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,223,3,4,2,
0,221,223,3,6,3,0,222,210,1,0,0,0,222,221,1,0,0,0,223,23,1,0,0,0,224,225,
5,11,0,0,225,226,5,35,0,0,226,227,3,26,13,0,227,228,5,36,0,0,228,229,5,13,
0,0,229,230,5,64,0,0,230,231,5,39,0,0,231,238,1,0,0,0,232,233,5,11,0,0,233,
234,5,66,0,0,234,235,5,13,0,0,235,236,5,64,0,0,236,238,5,39,0,0,237,224,
1,0,0,0,237,232,1,0,0,0,238,25,1,0,0,0,239,244,3,28,14,0,240,241,5,40,0,
0,241,243,3,28,14,0,242,240,1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,
245,1,0,0,0,245,27,1,0,0,0,246,244,1,0,0,0,247,250,5,66,0,0,248,249,5,24,
0,0,249,251,5,66,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,29,1,0,0,0,252,
258,5,12,0,0,253,259,3,6,3,0,254,259,3,8,4,0,255,259,3,20,10,0,256,259,3,
10,5,0,257,259,3,14,7,0,258,253,1,0,0,0,258,254,1,0,0,0,258,255,1,0,0,0,
258,256,1,0,0,0,258,257,1,0,0,0,259,31,1,0,0,0,260,261,5,5,0,0,261,262,3,
2,1,0,262,33,1,0,0,0,263,264,5,6,0,0,264,265,5,33,0,0,265,266,3,62,31,0,
266,267,5,34,0,0,267,270,3,2,1,0,268,269,5,7,0,0,269,271,3,2,1,0,270,268,
1,0,0,0,270,271,1,0,0,0,271,35,1,0,0,0,272,273,5,14,0,0,273,274,3,4,2,0,
274,282,5,15,0,0,275,276,5,33,0,0,276,279,5,66,0,0,277,278,5,45,0,0,278,
280,3,70,35,0,279,277,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,281,283,5,
34,0,0,282,275,1,0,0,0,282,283,1,0,0,0,283,284,1,0,0,0,284,287,3,4,2,0,285,
286,5,16,0,0,286,288,3,4,2,0,287,285,1,0,0,0,287,288,1,0,0,0,288,37,1,0,
0,0,289,290,5,18,0,0,290,294,5,33,0,0,291,295,3,6,3,0,292,295,3,44,22,0,
293,295,5,39,0,0,294,291,1,0,0,0,294,292,1,0,0,0,294,293,1,0,0,0,295,297,
1,0,0,0,296,298,3,62,31,0,297,296,1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,
0,299,301,5,39,0,0,300,302,3,62,31,0,301,300,1,0,0,0,301,302,1,0,0,0,302,
303,1,0,0,0,303,304,5,34,0,0,304,305,3,2,1,0,305,39,1,0,0,0,306,307,5,19,
0,0,307,308,5,33,0,0,308,309,3,62,31,0,309,310,5,34,0,0,310,311,3,2,1,0,
311,41,1,0,0,0,312,314,5,8,0,0,313,315,3,62,31,0,314,313,1,0,0,0,314,315,
1,0,0,0,315,316,1,0,0,0,316,317,5,39,0,0,317,43,1,0,0,0,318,319,3,62,31,
0,319,320,5,39,0,0,320,45,1,0,0,0,321,322,5,25,0,0,322,323,3,2,1,0,323,47,
1,0,0,0,324,325,5,26,0,0,325,326,3,4,2,0,326,49,1,0,0,0,327,328,5,27,0,0,
328,329,5,33,0,0,329,330,3,62,31,0,330,331,5,34,0,0,331,332,3,2,1,0,332,
51,1,0,0,0,333,334,5,28,0,0,334,335,3,62,31,0,335,336,3,2,1,0,336,53,1,0,
0,0,337,338,5,29,0,0,338,339,3,2,1,0,339,55,1,0,0,0,340,341,5,30,0,0,341,
342,3,62,31,0,342,343,5,39,0,0,343,57,1,0,0,0,344,345,5,31,0,0,345,346,5,
39,0,0,346,59,1,0,0,0,347,348,5,32,0,0,348,349,5,39,0,0,349,61,1,0,0,0,350,
351,6,31,-1,0,351,352,5,17,0,0,352,353,3,62,31,0,353,355,5,33,0,0,354,356,
3,68,34,0,355,354,1,0,0,0,355,356,1,0,0,0,356,357,1,0,0,0,357,358,5,34,0,
0,358,371,1,0,0,0,359,360,5,59,0,0,360,371,3,62,31,7,361,371,5,66,0,0,362,
371,3,80,40,0,363,371,3,74,37,0,364,371,3,76,38,0,365,371,5,20,0,0,366,367,
5,33,0,0,367,368,3,62,31,0,368,369,5,34,0,0,369,371,1,0,0,0,370,350,1,0,
0,0,370,359,1,0,0,0,370,361,1,0,0,0,370,362,1,0,0,0,370,363,1,0,0,0,370,
364,1,0,0,0,370,365,1,0,0,0,370,366,1,0,0,0,371,403,1,0,0,0,372,373,10,12,
0,0,373,374,7,1,0,0,374,402,3,62,31,12,375,376,10,11,0,0,376,377,7,2,0,0,
377,402,3,62,31,12,378,379,10,10,0,0,379,380,7,3,0,0,380,402,3,62,31,11,
381,382,10,9,0,0,382,383,7,4,0,0,383,402,3,62,31,10,384,385,10,8,0,0,385,
386,7,5,0,0,386,402,3,62,31,9,387,388,10,16,0,0,388,389,5,44,0,0,389,402,
5,66,0,0,390,391,10,15,0,0,391,392,5,37,0,0,392,393,3,62,31,0,393,394,5,
38,0,0,394,402,1,0,0,0,395,396,10,14,0,0,396,398,5,33,0,0,397,399,3,68,34,
0,398,397,1,0,0,0,398,399,1,0,0,0,399,400,1,0,0,0,400,402,5,34,0,0,401,372,
1,0,0,0,401,375,1,0,0,0,401,378,1,0,0,0,401,381,1,0,0,0,401,384,1,0,0,0,
401,387,1,0,0,0,401,390,1,0,0,0,401,395,1,0,0,0,402,405,1,0,0,0,403,401,
1,0,0,0,403,404,1,0,0,0,404,63,1,0,0,0,405,403,1,0,0,0,406,411,3,66,33,0,
407,408,5,40,0,0,408,410,3,66,33,0,409,407,1,0,0,0,410,413,1,0,0,0,411,409,
1,0,0,0,411,412,1,0,0,0,412,65,1,0,0,0,413,411,1,0,0,0,414,417,5,66,0,0,
415,416,5,45,0,0,416,418,3,70,35,0,417,415,1,0,0,0,417,418,1,0,0,0,418,421,
1,0,0,0,419,420,5,41,0,0,420,422,3,62,31,0,421,419,1,0,0,0,421,422,1,0,0,
0,422,67,1,0,0,0,423,428,3,62,31,0,424,425,5,40,0,0,425,427,3,62,31,0,426,
424,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,69,1,0,0,
0,430,428,1,0,0,0,431,432,6,35,-1,0,432,434,5,66,0,0,433,435,3,72,36,0,434,
433,1,0,0,0,434,435,1,0,0,0,435,441,1,0,0,0,436,437,10,1,0,0,437,438,5,58,
0,0,438,440,3,70,35,2,439,436,1,0,0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,
442,1,0,0,0,442,71,1,0,0,0,443,441,1,0,0,0,444,445,5,37,0,0,445,446,5,38,
0,0,446,73,1,0,0,0,447,449,5,37,0,0,448,450,3,68,34,0,449,448,1,0,0,0,449,
450,1,0,0,0,450,451,1,0,0,0,451,452,5,38,0,0,452,75,1,0,0,0,453,454,5,35,
0,0,454,459,3,78,39,0,455,456,5,40,0,0,456,458,3,78,39,0,457,455,1,0,0,0,
458,461,1,0,0,0,459,457,1,0,0,0,459,460,1,0,0,0,460,462,1,0,0,0,461,459,
1,0,0,0,462,463,5,36,0,0,463,77,1,0,0,0,464,465,5,66,0,0,465,466,5,45,0,
0,466,467,3,62,31,0,467,79,1,0,0,0,468,469,7,6,0,0,469,81,1,0,0,0,40,85,
114,120,129,133,141,146,156,174,185,199,205,213,218,222,237,244,250,258,
270,279,282,287,294,297,301,314,355,370,398,401,403,411,417,421,428,434,
441,449,459];


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
                            "'queue'", "'js'", "'unless'", "'repeat'", "'forever'", 
                            "'fail'", "'break'", "'continue'", "'('", "')'", 
                            "'{'", "'}'", "'['", "']'", "';'", "','", "'='", 
                            "'+='", "'-='", "'.'", "':'", "'+'", "'-'", 
                            "'*'", "'/'", "'%'", "'<'", "'>'", "'<='", "'>='", 
                            "'=='", "'!='", "'&&'", "'||'", "'!'", "'null'" ];
    static symbolicNames = [ null, "FN", "LET", "VAR", "CONST", "DEFER", 
                             "IF", "ELSE", "RETURN", "CLASS", "EXTENDS", 
                             "IMPORT", "EXPORT", "FROM", "TRY", "CATCH", 
                             "FINALLY", "NEW", "FOR", "WHILE", "THIS", "STRUCT", 
                             "ENUM", "INTERFACE", "AS", "QUEUE", "JS", "UNLESS", 
                             "REPEAT", "FOREVER", "FAIL", "BREAK", "CONTINUE", 
                             "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
                             "OpenBracket", "CloseBracket", "SemiColon", 
                             "Comma", "Assign", "PlusAssign", "MinusAssign", 
                             "Dot", "COLON", "Plus", "Minus", "Multiply", 
                             "Divide", "Modulus", "LessThan", "MoreThan", 
                             "LessEqual", "MoreEqual", "Equals_", "NotEquals", 
                             "AND", "OR", "NOT", "NullLiteral", "BooleanLiteral", 
                             "DecimalLiteral", "BigIntLiteral", "StringLiteral", 
                             "TemplateString", "Identifier", "DOC_COMMENT", 
                             "LineComment", "BlockComment", "WhiteSpaces" ];
    static ruleNames = [ "program", "statement", "block", "varDecl", "functionDecl", 
                         "structDecl", "structField", "enumDecl", "interfaceDecl", 
                         "interfaceField", "classDecl", "classElement", 
                         "importStmt", "importItems", "importItem", "exportStmt", 
                         "deferStmt", "ifStatement", "tryStatement", "forStatement", 
                         "whileStatement", "returnStatement", "expressionStatement", 
                         "queueStmt", "jsBlock", "unlessStmt", "repeatStmt", 
                         "foreverStmt", "failStmt", "breakStmt", "continueStmt", 
                         "expression", "formalParameterList", "parameter", 
                         "arguments", "type", "typeSuffix", "arrayLiteral", 
                         "objectLiteral", "property", "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ZScriptParser.ruleNames;
        this.literalNames = ZScriptParser.literalNames;
        this.symbolicNames = ZScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 31:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 35:
    	    		return this.type_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 12);
    		case 1:
    			return this.precpred(this._ctx, 11);
    		case 2:
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 8);
    		case 5:
    			return this.precpred(this._ctx, 16);
    		case 6:
    			return this.precpred(this._ctx, 15);
    		case 7:
    			return this.precpred(this._ctx, 14);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    type_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
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
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278082430) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4160749611) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	            this.state = 82;
	            this.statement();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 88;
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
	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.varDecl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.functionDecl();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 93;
	            this.classDecl();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.structDecl();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 95;
	            this.enumDecl();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 96;
	            this.interfaceDecl();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 97;
	            this.importStmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 98;
	            this.exportStmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 99;
	            this.deferStmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 100;
	            this.ifStatement();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 101;
	            this.tryStatement();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 102;
	            this.forStatement();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 103;
	            this.whileStatement();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 104;
	            this.returnStatement();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 105;
	            this.expressionStatement();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 106;
	            this.queueStmt();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 107;
	            this.jsBlock();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 108;
	            this.unlessStmt();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 109;
	            this.repeatStmt();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 110;
	            this.foreverStmt();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 111;
	            this.failStmt();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 112;
	            this.breakStmt();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 113;
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
	        this.state = 116;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4278082430) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4160749611) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	            this.state = 117;
	            this.statement();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 123;
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
	        this.state = 125;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 126;
	        this.match(ZScriptParser.Identifier);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 127;
	            this.match(ZScriptParser.COLON);
	            this.state = 128;
	            this.type(0);
	        }

	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 131;
	            this.match(ZScriptParser.Assign);
	            this.state = 132;
	            this.expression(0);
	        }

	        this.state = 135;
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
	        this.state = 137;
	        this.match(ZScriptParser.FN);
	        this.state = 138;
	        this.match(ZScriptParser.Identifier);
	        this.state = 139;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===66) {
	            this.state = 140;
	            this.formalParameterList();
	        }

	        this.state = 143;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 144;
	            this.match(ZScriptParser.COLON);
	            this.state = 145;
	            this.type(0);
	        }

	        this.state = 148;
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
	        this.state = 150;
	        this.match(ZScriptParser.STRUCT);
	        this.state = 151;
	        this.match(ZScriptParser.Identifier);
	        this.state = 152;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 153;
	            this.structField();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
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
	        this.state = 161;
	        this.match(ZScriptParser.Identifier);
	        this.state = 162;
	        this.match(ZScriptParser.COLON);
	        this.state = 163;
	        this.type(0);
	        this.state = 164;
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
	        this.state = 166;
	        this.match(ZScriptParser.ENUM);
	        this.state = 167;
	        this.match(ZScriptParser.Identifier);
	        this.state = 168;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 169;
	        this.match(ZScriptParser.Identifier);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 170;
	            this.match(ZScriptParser.Comma);
	            this.state = 171;
	            this.match(ZScriptParser.Identifier);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 177;
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
	        this.state = 179;
	        this.match(ZScriptParser.INTERFACE);
	        this.state = 180;
	        this.match(ZScriptParser.Identifier);
	        this.state = 181;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 182;
	            this.interfaceField();
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 188;
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
	        this.state = 190;
	        this.match(ZScriptParser.Identifier);
	        this.state = 191;
	        this.match(ZScriptParser.COLON);
	        this.state = 192;
	        this.type(0);
	        this.state = 193;
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
	    this.enterRule(localctx, 20, ZScriptParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(ZScriptParser.CLASS);
	        this.state = 196;
	        this.match(ZScriptParser.Identifier);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 197;
	            this.match(ZScriptParser.EXTENDS);
	            this.state = 198;
	            this.match(ZScriptParser.Identifier);
	        }

	        this.state = 201;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0) || _la===66) {
	            this.state = 202;
	            this.classElement();
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 208;
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
	    this.enterRule(localctx, 22, ZScriptParser.RULE_classElement);
	    var _la = 0;
	    try {
	        this.state = 222;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.match(ZScriptParser.Identifier);
	            this.state = 211;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===66) {
	                this.state = 212;
	                this.formalParameterList();
	            }

	            this.state = 215;
	            this.match(ZScriptParser.CloseParen);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 216;
	                this.match(ZScriptParser.COLON);
	                this.state = 217;
	                this.type(0);
	            }

	            this.state = 220;
	            this.block();
	            break;
	        case 2:
	        case 3:
	        case 4:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 221;
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
	    this.enterRule(localctx, 24, ZScriptParser.RULE_importStmt);
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 224;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 225;
	            this.match(ZScriptParser.OpenBrace);
	            this.state = 226;
	            this.importItems();
	            this.state = 227;
	            this.match(ZScriptParser.CloseBrace);
	            this.state = 228;
	            this.match(ZScriptParser.FROM);
	            this.state = 229;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 230;
	            this.match(ZScriptParser.SemiColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 233;
	            this.match(ZScriptParser.Identifier);
	            this.state = 234;
	            this.match(ZScriptParser.FROM);
	            this.state = 235;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 236;
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
	    this.enterRule(localctx, 26, ZScriptParser.RULE_importItems);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.importItem();
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 240;
	            this.match(ZScriptParser.Comma);
	            this.state = 241;
	            this.importItem();
	            this.state = 246;
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
	    this.enterRule(localctx, 28, ZScriptParser.RULE_importItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(ZScriptParser.Identifier);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 248;
	            this.match(ZScriptParser.AS);
	            this.state = 249;
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
	    this.enterRule(localctx, 30, ZScriptParser.RULE_exportStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(ZScriptParser.EXPORT);
	        this.state = 258;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	            this.state = 253;
	            this.varDecl();
	            break;
	        case 1:
	            this.state = 254;
	            this.functionDecl();
	            break;
	        case 9:
	            this.state = 255;
	            this.classDecl();
	            break;
	        case 21:
	            this.state = 256;
	            this.structDecl();
	            break;
	        case 22:
	            this.state = 257;
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
	    this.enterRule(localctx, 32, ZScriptParser.RULE_deferStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(ZScriptParser.DEFER);
	        this.state = 261;
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
	    this.enterRule(localctx, 34, ZScriptParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(ZScriptParser.IF);
	        this.state = 264;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 265;
	        this.expression(0);
	        this.state = 266;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 267;
	        this.statement();
	        this.state = 270;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 268;
	            this.match(ZScriptParser.ELSE);
	            this.state = 269;
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
	    this.enterRule(localctx, 36, ZScriptParser.RULE_tryStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(ZScriptParser.TRY);
	        this.state = 273;
	        this.block();
	        this.state = 274;
	        this.match(ZScriptParser.CATCH);
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 275;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 276;
	            this.match(ZScriptParser.Identifier);
	            this.state = 279;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 277;
	                this.match(ZScriptParser.COLON);
	                this.state = 278;
	                this.type(0);
	            }

	            this.state = 281;
	            this.match(ZScriptParser.CloseParen);
	        }

	        this.state = 284;
	        this.block();
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 285;
	            this.match(ZScriptParser.FINALLY);
	            this.state = 286;
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
	    this.enterRule(localctx, 38, ZScriptParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.match(ZScriptParser.FOR);
	        this.state = 290;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	            this.state = 291;
	            this.varDecl();
	            break;
	        case 17:
	        case 20:
	        case 33:
	        case 35:
	        case 37:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	            this.state = 292;
	            this.expressionStatement();
	            break;
	        case 39:
	            this.state = 293;
	            this.match(ZScriptParser.SemiColon);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 1376265) !== 0) || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 255) !== 0)) {
	            this.state = 296;
	            this.expression(0);
	        }

	        this.state = 299;
	        this.match(ZScriptParser.SemiColon);
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 1376265) !== 0) || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 255) !== 0)) {
	            this.state = 300;
	            this.expression(0);
	        }

	        this.state = 303;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 304;
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
	    this.enterRule(localctx, 40, ZScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(ZScriptParser.WHILE);
	        this.state = 307;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 308;
	        this.expression(0);
	        this.state = 309;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 310;
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
	    this.enterRule(localctx, 42, ZScriptParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(ZScriptParser.RETURN);
	        this.state = 314;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 1376265) !== 0) || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 255) !== 0)) {
	            this.state = 313;
	            this.expression(0);
	        }

	        this.state = 316;
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
	    this.enterRule(localctx, 44, ZScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.expression(0);
	        this.state = 319;
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
	    this.enterRule(localctx, 46, ZScriptParser.RULE_queueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(ZScriptParser.QUEUE);
	        this.state = 322;
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
	    this.enterRule(localctx, 48, ZScriptParser.RULE_jsBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(ZScriptParser.JS);
	        this.state = 325;
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
	    this.enterRule(localctx, 50, ZScriptParser.RULE_unlessStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.match(ZScriptParser.UNLESS);
	        this.state = 328;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 329;
	        this.expression(0);
	        this.state = 330;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 331;
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
	    this.enterRule(localctx, 52, ZScriptParser.RULE_repeatStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(ZScriptParser.REPEAT);
	        this.state = 334;
	        this.expression(0);
	        this.state = 335;
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
	    this.enterRule(localctx, 54, ZScriptParser.RULE_foreverStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(ZScriptParser.FOREVER);
	        this.state = 338;
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
	    this.enterRule(localctx, 56, ZScriptParser.RULE_failStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(ZScriptParser.FAIL);
	        this.state = 341;
	        this.expression(0);
	        this.state = 342;
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
	    this.enterRule(localctx, 58, ZScriptParser.RULE_breakStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(ZScriptParser.BREAK);
	        this.state = 345;
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
	    this.enterRule(localctx, 60, ZScriptParser.RULE_continueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(ZScriptParser.CONTINUE);
	        this.state = 348;
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
	    const _startState = 62;
	    this.enterRecursionRule(localctx, 62, ZScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            localctx = new NewExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 351;
	            this.match(ZScriptParser.NEW);
	            this.state = 352;
	            this.expression(0);
	            this.state = 353;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 355;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 1376265) !== 0) || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 255) !== 0)) {
	                this.state = 354;
	                this.arguments();
	            }

	            this.state = 357;
	            this.match(ZScriptParser.CloseParen);
	            break;
	        case 59:
	            localctx = new UnaryOpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 359;
	            this.match(ZScriptParser.NOT);
	            this.state = 360;
	            this.expression(7);
	            break;
	        case 66:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 361;
	            this.match(ZScriptParser.Identifier);
	            break;
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 362;
	            this.literal();
	            break;
	        case 37:
	            localctx = new ArrayExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 363;
	            this.arrayLiteral();
	            break;
	        case 35:
	            localctx = new ObjectExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 364;
	            this.objectLiteral();
	            break;
	        case 20:
	            localctx = new ThisExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 365;
	            this.match(ZScriptParser.THIS);
	            break;
	        case 33:
	            localctx = new ParenthesizedExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 366;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 367;
	            this.expression(0);
	            this.state = 368;
	            this.match(ZScriptParser.CloseParen);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 403;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 401;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AssignmentExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 372;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 373;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 374;
	                    this.expression(12);
	                    break;

	                case 2:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 375;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 376;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 377;
	                    this.expression(12);
	                    break;

	                case 3:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 378;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 379;
	                    _la = this._input.LA(1);
	                    if(!(_la===46 || _la===47)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 380;
	                    this.expression(11);
	                    break;

	                case 4:
	                    localctx = new CompareOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 381;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 382;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 63) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 383;
	                    this.expression(10);
	                    break;

	                case 5:
	                    localctx = new LogicalOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 384;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 385;
	                    _la = this._input.LA(1);
	                    if(!(_la===57 || _la===58)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 386;
	                    this.expression(9);
	                    break;

	                case 6:
	                    localctx = new MemberIndexContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 387;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 388;
	                    this.match(ZScriptParser.Dot);
	                    this.state = 389;
	                    this.match(ZScriptParser.Identifier);
	                    break;

	                case 7:
	                    localctx = new ArrayAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 390;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 391;
	                    this.match(ZScriptParser.OpenBracket);
	                    this.state = 392;
	                    this.expression(0);
	                    this.state = 393;
	                    this.match(ZScriptParser.CloseBracket);
	                    break;

	                case 8:
	                    localctx = new CallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 395;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 396;
	                    this.match(ZScriptParser.OpenParen);
	                    this.state = 398;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 1376265) !== 0) || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 255) !== 0)) {
	                        this.state = 397;
	                        this.arguments();
	                    }

	                    this.state = 400;
	                    this.match(ZScriptParser.CloseParen);
	                    break;

	                } 
	            }
	            this.state = 405;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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



	formalParameterList() {
	    let localctx = new FormalParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ZScriptParser.RULE_formalParameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.parameter();
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 407;
	            this.match(ZScriptParser.Comma);
	            this.state = 408;
	            this.parameter();
	            this.state = 413;
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
	    this.enterRule(localctx, 66, ZScriptParser.RULE_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.match(ZScriptParser.Identifier);
	        this.state = 417;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 415;
	            this.match(ZScriptParser.COLON);
	            this.state = 416;
	            this.type(0);
	        }

	        this.state = 421;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 419;
	            this.match(ZScriptParser.Assign);
	            this.state = 420;
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
	    this.enterRule(localctx, 68, ZScriptParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this.expression(0);
	        this.state = 428;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 424;
	            this.match(ZScriptParser.Comma);
	            this.state = 425;
	            this.expression(0);
	            this.state = 430;
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
	    const _startState = 70;
	    this.enterRecursionRule(localctx, 70, ZScriptParser.RULE_type, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(ZScriptParser.Identifier);
	        this.state = 434;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        if(la_===1) {
	            this.state = 433;
	            this.typeSuffix();

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 441;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TypeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_type);
	                this.state = 436;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 437;
	                this.match(ZScriptParser.OR);
	                this.state = 438;
	                this.type(2); 
	            }
	            this.state = 443;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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
	    this.enterRule(localctx, 72, ZScriptParser.RULE_typeSuffix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 445;
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
	    this.enterRule(localctx, 74, ZScriptParser.RULE_arrayLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 449;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 1376265) !== 0) || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 255) !== 0)) {
	            this.state = 448;
	            this.arguments();
	        }

	        this.state = 451;
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
	    this.enterRule(localctx, 76, ZScriptParser.RULE_objectLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 454;
	        this.property();
	        this.state = 459;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 455;
	            this.match(ZScriptParser.Comma);
	            this.state = 456;
	            this.property();
	            this.state = 461;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 462;
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
	    this.enterRule(localctx, 78, ZScriptParser.RULE_property);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this.match(ZScriptParser.Identifier);
	        this.state = 465;
	        this.match(ZScriptParser.COLON);
	        this.state = 466;
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
	    this.enterRule(localctx, 80, ZScriptParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        _la = this._input.LA(1);
	        if(!(((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 63) !== 0))) {
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
ZScriptParser.QUEUE = 25;
ZScriptParser.JS = 26;
ZScriptParser.UNLESS = 27;
ZScriptParser.REPEAT = 28;
ZScriptParser.FOREVER = 29;
ZScriptParser.FAIL = 30;
ZScriptParser.BREAK = 31;
ZScriptParser.CONTINUE = 32;
ZScriptParser.OpenParen = 33;
ZScriptParser.CloseParen = 34;
ZScriptParser.OpenBrace = 35;
ZScriptParser.CloseBrace = 36;
ZScriptParser.OpenBracket = 37;
ZScriptParser.CloseBracket = 38;
ZScriptParser.SemiColon = 39;
ZScriptParser.Comma = 40;
ZScriptParser.Assign = 41;
ZScriptParser.PlusAssign = 42;
ZScriptParser.MinusAssign = 43;
ZScriptParser.Dot = 44;
ZScriptParser.COLON = 45;
ZScriptParser.Plus = 46;
ZScriptParser.Minus = 47;
ZScriptParser.Multiply = 48;
ZScriptParser.Divide = 49;
ZScriptParser.Modulus = 50;
ZScriptParser.LessThan = 51;
ZScriptParser.MoreThan = 52;
ZScriptParser.LessEqual = 53;
ZScriptParser.MoreEqual = 54;
ZScriptParser.Equals_ = 55;
ZScriptParser.NotEquals = 56;
ZScriptParser.AND = 57;
ZScriptParser.OR = 58;
ZScriptParser.NOT = 59;
ZScriptParser.NullLiteral = 60;
ZScriptParser.BooleanLiteral = 61;
ZScriptParser.DecimalLiteral = 62;
ZScriptParser.BigIntLiteral = 63;
ZScriptParser.StringLiteral = 64;
ZScriptParser.TemplateString = 65;
ZScriptParser.Identifier = 66;
ZScriptParser.DOC_COMMENT = 67;
ZScriptParser.LineComment = 68;
ZScriptParser.BlockComment = 69;
ZScriptParser.WhiteSpaces = 70;

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
ZScriptParser.RULE_classDecl = 10;
ZScriptParser.RULE_classElement = 11;
ZScriptParser.RULE_importStmt = 12;
ZScriptParser.RULE_importItems = 13;
ZScriptParser.RULE_importItem = 14;
ZScriptParser.RULE_exportStmt = 15;
ZScriptParser.RULE_deferStmt = 16;
ZScriptParser.RULE_ifStatement = 17;
ZScriptParser.RULE_tryStatement = 18;
ZScriptParser.RULE_forStatement = 19;
ZScriptParser.RULE_whileStatement = 20;
ZScriptParser.RULE_returnStatement = 21;
ZScriptParser.RULE_expressionStatement = 22;
ZScriptParser.RULE_queueStmt = 23;
ZScriptParser.RULE_jsBlock = 24;
ZScriptParser.RULE_unlessStmt = 25;
ZScriptParser.RULE_repeatStmt = 26;
ZScriptParser.RULE_foreverStmt = 27;
ZScriptParser.RULE_failStmt = 28;
ZScriptParser.RULE_breakStmt = 29;
ZScriptParser.RULE_continueStmt = 30;
ZScriptParser.RULE_expression = 31;
ZScriptParser.RULE_formalParameterList = 32;
ZScriptParser.RULE_parameter = 33;
ZScriptParser.RULE_arguments = 34;
ZScriptParser.RULE_type = 35;
ZScriptParser.RULE_typeSuffix = 36;
ZScriptParser.RULE_arrayLiteral = 37;
ZScriptParser.RULE_objectLiteral = 38;
ZScriptParser.RULE_property = 39;
ZScriptParser.RULE_literal = 40;

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitProgram(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitStatement(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitBlock(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitVarDecl(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterFunctionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitFunctionDecl(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterStructDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitStructDecl(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterStructField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitStructField(this);
		}
	}

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


	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterEnumDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitEnumDecl(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterInterfaceDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitInterfaceDecl(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterInterfaceField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitInterfaceField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitInterfaceField(this);
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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterClassDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitClassDecl(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterClassMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitClassMethod(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterClassField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitClassField(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterImportStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitImportStmt(this);
		}
	}

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


	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterImportItems(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitImportItems(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterImportItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitImportItem(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterExportStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitExportStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterDeferStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitDeferStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitIfStatement(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterTryStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitTryStatement(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitForStatement(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitWhileStatement(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitReturnStatement(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterQueueStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitQueueStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterJsBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitJsBlock(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterUnlessStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitUnlessStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterRepeatStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitRepeatStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterForeverStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitForeverStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterFailStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitFailStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterBreakStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitBreakStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterContinueStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitContinueStmt(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterUnaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitUnaryOp(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterNewExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitNewExpression(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterLogicalOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitLogicalOp(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterAssignmentExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitAssignmentExpr(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterArrayExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitArrayExpr(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterArrayAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitArrayAccess(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterObjectExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitObjectExpr(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterIdentifierExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitIdentifierExpr(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterMemberIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitMemberIndex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitMemberIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.MemberIndexContext = MemberIndexContext;

class LiteralExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterLiteralExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitLiteralExpr(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterParenthesizedExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitParenthesizedExpr(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterCompareOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitCompareOp(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.CallExpressionContext = CallExpressionContext;

class ThisExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	THIS() {
	    return this.getToken(ZScriptParser.THIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterThisExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitThisExpr(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterBinaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitBinaryOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitBinaryOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.BinaryOpContext = BinaryOpContext;

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


	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterFormalParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitFormalParameterList(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitParameter(this);
		}
	}

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


	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitArguments(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitType(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterTypeSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitTypeSuffix(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitArrayLiteral(this);
		}
	}

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


	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterObjectLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitObjectLiteral(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitProperty(this);
		}
	}

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

	enterRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZScriptListener ) {
	        listener.exitLiteral(this);
		}
	}

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
ZScriptParser.FormalParameterListContext = FormalParameterListContext; 
ZScriptParser.ParameterContext = ParameterContext; 
ZScriptParser.ArgumentsContext = ArgumentsContext; 
ZScriptParser.TypeContext = TypeContext; 
ZScriptParser.TypeSuffixContext = TypeSuffixContext; 
ZScriptParser.ArrayLiteralContext = ArrayLiteralContext; 
ZScriptParser.ObjectLiteralContext = ObjectLiteralContext; 
ZScriptParser.PropertyContext = PropertyContext; 
ZScriptParser.LiteralContext = LiteralContext; 
