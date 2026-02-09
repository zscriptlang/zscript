// Generated from grammar/ZScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ZScriptVisitor from './ZScriptVisitor.js';

const serializedATN = [4,1,81,621,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,1,0,5,0,94,8,0,10,0,12,0,97,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,126,8,1,1,2,1,2,5,2,130,8,2,10,2,
12,2,133,9,2,1,2,1,2,1,3,3,3,138,8,3,1,3,1,3,1,3,1,3,3,3,144,8,3,1,3,1,3,
3,3,148,8,3,1,3,1,3,1,4,3,4,153,8,4,1,4,3,4,156,8,4,1,4,1,4,1,4,3,4,161,
8,4,1,4,1,4,3,4,165,8,4,1,4,1,4,1,4,3,4,170,8,4,1,4,1,4,1,5,3,5,175,8,5,
1,5,1,5,1,5,3,5,180,8,5,1,5,1,5,5,5,184,8,5,10,5,12,5,187,9,5,1,5,1,5,1,
6,1,6,1,6,1,6,1,6,1,7,3,7,197,8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,205,8,7,10,
7,12,7,208,9,7,1,7,1,7,1,8,3,8,213,8,8,1,8,1,8,1,8,3,8,218,8,8,1,8,1,8,5,
8,222,8,8,10,8,12,8,225,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,3,10,235,8,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,3,11,244,8,11,1,11,1,11,1,11,3,11,
249,8,11,1,11,1,11,1,11,3,11,254,8,11,3,11,256,8,11,1,11,1,11,5,11,260,8,
11,10,11,12,11,263,9,11,1,11,1,11,1,12,3,12,268,8,12,1,12,1,12,3,12,272,
8,12,1,12,1,12,3,12,276,8,12,1,12,1,12,1,12,3,12,281,8,12,1,12,1,12,3,12,
285,8,12,1,12,3,12,288,8,12,1,12,1,12,1,12,3,12,293,8,12,1,12,1,12,3,12,
297,8,12,1,12,1,12,1,12,3,12,302,8,12,1,12,1,12,3,12,306,8,12,1,13,1,13,
1,14,1,14,1,14,1,14,5,14,314,8,14,10,14,12,14,317,9,14,1,14,1,14,1,15,1,
15,1,15,1,15,5,15,325,8,15,10,15,12,15,328,9,15,1,15,1,15,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,345,8,16,1,17,1,17,
1,17,5,17,350,8,17,10,17,12,17,353,9,17,1,18,1,18,1,18,3,18,358,8,18,1,19,
1,19,1,19,1,19,1,19,1,19,3,19,366,8,19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,3,21,378,8,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,387,
8,22,1,22,3,22,390,8,22,1,22,1,22,1,22,3,22,395,8,22,1,23,1,23,1,23,1,23,
1,23,3,23,402,8,23,1,23,3,23,405,8,23,1,23,1,23,3,23,409,8,23,1,23,1,23,
1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,3,25,422,8,25,1,25,1,25,1,26,
1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,
30,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,34,
1,34,1,34,1,35,1,35,1,35,1,35,3,35,462,8,35,1,35,1,35,3,35,466,8,35,1,35,
1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,476,8,35,10,35,12,35,479,9,35,1,
35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,494,
8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,35,1,35,1,35,3,35,528,8,35,1,35,1,35,1,35,1,35,1,35,3,35,535,8,35,
1,35,5,35,538,8,35,10,35,12,35,541,9,35,1,36,1,36,3,36,545,8,36,1,36,1,36,
1,36,3,36,550,8,36,1,37,1,37,1,37,5,37,555,8,37,10,37,12,37,558,9,37,1,38,
1,38,1,38,3,38,563,8,38,1,38,1,38,3,38,567,8,38,1,39,1,39,1,39,5,39,572,
8,39,10,39,12,39,575,9,39,1,40,1,40,1,40,3,40,580,8,40,1,40,3,40,583,8,40,
1,40,1,40,1,40,5,40,588,8,40,10,40,12,40,591,9,40,1,41,1,41,1,41,1,42,1,
42,3,42,598,8,42,1,42,1,42,1,43,1,43,1,43,1,43,5,43,606,8,43,10,43,12,43,
609,9,43,3,43,611,8,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,0,2,
70,80,46,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,0,8,
1,0,3,5,1,0,31,33,1,0,50,52,1,0,57,59,1,0,55,56,1,0,60,65,1,0,66,67,2,0,
1,1,71,76,687,0,95,1,0,0,0,2,125,1,0,0,0,4,127,1,0,0,0,6,137,1,0,0,0,8,152,
1,0,0,0,10,174,1,0,0,0,12,190,1,0,0,0,14,196,1,0,0,0,16,212,1,0,0,0,18,228,
1,0,0,0,20,234,1,0,0,0,22,243,1,0,0,0,24,305,1,0,0,0,26,307,1,0,0,0,28,309,
1,0,0,0,30,320,1,0,0,0,32,344,1,0,0,0,34,346,1,0,0,0,36,354,1,0,0,0,38,359,
1,0,0,0,40,367,1,0,0,0,42,370,1,0,0,0,44,379,1,0,0,0,46,396,1,0,0,0,48,413,
1,0,0,0,50,419,1,0,0,0,52,425,1,0,0,0,54,428,1,0,0,0,56,431,1,0,0,0,58,434,
1,0,0,0,60,440,1,0,0,0,62,444,1,0,0,0,64,447,1,0,0,0,66,451,1,0,0,0,68,454,
1,0,0,0,70,493,1,0,0,0,72,544,1,0,0,0,74,551,1,0,0,0,76,559,1,0,0,0,78,568,
1,0,0,0,80,576,1,0,0,0,82,592,1,0,0,0,84,595,1,0,0,0,86,601,1,0,0,0,88,614,
1,0,0,0,90,618,1,0,0,0,92,94,3,2,1,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,
0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,0,0,1,99,1,1,0,0,
0,100,126,3,4,2,0,101,126,3,6,3,0,102,126,3,20,10,0,103,126,3,8,4,0,104,
126,3,22,11,0,105,126,3,10,5,0,106,126,3,14,7,0,107,126,3,16,8,0,108,126,
3,32,16,0,109,126,3,38,19,0,110,126,3,40,20,0,111,126,3,42,21,0,112,126,
3,44,22,0,113,126,3,46,23,0,114,126,3,48,24,0,115,126,3,50,25,0,116,126,
3,52,26,0,117,126,3,54,27,0,118,126,3,56,28,0,119,126,3,58,29,0,120,126,
3,60,30,0,121,126,3,62,31,0,122,126,3,64,32,0,123,126,3,66,33,0,124,126,
3,68,34,0,125,100,1,0,0,0,125,101,1,0,0,0,125,102,1,0,0,0,125,103,1,0,0,
0,125,104,1,0,0,0,125,105,1,0,0,0,125,106,1,0,0,0,125,107,1,0,0,0,125,108,
1,0,0,0,125,109,1,0,0,0,125,110,1,0,0,0,125,111,1,0,0,0,125,112,1,0,0,0,
125,113,1,0,0,0,125,114,1,0,0,0,125,115,1,0,0,0,125,116,1,0,0,0,125,117,
1,0,0,0,125,118,1,0,0,0,125,119,1,0,0,0,125,120,1,0,0,0,125,121,1,0,0,0,
125,122,1,0,0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,3,1,0,0,0,127,131,5,
44,0,0,128,130,3,2,1,0,129,128,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,
132,1,0,0,0,132,134,1,0,0,0,133,131,1,0,0,0,134,135,5,45,0,0,135,5,1,0,0,
0,136,138,3,26,13,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,
140,7,0,0,0,140,143,5,77,0,0,141,142,5,54,0,0,142,144,3,80,40,0,143,141,
1,0,0,0,143,144,1,0,0,0,144,147,1,0,0,0,145,146,5,50,0,0,146,148,3,70,35,
0,147,145,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,5,48,0,0,150,7,
1,0,0,0,151,153,3,26,13,0,152,151,1,0,0,0,152,153,1,0,0,0,153,155,1,0,0,
0,154,156,5,29,0,0,155,154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,158,
5,2,0,0,158,160,5,77,0,0,159,161,3,28,14,0,160,159,1,0,0,0,160,161,1,0,0,
0,161,162,1,0,0,0,162,164,5,42,0,0,163,165,3,74,37,0,164,163,1,0,0,0,164,
165,1,0,0,0,165,166,1,0,0,0,166,169,5,43,0,0,167,168,5,54,0,0,168,170,3,
80,40,0,169,167,1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,172,3,4,2,0,
172,9,1,0,0,0,173,175,3,26,13,0,174,173,1,0,0,0,174,175,1,0,0,0,175,176,
1,0,0,0,176,177,5,22,0,0,177,179,5,77,0,0,178,180,3,28,14,0,179,178,1,0,
0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,185,5,44,0,0,182,184,3,12,6,0,183,
182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,188,1,0,
0,0,187,185,1,0,0,0,188,189,5,45,0,0,189,11,1,0,0,0,190,191,5,77,0,0,191,
192,5,54,0,0,192,193,3,80,40,0,193,194,5,48,0,0,194,13,1,0,0,0,195,197,3,
26,13,0,196,195,1,0,0,0,196,197,1,0,0,0,197,198,1,0,0,0,198,199,5,23,0,0,
199,200,5,77,0,0,200,201,5,44,0,0,201,206,5,77,0,0,202,203,5,49,0,0,203,
205,5,77,0,0,204,202,1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,
0,0,207,209,1,0,0,0,208,206,1,0,0,0,209,210,5,45,0,0,210,15,1,0,0,0,211,
213,3,26,13,0,212,211,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,215,5,
24,0,0,215,217,5,77,0,0,216,218,3,28,14,0,217,216,1,0,0,0,217,218,1,0,0,
0,218,219,1,0,0,0,219,223,5,44,0,0,220,222,3,18,9,0,221,220,1,0,0,0,222,
225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,225,223,1,0,
0,0,226,227,5,45,0,0,227,17,1,0,0,0,228,229,5,77,0,0,229,230,5,54,0,0,230,
231,3,80,40,0,231,232,5,48,0,0,232,19,1,0,0,0,233,235,3,26,13,0,234,233,
1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,5,26,0,0,237,238,5,77,0,
0,238,239,5,50,0,0,239,240,3,80,40,0,240,241,5,48,0,0,241,21,1,0,0,0,242,
244,3,26,13,0,243,242,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,5,
10,0,0,246,248,5,77,0,0,247,249,3,28,14,0,248,247,1,0,0,0,248,249,1,0,0,
0,249,255,1,0,0,0,250,251,5,11,0,0,251,253,5,77,0,0,252,254,3,30,15,0,253,
252,1,0,0,0,253,254,1,0,0,0,254,256,1,0,0,0,255,250,1,0,0,0,255,256,1,0,
0,0,256,257,1,0,0,0,257,261,5,44,0,0,258,260,3,24,12,0,259,258,1,0,0,0,260,
263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,264,1,0,0,0,263,261,1,0,
0,0,264,265,5,45,0,0,265,23,1,0,0,0,266,268,3,26,13,0,267,266,1,0,0,0,267,
268,1,0,0,0,268,269,1,0,0,0,269,271,5,77,0,0,270,272,3,28,14,0,271,270,1,
0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,275,5,42,0,0,274,276,3,74,37,0,
275,274,1,0,0,0,275,276,1,0,0,0,276,277,1,0,0,0,277,280,5,43,0,0,278,279,
5,54,0,0,279,281,3,80,40,0,280,278,1,0,0,0,280,281,1,0,0,0,281,282,1,0,0,
0,282,306,3,4,2,0,283,285,3,26,13,0,284,283,1,0,0,0,284,285,1,0,0,0,285,
287,1,0,0,0,286,288,5,29,0,0,287,286,1,0,0,0,287,288,1,0,0,0,288,289,1,0,
0,0,289,290,5,2,0,0,290,292,5,77,0,0,291,293,3,28,14,0,292,291,1,0,0,0,292,
293,1,0,0,0,293,294,1,0,0,0,294,296,5,42,0,0,295,297,3,74,37,0,296,295,1,
0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,301,5,43,0,0,299,300,5,54,0,0,
300,302,3,80,40,0,301,299,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,306,
3,4,2,0,304,306,3,6,3,0,305,267,1,0,0,0,305,284,1,0,0,0,305,304,1,0,0,0,
306,25,1,0,0,0,307,308,7,1,0,0,308,27,1,0,0,0,309,310,5,60,0,0,310,315,5,
77,0,0,311,312,5,49,0,0,312,314,5,77,0,0,313,311,1,0,0,0,314,317,1,0,0,0,
315,313,1,0,0,0,315,316,1,0,0,0,316,318,1,0,0,0,317,315,1,0,0,0,318,319,
5,61,0,0,319,29,1,0,0,0,320,321,5,60,0,0,321,326,3,80,40,0,322,323,5,49,
0,0,323,325,3,80,40,0,324,322,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,326,
327,1,0,0,0,327,329,1,0,0,0,328,326,1,0,0,0,329,330,5,61,0,0,330,31,1,0,
0,0,331,332,5,12,0,0,332,333,5,44,0,0,333,334,3,34,17,0,334,335,5,45,0,0,
335,336,5,14,0,0,336,337,5,75,0,0,337,338,5,48,0,0,338,345,1,0,0,0,339,340,
5,12,0,0,340,341,5,77,0,0,341,342,5,14,0,0,342,343,5,75,0,0,343,345,5,48,
0,0,344,331,1,0,0,0,344,339,1,0,0,0,345,33,1,0,0,0,346,351,3,36,18,0,347,
348,5,49,0,0,348,350,3,36,18,0,349,347,1,0,0,0,350,353,1,0,0,0,351,349,1,
0,0,0,351,352,1,0,0,0,352,35,1,0,0,0,353,351,1,0,0,0,354,357,5,77,0,0,355,
356,5,25,0,0,356,358,5,77,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,37,1,0,
0,0,359,365,5,13,0,0,360,366,3,6,3,0,361,366,3,8,4,0,362,366,3,22,11,0,363,
366,3,10,5,0,364,366,3,14,7,0,365,360,1,0,0,0,365,361,1,0,0,0,365,362,1,
0,0,0,365,363,1,0,0,0,365,364,1,0,0,0,366,39,1,0,0,0,367,368,5,6,0,0,368,
369,3,2,1,0,369,41,1,0,0,0,370,371,5,7,0,0,371,372,5,42,0,0,372,373,3,70,
35,0,373,374,5,43,0,0,374,377,3,2,1,0,375,376,5,8,0,0,376,378,3,2,1,0,377,
375,1,0,0,0,377,378,1,0,0,0,378,43,1,0,0,0,379,380,5,15,0,0,380,381,3,4,
2,0,381,389,5,16,0,0,382,383,5,42,0,0,383,386,5,77,0,0,384,385,5,54,0,0,
385,387,3,80,40,0,386,384,1,0,0,0,386,387,1,0,0,0,387,388,1,0,0,0,388,390,
5,43,0,0,389,382,1,0,0,0,389,390,1,0,0,0,390,391,1,0,0,0,391,394,3,4,2,0,
392,393,5,17,0,0,393,395,3,4,2,0,394,392,1,0,0,0,394,395,1,0,0,0,395,45,
1,0,0,0,396,397,5,19,0,0,397,401,5,42,0,0,398,402,3,6,3,0,399,402,3,52,26,
0,400,402,5,48,0,0,401,398,1,0,0,0,401,399,1,0,0,0,401,400,1,0,0,0,402,404,
1,0,0,0,403,405,3,70,35,0,404,403,1,0,0,0,404,405,1,0,0,0,405,406,1,0,0,
0,406,408,5,48,0,0,407,409,3,70,35,0,408,407,1,0,0,0,408,409,1,0,0,0,409,
410,1,0,0,0,410,411,5,43,0,0,411,412,3,2,1,0,412,47,1,0,0,0,413,414,5,20,
0,0,414,415,5,42,0,0,415,416,3,70,35,0,416,417,5,43,0,0,417,418,3,2,1,0,
418,49,1,0,0,0,419,421,5,9,0,0,420,422,3,70,35,0,421,420,1,0,0,0,421,422,
1,0,0,0,422,423,1,0,0,0,423,424,5,48,0,0,424,51,1,0,0,0,425,426,3,70,35,
0,426,427,5,48,0,0,427,53,1,0,0,0,428,429,5,34,0,0,429,430,3,2,1,0,430,55,
1,0,0,0,431,432,5,35,0,0,432,433,3,4,2,0,433,57,1,0,0,0,434,435,5,36,0,0,
435,436,5,42,0,0,436,437,3,70,35,0,437,438,5,43,0,0,438,439,3,2,1,0,439,
59,1,0,0,0,440,441,5,37,0,0,441,442,3,70,35,0,442,443,3,2,1,0,443,61,1,0,
0,0,444,445,5,38,0,0,445,446,3,2,1,0,446,63,1,0,0,0,447,448,5,39,0,0,448,
449,3,70,35,0,449,450,5,48,0,0,450,65,1,0,0,0,451,452,5,40,0,0,452,453,5,
48,0,0,453,67,1,0,0,0,454,455,5,41,0,0,455,456,5,48,0,0,456,69,1,0,0,0,457,
458,6,35,-1,0,458,459,5,18,0,0,459,461,3,70,35,0,460,462,3,30,15,0,461,460,
1,0,0,0,461,462,1,0,0,0,462,463,1,0,0,0,463,465,5,42,0,0,464,466,3,78,39,
0,465,464,1,0,0,0,465,466,1,0,0,0,466,467,1,0,0,0,467,468,5,43,0,0,468,494,
1,0,0,0,469,470,5,30,0,0,470,494,3,70,35,15,471,472,5,27,0,0,472,473,3,70,
35,0,473,477,5,44,0,0,474,476,3,72,36,0,475,474,1,0,0,0,476,479,1,0,0,0,
477,475,1,0,0,0,477,478,1,0,0,0,478,480,1,0,0,0,479,477,1,0,0,0,480,481,
5,45,0,0,481,494,1,0,0,0,482,483,5,68,0,0,483,494,3,70,35,7,484,494,5,77,
0,0,485,494,3,90,45,0,486,494,3,84,42,0,487,494,3,86,43,0,488,494,5,21,0,
0,489,490,5,42,0,0,490,491,3,70,35,0,491,492,5,43,0,0,492,494,1,0,0,0,493,
457,1,0,0,0,493,469,1,0,0,0,493,471,1,0,0,0,493,482,1,0,0,0,493,484,1,0,
0,0,493,485,1,0,0,0,493,486,1,0,0,0,493,487,1,0,0,0,493,488,1,0,0,0,493,
489,1,0,0,0,494,539,1,0,0,0,495,496,10,14,0,0,496,497,5,69,0,0,497,538,3,
70,35,15,498,499,10,12,0,0,499,500,7,2,0,0,500,538,3,70,35,12,501,502,10,
11,0,0,502,503,7,3,0,0,503,538,3,70,35,12,504,505,10,10,0,0,505,506,7,4,
0,0,506,538,3,70,35,11,507,508,10,9,0,0,508,509,7,5,0,0,509,538,3,70,35,
10,510,511,10,8,0,0,511,512,7,6,0,0,512,538,3,70,35,9,513,514,10,20,0,0,
514,515,5,53,0,0,515,538,5,77,0,0,516,517,10,19,0,0,517,518,5,46,0,0,518,
519,3,70,35,0,519,520,5,47,0,0,520,538,1,0,0,0,521,522,10,18,0,0,522,523,
5,54,0,0,523,524,5,54,0,0,524,525,3,30,15,0,525,527,5,42,0,0,526,528,3,78,
39,0,527,526,1,0,0,0,527,528,1,0,0,0,528,529,1,0,0,0,529,530,5,43,0,0,530,
538,1,0,0,0,531,532,10,17,0,0,532,534,5,42,0,0,533,535,3,78,39,0,534,533,
1,0,0,0,534,535,1,0,0,0,535,536,1,0,0,0,536,538,5,43,0,0,537,495,1,0,0,0,
537,498,1,0,0,0,537,501,1,0,0,0,537,504,1,0,0,0,537,507,1,0,0,0,537,510,
1,0,0,0,537,513,1,0,0,0,537,516,1,0,0,0,537,521,1,0,0,0,537,531,1,0,0,0,
538,541,1,0,0,0,539,537,1,0,0,0,539,540,1,0,0,0,540,71,1,0,0,0,541,539,1,
0,0,0,542,545,3,70,35,0,543,545,5,28,0,0,544,542,1,0,0,0,544,543,1,0,0,0,
545,546,1,0,0,0,546,549,5,70,0,0,547,550,3,70,35,0,548,550,3,4,2,0,549,547,
1,0,0,0,549,548,1,0,0,0,550,73,1,0,0,0,551,556,3,76,38,0,552,553,5,49,0,
0,553,555,3,76,38,0,554,552,1,0,0,0,555,558,1,0,0,0,556,554,1,0,0,0,556,
557,1,0,0,0,557,75,1,0,0,0,558,556,1,0,0,0,559,562,5,77,0,0,560,561,5,54,
0,0,561,563,3,80,40,0,562,560,1,0,0,0,562,563,1,0,0,0,563,566,1,0,0,0,564,
565,5,50,0,0,565,567,3,70,35,0,566,564,1,0,0,0,566,567,1,0,0,0,567,77,1,
0,0,0,568,573,3,70,35,0,569,570,5,49,0,0,570,572,3,70,35,0,571,569,1,0,0,
0,572,575,1,0,0,0,573,571,1,0,0,0,573,574,1,0,0,0,574,79,1,0,0,0,575,573,
1,0,0,0,576,577,6,40,-1,0,577,579,5,77,0,0,578,580,3,30,15,0,579,578,1,0,
0,0,579,580,1,0,0,0,580,582,1,0,0,0,581,583,3,82,41,0,582,581,1,0,0,0,582,
583,1,0,0,0,583,589,1,0,0,0,584,585,10,1,0,0,585,586,5,67,0,0,586,588,3,
80,40,2,587,584,1,0,0,0,588,591,1,0,0,0,589,587,1,0,0,0,589,590,1,0,0,0,
590,81,1,0,0,0,591,589,1,0,0,0,592,593,5,46,0,0,593,594,5,47,0,0,594,83,
1,0,0,0,595,597,5,46,0,0,596,598,3,78,39,0,597,596,1,0,0,0,597,598,1,0,0,
0,598,599,1,0,0,0,599,600,5,47,0,0,600,85,1,0,0,0,601,610,5,44,0,0,602,607,
3,88,44,0,603,604,5,49,0,0,604,606,3,88,44,0,605,603,1,0,0,0,606,609,1,0,
0,0,607,605,1,0,0,0,607,608,1,0,0,0,608,611,1,0,0,0,609,607,1,0,0,0,610,
602,1,0,0,0,610,611,1,0,0,0,611,612,1,0,0,0,612,613,5,45,0,0,613,87,1,0,
0,0,614,615,5,77,0,0,615,616,5,54,0,0,616,617,3,70,35,0,617,89,1,0,0,0,618,
619,7,7,0,0,619,91,1,0,0,0,69,95,125,131,137,143,147,152,155,160,164,169,
174,179,185,196,206,212,217,223,234,243,248,253,255,261,267,271,275,280,
284,287,292,296,301,305,315,326,344,351,357,365,377,386,389,394,401,404,
408,421,461,465,477,493,527,534,537,539,544,549,556,562,566,573,579,582,
589,597,607,610];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ZScriptParser extends antlr4.Parser {

    static grammarFileName = "ZScript.g4";
    static literalNames = [ null, null, "'fn'", "'let'", "'var'", "'const'",
                            "'defer'", "'if'", "'else'", "'return'", "'class'",
                            "'extends'", "'import'", "'export'", "'from'",
                            "'try'", "'catch'", "'finally'", "'new'", "'for'",
                            "'while'", "'this'", "'struct'", "'enum'", "'interface'",
                            "'as'", "'type'", "'match'", "'default'", "'async'",
                            "'await'", "'public'", "'private'", "'protected'",
                            "'queue'", "'js'", "'unless'", "'repeat'", "'forever'",
                            "'fail'", "'break'", "'continue'", "'('", "')'",
                            "'{'", "'}'", "'['", "']'", "';'", "','", "'='",
                            "'+='", "'-='", "'.'", "':'", "'+'", "'-'",
                            "'*'", "'/'", "'%'", "'<'", "'>'", "'<='", "'>='",
                            "'=='", "'!='", "'&&'", "'||'", "'!'", "'|>'",
                            "'=>'", "'null'" ];
    static symbolicNames = [ null, "RegexLiteral", "FN", "LET", "VAR", "CONST",
                             "DEFER", "IF", "ELSE", "RETURN", "CLASS", "EXTENDS",
                             "IMPORT", "EXPORT", "FROM", "TRY", "CATCH",
                             "FINALLY", "NEW", "FOR", "WHILE", "THIS", "STRUCT",
                             "ENUM", "INTERFACE", "AS", "TYPE", "MATCH",
                             "DEFAULT", "ASYNC", "AWAIT", "PUBLIC", "PRIVATE",
                             "PROTECTED", "QUEUE", "JS", "UNLESS", "REPEAT",
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
                         "modifier", "typeParameters", "typeArguments",
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
	case 35:
			return this.expression_sempred(localctx, predIndex);
	case 40:
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
			return this.precpred(this._ctx, 20);
		case 7:
			return this.precpred(this._ctx, 19);
		case 8:
			return this.precpred(this._ctx, 18);
		case 9:
			return this.precpred(this._ctx, 17);
		default:
			throw "No predicate with index:" + predIndex;
	}
    };

    type_sempred(localctx, predIndex) {
	switch(predIndex) {
		case 10:
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
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3992762110) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 22527) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 1017) !== 0)) {
	            this.state = 92;
	            this.statement();
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
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
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.varDecl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.typeAlias();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.functionDecl();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.classDecl();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 105;
	            this.structDecl();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 106;
	            this.enumDecl();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 107;
	            this.interfaceDecl();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 108;
	            this.importStmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 109;
	            this.exportStmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 110;
	            this.deferStmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 111;
	            this.ifStatement();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 112;
	            this.tryStatement();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 113;
	            this.forStatement();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 114;
	            this.whileStatement();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 115;
	            this.returnStatement();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 116;
	            this.expressionStatement();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 117;
	            this.queueStmt();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 118;
	            this.jsBlock();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 119;
	            this.unlessStmt();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 120;
	            this.repeatStmt();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 121;
	            this.foreverStmt();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 122;
	            this.failStmt();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 123;
	            this.breakStmt();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 124;
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
	        this.state = 127;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3992762110) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 22527) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 1017) !== 0)) {
	            this.state = 128;
	            this.statement();
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 134;
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
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 136;
	            this.modifier();
	        }

	        this.state = 139;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 56) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
			this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 140;
	        this.match(ZScriptParser.Identifier);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 141;
	            this.match(ZScriptParser.COLON);
	            this.state = 142;
	            this.type(0);
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 145;
	            this.match(ZScriptParser.Assign);
	            this.state = 146;
	            this.expression(0);
	        }

	        this.state = 149;
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
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 151;
	            this.modifier();
	        }

	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 154;
	            this.match(ZScriptParser.ASYNC);
	        }

	        this.state = 157;
	        this.match(ZScriptParser.FN);
	        this.state = 158;
	        this.match(ZScriptParser.Identifier);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 159;
	            this.typeParameters();
	        }

	        this.state = 162;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 163;
	            this.formalParameterList();
	        }

	        this.state = 166;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 167;
	            this.match(ZScriptParser.COLON);
	            this.state = 168;
	            this.type(0);
	        }

	        this.state = 171;
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
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 173;
	            this.modifier();
	        }

	        this.state = 176;
	        this.match(ZScriptParser.STRUCT);
	        this.state = 177;
	        this.match(ZScriptParser.Identifier);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 178;
	            this.typeParameters();
	        }

	        this.state = 181;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===77) {
	            this.state = 182;
	            this.structField();
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



	structField() {
	    let localctx = new StructFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ZScriptParser.RULE_structField);
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



	enumDecl() {
	    let localctx = new EnumDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ZScriptParser.RULE_enumDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 195;
	            this.modifier();
	        }

	        this.state = 198;
	        this.match(ZScriptParser.ENUM);
	        this.state = 199;
	        this.match(ZScriptParser.Identifier);
	        this.state = 200;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 201;
	        this.match(ZScriptParser.Identifier);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 202;
	            this.match(ZScriptParser.Comma);
	            this.state = 203;
	            this.match(ZScriptParser.Identifier);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 209;
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
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 211;
	            this.modifier();
	        }

	        this.state = 214;
	        this.match(ZScriptParser.INTERFACE);
	        this.state = 215;
	        this.match(ZScriptParser.Identifier);
	        this.state = 217;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 216;
	            this.typeParameters();
	        }

	        this.state = 219;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===77) {
	            this.state = 220;
	            this.interfaceField();
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 226;
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
	        this.state = 228;
	        this.match(ZScriptParser.Identifier);
	        this.state = 229;
	        this.match(ZScriptParser.COLON);
	        this.state = 230;
	        this.type(0);
	        this.state = 231;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 233;
	            this.modifier();
	        }

	        this.state = 236;
	        this.match(ZScriptParser.TYPE);
	        this.state = 237;
	        this.match(ZScriptParser.Identifier);
	        this.state = 238;
	        this.match(ZScriptParser.Assign);
	        this.state = 239;
	        this.type(0);
	        this.state = 240;
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
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 242;
	            this.modifier();
	        }

	        this.state = 245;
	        this.match(ZScriptParser.CLASS);
	        this.state = 246;
	        this.match(ZScriptParser.Identifier);
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 247;
	            this.typeParameters();
	        }

	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 250;
	            this.match(ZScriptParser.EXTENDS);
	            this.state = 251;
	            this.match(ZScriptParser.Identifier);
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 252;
	                this.typeArguments();
	            }

	        }

	        this.state = 257;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 2)) & ~0x1f) === 0 && ((1 << (_la - 2)) & 3892314127) !== 0) || _la===77) {
	            this.state = 258;
	            this.classElement();
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 264;
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
	        this.state = 305;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	                this.state = 266;
	                this.modifier();
	            }

	            this.state = 269;
	            this.match(ZScriptParser.Identifier);
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 270;
	                this.typeParameters();
	            }

	            this.state = 273;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===77) {
	                this.state = 274;
	                this.formalParameterList();
	            }

	            this.state = 277;
	            this.match(ZScriptParser.CloseParen);
	            this.state = 280;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 278;
	                this.match(ZScriptParser.COLON);
	                this.state = 279;
	                this.type(0);
	            }

	            this.state = 282;
	            this.block();
	            break;

	        case 2:
	            localctx = new ClassMethodWithFnContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	                this.state = 283;
	                this.modifier();
	            }

	            this.state = 287;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 286;
	                this.match(ZScriptParser.ASYNC);
	            }

	            this.state = 289;
	            this.match(ZScriptParser.FN);
	            this.state = 290;
	            this.match(ZScriptParser.Identifier);
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 291;
	                this.typeParameters();
	            }

	            this.state = 294;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===77) {
	                this.state = 295;
	                this.formalParameterList();
	            }

	            this.state = 298;
	            this.match(ZScriptParser.CloseParen);
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 299;
	                this.match(ZScriptParser.COLON);
	                this.state = 300;
	                this.type(0);
	            }

	            this.state = 303;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 304;
	            this.varDecl();
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



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ZScriptParser.RULE_modifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
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



	typeParameters() {
	    let localctx = new TypeParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ZScriptParser.RULE_typeParameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(ZScriptParser.LessThan);
	        this.state = 310;
	        this.match(ZScriptParser.Identifier);
	        this.state = 315;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 311;
	            this.match(ZScriptParser.Comma);
	            this.state = 312;
	            this.match(ZScriptParser.Identifier);
	            this.state = 317;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 318;
	        this.match(ZScriptParser.MoreThan);
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



	typeArguments() {
	    let localctx = new TypeArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ZScriptParser.RULE_typeArguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(ZScriptParser.LessThan);
	        this.state = 321;
	        this.type(0);
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 322;
	            this.match(ZScriptParser.Comma);
	            this.state = 323;
	            this.type(0);
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 329;
	        this.match(ZScriptParser.MoreThan);
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
	    this.enterRule(localctx, 32, ZScriptParser.RULE_importStmt);
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 331;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 332;
	            this.match(ZScriptParser.OpenBrace);
	            this.state = 333;
	            this.importItems();
	            this.state = 334;
	            this.match(ZScriptParser.CloseBrace);
	            this.state = 335;
	            this.match(ZScriptParser.FROM);
	            this.state = 336;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 337;
	            this.match(ZScriptParser.SemiColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 339;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 340;
	            this.match(ZScriptParser.Identifier);
	            this.state = 341;
	            this.match(ZScriptParser.FROM);
	            this.state = 342;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 343;
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
	    this.enterRule(localctx, 34, ZScriptParser.RULE_importItems);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.importItem();
	        this.state = 351;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 347;
	            this.match(ZScriptParser.Comma);
	            this.state = 348;
	            this.importItem();
	            this.state = 353;
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
	    this.enterRule(localctx, 36, ZScriptParser.RULE_importItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.match(ZScriptParser.Identifier);
	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 355;
	            this.match(ZScriptParser.AS);
	            this.state = 356;
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
	    this.enterRule(localctx, 38, ZScriptParser.RULE_exportStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this.match(ZScriptParser.EXPORT);
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 360;
	            this.varDecl();
	            break;

	        case 2:
	            this.state = 361;
	            this.functionDecl();
	            break;

	        case 3:
	            this.state = 362;
	            this.classDecl();
	            break;

	        case 4:
	            this.state = 363;
	            this.structDecl();
	            break;

	        case 5:
	            this.state = 364;
	            this.enumDecl();
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



	deferStmt() {
	    let localctx = new DeferStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ZScriptParser.RULE_deferStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(ZScriptParser.DEFER);
	        this.state = 368;
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
	    this.enterRule(localctx, 42, ZScriptParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.match(ZScriptParser.IF);
	        this.state = 371;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 372;
	        this.expression(0);
	        this.state = 373;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 374;
	        this.statement();
	        this.state = 377;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        if(la_===1) {
	            this.state = 375;
	            this.match(ZScriptParser.ELSE);
	            this.state = 376;
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
	    this.enterRule(localctx, 44, ZScriptParser.RULE_tryStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(ZScriptParser.TRY);
	        this.state = 380;
	        this.block();
	        this.state = 381;
	        this.match(ZScriptParser.CATCH);
	        this.state = 389;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 382;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 383;
	            this.match(ZScriptParser.Identifier);
	            this.state = 386;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 384;
	                this.match(ZScriptParser.COLON);
	                this.state = 385;
	                this.type(0);
	            }

	            this.state = 388;
	            this.match(ZScriptParser.CloseParen);
	        }

	        this.state = 391;
	        this.block();
	        this.state = 394;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 392;
	            this.match(ZScriptParser.FINALLY);
	            this.state = 393;
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
	    this.enterRule(localctx, 46, ZScriptParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(ZScriptParser.FOR);
	        this.state = 397;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 401;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	        case 5:
	        case 31:
	        case 32:
	        case 33:
	            this.state = 398;
	            this.varDecl();
	            break;
	        case 1:
	        case 18:
	        case 21:
	        case 27:
	        case 30:
	        case 42:
	        case 44:
	        case 46:
	        case 68:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	            this.state = 399;
	            this.expressionStatement();
	            break;
	        case 48:
	            this.state = 400;
	            this.match(ZScriptParser.SemiColon);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 404;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1210318850) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	            this.state = 403;
	            this.expression(0);
	        }

	        this.state = 406;
	        this.match(ZScriptParser.SemiColon);
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1210318850) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	            this.state = 407;
	            this.expression(0);
	        }

	        this.state = 410;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 411;
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
	    this.enterRule(localctx, 48, ZScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(ZScriptParser.WHILE);
	        this.state = 414;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 415;
	        this.expression(0);
	        this.state = 416;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 417;
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
	    this.enterRule(localctx, 50, ZScriptParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
	        this.match(ZScriptParser.RETURN);
	        this.state = 421;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1210318850) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	            this.state = 420;
	            this.expression(0);
	        }

	        this.state = 423;
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
	    this.enterRule(localctx, 52, ZScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.expression(0);
	        this.state = 426;
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
	    this.enterRule(localctx, 54, ZScriptParser.RULE_queueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(ZScriptParser.QUEUE);
	        this.state = 429;
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
	    this.enterRule(localctx, 56, ZScriptParser.RULE_jsBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.match(ZScriptParser.JS);
	        this.state = 432;
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
	    this.enterRule(localctx, 58, ZScriptParser.RULE_unlessStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
	        this.match(ZScriptParser.UNLESS);
	        this.state = 435;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 436;
	        this.expression(0);
	        this.state = 437;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 438;
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
	    this.enterRule(localctx, 60, ZScriptParser.RULE_repeatStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(ZScriptParser.REPEAT);
	        this.state = 441;
	        this.expression(0);
	        this.state = 442;
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
	    this.enterRule(localctx, 62, ZScriptParser.RULE_foreverStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this.match(ZScriptParser.FOREVER);
	        this.state = 445;
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
	    this.enterRule(localctx, 64, ZScriptParser.RULE_failStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(ZScriptParser.FAIL);
	        this.state = 448;
	        this.expression(0);
	        this.state = 449;
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
	    this.enterRule(localctx, 66, ZScriptParser.RULE_breakStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this.match(ZScriptParser.BREAK);
	        this.state = 452;
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
	    this.enterRule(localctx, 68, ZScriptParser.RULE_continueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 454;
	        this.match(ZScriptParser.CONTINUE);
	        this.state = 455;
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
	    const _startState = 70;
	    this.enterRecursionRule(localctx, 70, ZScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 493;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            localctx = new NewExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 458;
	            this.match(ZScriptParser.NEW);
	            this.state = 459;
	            this.expression(0);
	            this.state = 461;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 460;
	                this.typeArguments();
	            }

	            this.state = 463;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 465;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1210318850) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	                this.state = 464;
	                this.arguments();
	            }

	            this.state = 467;
	            this.match(ZScriptParser.CloseParen);
	            break;
	        case 30:
	            localctx = new AwaitExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 469;
	            this.match(ZScriptParser.AWAIT);
	            this.state = 470;
	            this.expression(15);
	            break;
	        case 27:
	            localctx = new MatchExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 471;
	            this.match(ZScriptParser.MATCH);
	            this.state = 472;
	            this.expression(0);
	            this.state = 473;
	            this.match(ZScriptParser.OpenBrace);
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1478754306) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	                this.state = 474;
	                this.matchArm();
	                this.state = 479;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 480;
	            this.match(ZScriptParser.CloseBrace);
	            break;
	        case 68:
	            localctx = new UnaryOpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 482;
	            this.match(ZScriptParser.NOT);
	            this.state = 483;
	            this.expression(7);
	            break;
	        case 77:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 484;
	            this.match(ZScriptParser.Identifier);
	            break;
	        case 1:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 485;
	            this.literal();
	            break;
	        case 46:
	            localctx = new ArrayExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 486;
	            this.arrayLiteral();
	            break;
	        case 44:
	            localctx = new ObjectExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 487;
	            this.objectLiteral();
	            break;
	        case 21:
	            localctx = new ThisExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 488;
	            this.match(ZScriptParser.THIS);
	            break;
	        case 42:
	            localctx = new ParenthesizedExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 489;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 490;
	            this.expression(0);
	            this.state = 491;
	            this.match(ZScriptParser.CloseParen);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 539;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,56,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 537;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PipeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 495;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 496;
	                    this.match(ZScriptParser.Pipe);
	                    this.state = 497;
	                    this.expression(15);
	                    break;

	                case 2:
	                    localctx = new AssignmentExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 498;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 499;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 50)) & ~0x1f) === 0 && ((1 << (_la - 50)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 500;
	                    this.expression(12);
	                    break;

	                case 3:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 501;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 502;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 503;
	                    this.expression(12);
	                    break;

	                case 4:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 504;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 505;
	                    _la = this._input.LA(1);
	                    if(!(_la===55 || _la===56)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 506;
	                    this.expression(11);
	                    break;

	                case 5:
	                    localctx = new CompareOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 507;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 508;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 63) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 509;
	                    this.expression(10);
	                    break;

	                case 6:
	                    localctx = new LogicalOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 510;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 511;
	                    _la = this._input.LA(1);
	                    if(!(_la===66 || _la===67)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
				this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 512;
	                    this.expression(9);
	                    break;

	                case 7:
	                    localctx = new MemberIndexContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 513;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 514;
	                    this.match(ZScriptParser.Dot);
	                    this.state = 515;
	                    this.match(ZScriptParser.Identifier);
	                    break;

	                case 8:
	                    localctx = new ArrayAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 516;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 517;
	                    this.match(ZScriptParser.OpenBracket);
	                    this.state = 518;
	                    this.expression(0);
	                    this.state = 519;
	                    this.match(ZScriptParser.CloseBracket);
	                    break;

	                case 9:
	                    localctx = new GenericCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 521;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 522;
	                    this.match(ZScriptParser.COLON);
	                    this.state = 523;
	                    this.match(ZScriptParser.COLON);
	                    this.state = 524;
	                    this.typeArguments();
	                    this.state = 525;
	                    this.match(ZScriptParser.OpenParen);
	                    this.state = 527;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1210318850) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	                        this.state = 526;
	                        this.arguments();
	                    }

	                    this.state = 529;
	                    this.match(ZScriptParser.CloseParen);
	                    break;

	                case 10:
	                    localctx = new CallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 531;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 532;
	                    this.match(ZScriptParser.OpenParen);
	                    this.state = 534;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1210318850) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	                        this.state = 533;
	                        this.arguments();
	                    }

	                    this.state = 536;
	                    this.match(ZScriptParser.CloseParen);
	                    break;

	                }
	            }
	            this.state = 541;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,56,this._ctx);
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
	    this.enterRule(localctx, 72, ZScriptParser.RULE_matchArm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 18:
	        case 21:
	        case 27:
	        case 30:
	        case 42:
	        case 44:
	        case 46:
	        case 68:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	            this.state = 542;
	            this.expression(0);
	            break;
	        case 28:
	            this.state = 543;
	            this.match(ZScriptParser.DEFAULT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 546;
	        this.match(ZScriptParser.Arrow);
	        this.state = 549;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 547;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 548;
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
	    this.enterRule(localctx, 74, ZScriptParser.RULE_formalParameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 551;
	        this.parameter();
	        this.state = 556;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 552;
	            this.match(ZScriptParser.Comma);
	            this.state = 553;
	            this.parameter();
	            this.state = 558;
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
	    this.enterRule(localctx, 76, ZScriptParser.RULE_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 559;
	        this.match(ZScriptParser.Identifier);
	        this.state = 562;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 560;
	            this.match(ZScriptParser.COLON);
	            this.state = 561;
	            this.type(0);
	        }

	        this.state = 566;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 564;
	            this.match(ZScriptParser.Assign);
	            this.state = 565;
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
	    this.enterRule(localctx, 78, ZScriptParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this.expression(0);
	        this.state = 573;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 569;
	            this.match(ZScriptParser.Comma);
	            this.state = 570;
	            this.expression(0);
	            this.state = 575;
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
	    const _startState = 80;
	    this.enterRecursionRule(localctx, 80, ZScriptParser.RULE_type, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 577;
	        this.match(ZScriptParser.Identifier);
	        this.state = 579;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	        if(la_===1) {
	            this.state = 578;
	            this.typeArguments();

	        }
	        this.state = 582;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	        if(la_===1) {
	            this.state = 581;
	            this.typeSuffix();

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 589;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,65,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TypeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_type);
	                this.state = 584;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 585;
	                this.match(ZScriptParser.OR);
	                this.state = 586;
	                this.type(2);
	            }
	            this.state = 591;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,65,this._ctx);
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
	    this.enterRule(localctx, 82, ZScriptParser.RULE_typeSuffix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 592;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 593;
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
	    this.enterRule(localctx, 84, ZScriptParser.RULE_arrayLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 595;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 597;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1210318850) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 3825205269) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 15) !== 0)) {
	            this.state = 596;
	            this.arguments();
	        }

	        this.state = 599;
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
	    this.enterRule(localctx, 86, ZScriptParser.RULE_objectLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 601;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 610;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 602;
	            this.property();
	            this.state = 607;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===49) {
	                this.state = 603;
	                this.match(ZScriptParser.Comma);
	                this.state = 604;
	                this.property();
	                this.state = 609;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 612;
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
	    this.enterRule(localctx, 88, ZScriptParser.RULE_property);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 614;
	        this.match(ZScriptParser.Identifier);
	        this.state = 615;
	        this.match(ZScriptParser.COLON);
	        this.state = 616;
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
	    this.enterRule(localctx, 90, ZScriptParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 618;
	        _la = this._input.LA(1);
	        if(!(_la===1 || ((((_la - 71)) & ~0x1f) === 0 && ((1 << (_la - 71)) & 63) !== 0))) {
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
ZScriptParser.RegexLiteral = 1;
ZScriptParser.FN = 2;
ZScriptParser.LET = 3;
ZScriptParser.VAR = 4;
ZScriptParser.CONST = 5;
ZScriptParser.DEFER = 6;
ZScriptParser.IF = 7;
ZScriptParser.ELSE = 8;
ZScriptParser.RETURN = 9;
ZScriptParser.CLASS = 10;
ZScriptParser.EXTENDS = 11;
ZScriptParser.IMPORT = 12;
ZScriptParser.EXPORT = 13;
ZScriptParser.FROM = 14;
ZScriptParser.TRY = 15;
ZScriptParser.CATCH = 16;
ZScriptParser.FINALLY = 17;
ZScriptParser.NEW = 18;
ZScriptParser.FOR = 19;
ZScriptParser.WHILE = 20;
ZScriptParser.THIS = 21;
ZScriptParser.STRUCT = 22;
ZScriptParser.ENUM = 23;
ZScriptParser.INTERFACE = 24;
ZScriptParser.AS = 25;
ZScriptParser.TYPE = 26;
ZScriptParser.MATCH = 27;
ZScriptParser.DEFAULT = 28;
ZScriptParser.ASYNC = 29;
ZScriptParser.AWAIT = 30;
ZScriptParser.PUBLIC = 31;
ZScriptParser.PRIVATE = 32;
ZScriptParser.PROTECTED = 33;
ZScriptParser.QUEUE = 34;
ZScriptParser.JS = 35;
ZScriptParser.UNLESS = 36;
ZScriptParser.REPEAT = 37;
ZScriptParser.FOREVER = 38;
ZScriptParser.FAIL = 39;
ZScriptParser.BREAK = 40;
ZScriptParser.CONTINUE = 41;
ZScriptParser.OpenParen = 42;
ZScriptParser.CloseParen = 43;
ZScriptParser.OpenBrace = 44;
ZScriptParser.CloseBrace = 45;
ZScriptParser.OpenBracket = 46;
ZScriptParser.CloseBracket = 47;
ZScriptParser.SemiColon = 48;
ZScriptParser.Comma = 49;
ZScriptParser.Assign = 50;
ZScriptParser.PlusAssign = 51;
ZScriptParser.MinusAssign = 52;
ZScriptParser.Dot = 53;
ZScriptParser.COLON = 54;
ZScriptParser.Plus = 55;
ZScriptParser.Minus = 56;
ZScriptParser.Multiply = 57;
ZScriptParser.Divide = 58;
ZScriptParser.Modulus = 59;
ZScriptParser.LessThan = 60;
ZScriptParser.MoreThan = 61;
ZScriptParser.LessEqual = 62;
ZScriptParser.MoreEqual = 63;
ZScriptParser.Equals_ = 64;
ZScriptParser.NotEquals = 65;
ZScriptParser.AND = 66;
ZScriptParser.OR = 67;
ZScriptParser.NOT = 68;
ZScriptParser.Pipe = 69;
ZScriptParser.Arrow = 70;
ZScriptParser.NullLiteral = 71;
ZScriptParser.BooleanLiteral = 72;
ZScriptParser.DecimalLiteral = 73;
ZScriptParser.BigIntLiteral = 74;
ZScriptParser.StringLiteral = 75;
ZScriptParser.TemplateString = 76;
ZScriptParser.Identifier = 77;
ZScriptParser.DOC_COMMENT = 78;
ZScriptParser.LineComment = 79;
ZScriptParser.BlockComment = 80;
ZScriptParser.WhiteSpaces = 81;

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
ZScriptParser.RULE_modifier = 13;
ZScriptParser.RULE_typeParameters = 14;
ZScriptParser.RULE_typeArguments = 15;
ZScriptParser.RULE_importStmt = 16;
ZScriptParser.RULE_importItems = 17;
ZScriptParser.RULE_importItem = 18;
ZScriptParser.RULE_exportStmt = 19;
ZScriptParser.RULE_deferStmt = 20;
ZScriptParser.RULE_ifStatement = 21;
ZScriptParser.RULE_tryStatement = 22;
ZScriptParser.RULE_forStatement = 23;
ZScriptParser.RULE_whileStatement = 24;
ZScriptParser.RULE_returnStatement = 25;
ZScriptParser.RULE_expressionStatement = 26;
ZScriptParser.RULE_queueStmt = 27;
ZScriptParser.RULE_jsBlock = 28;
ZScriptParser.RULE_unlessStmt = 29;
ZScriptParser.RULE_repeatStmt = 30;
ZScriptParser.RULE_foreverStmt = 31;
ZScriptParser.RULE_failStmt = 32;
ZScriptParser.RULE_breakStmt = 33;
ZScriptParser.RULE_continueStmt = 34;
ZScriptParser.RULE_expression = 35;
ZScriptParser.RULE_matchArm = 36;
ZScriptParser.RULE_formalParameterList = 37;
ZScriptParser.RULE_parameter = 38;
ZScriptParser.RULE_arguments = 39;
ZScriptParser.RULE_type = 40;
ZScriptParser.RULE_typeSuffix = 41;
ZScriptParser.RULE_arrayLiteral = 42;
ZScriptParser.RULE_objectLiteral = 43;
ZScriptParser.RULE_property = 44;
ZScriptParser.RULE_literal = 45;

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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	ASYNC() {
	    return this.getToken(ZScriptParser.ASYNC, 0);
	};

	typeParameters() {
	    return this.getTypedRuleContext(TypeParametersContext,0);
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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	typeParameters() {
	    return this.getTypedRuleContext(TypeParametersContext,0);
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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	typeParameters() {
	    return this.getTypedRuleContext(TypeParametersContext,0);
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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	typeParameters() {
	    return this.getTypedRuleContext(TypeParametersContext,0);
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

	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
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


class ClassMethodWithFnContext extends ClassElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	ASYNC() {
	    return this.getToken(ZScriptParser.ASYNC, 0);
	};

	typeParameters() {
	    return this.getTypedRuleContext(TypeParametersContext,0);
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
	        return visitor.visitClassMethodWithFn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.ClassMethodWithFnContext = ClassMethodWithFnContext;

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

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	typeParameters() {
	    return this.getTypedRuleContext(TypeParametersContext,0);
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

class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_modifier;
    }

	PUBLIC() {
	    return this.getToken(ZScriptParser.PUBLIC, 0);
	};

	PRIVATE() {
	    return this.getToken(ZScriptParser.PRIVATE, 0);
	};

	PROTECTED() {
	    return this.getToken(ZScriptParser.PROTECTED, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitModifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_typeParameters;
    }

	LessThan() {
	    return this.getToken(ZScriptParser.LessThan, 0);
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


	MoreThan() {
	    return this.getToken(ZScriptParser.MoreThan, 0);
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
	        return visitor.visitTypeParameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_typeArguments;
    }

	LessThan() {
	    return this.getToken(ZScriptParser.LessThan, 0);
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

	MoreThan() {
	    return this.getToken(ZScriptParser.MoreThan, 0);
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
	        return visitor.visitTypeArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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

class GenericCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.COLON);
	    } else {
	        return this.getToken(ZScriptParser.COLON, i);
	    }
	};


	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
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
	        return visitor.visitGenericCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.GenericCallExpressionContext = GenericCallExpressionContext;

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

	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
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

class AwaitExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	AWAIT() {
	    return this.getToken(ZScriptParser.AWAIT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitAwaitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.AwaitExprContext = AwaitExprContext;

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

	typeArguments() {
	    return this.getTypedRuleContext(TypeArgumentsContext,0);
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

	CloseBrace() {
	    return this.getToken(ZScriptParser.CloseBrace, 0);
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

	RegexLiteral() {
	    return this.getToken(ZScriptParser.RegexLiteral, 0);
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
ZScriptParser.ModifierContext = ModifierContext;
ZScriptParser.TypeParametersContext = TypeParametersContext;
ZScriptParser.TypeArgumentsContext = TypeArgumentsContext;
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
