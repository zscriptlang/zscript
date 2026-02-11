// Generated from ZScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ZScriptVisitor from './ZScriptVisitor.js';

const serializedATN = [4,1,85,668,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,1,0,5,0,98,8,
0,10,0,12,0,101,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,132,
8,1,1,2,1,2,5,2,136,8,2,10,2,12,2,139,9,2,1,2,1,2,1,3,3,3,144,8,3,1,3,1,
3,1,3,1,3,3,3,150,8,3,1,3,1,3,3,3,154,8,3,1,3,1,3,1,4,3,4,159,8,4,1,4,3,
4,162,8,4,1,4,1,4,1,4,3,4,167,8,4,1,4,1,4,3,4,171,8,4,1,4,1,4,1,4,3,4,176,
8,4,1,4,1,4,1,5,3,5,181,8,5,1,5,1,5,1,5,3,5,186,8,5,1,5,1,5,5,5,190,8,5,
10,5,12,5,193,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,3,7,203,8,7,1,7,1,7,1,
7,1,7,1,7,1,7,5,7,211,8,7,10,7,12,7,214,9,7,1,7,1,7,1,8,3,8,219,8,8,1,8,
1,8,1,8,3,8,224,8,8,1,8,1,8,5,8,228,8,8,10,8,12,8,231,9,8,1,8,1,8,1,9,1,
9,1,9,1,9,1,9,1,10,3,10,241,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,3,11,
250,8,11,1,11,1,11,1,11,3,11,255,8,11,1,11,1,11,1,11,3,11,260,8,11,3,11,
262,8,11,1,11,1,11,5,11,266,8,11,10,11,12,11,269,9,11,1,11,1,11,1,12,3,12,
274,8,12,1,12,1,12,3,12,278,8,12,1,12,1,12,3,12,282,8,12,1,12,1,12,1,12,
3,12,287,8,12,1,12,1,12,3,12,291,8,12,1,12,3,12,294,8,12,1,12,1,12,1,12,
3,12,299,8,12,1,12,1,12,3,12,303,8,12,1,12,1,12,1,12,3,12,308,8,12,1,12,
1,12,3,12,312,8,12,1,13,1,13,1,14,1,14,1,14,1,14,5,14,320,8,14,10,14,12,
14,323,9,14,1,14,1,14,1,15,1,15,1,15,1,15,5,15,331,8,15,10,15,12,15,334,
9,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,3,16,351,8,16,1,17,1,17,1,17,5,17,356,8,17,10,17,12,17,359,9,17,
1,18,1,18,1,18,3,18,364,8,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,372,8,19,
1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,384,8,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,3,22,393,8,22,1,22,3,22,396,8,22,1,22,1,22,1,22,
3,22,401,8,22,1,23,1,23,1,23,1,23,1,23,3,23,408,8,23,1,23,3,23,411,8,23,
1,23,1,23,3,23,415,8,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,
1,25,3,25,428,8,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,
1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,
32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,
1,37,1,37,1,37,1,37,3,37,474,8,37,1,37,1,37,3,37,478,8,37,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,5,37,488,8,37,10,37,12,37,491,9,37,1,37,1,37,1,
37,1,37,1,37,1,37,3,37,499,8,37,1,37,1,37,3,37,503,8,37,1,37,1,37,1,37,1,
37,3,37,509,8,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,3,37,524,8,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,
37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,3,37,568,8,37,1,37,1,37,1,37,1,37,1,37,3,37,575,8,37,1,37,
1,37,1,37,1,37,1,37,5,37,582,8,37,10,37,12,37,585,9,37,1,38,1,38,3,38,589,
8,38,1,38,1,38,1,38,3,38,594,8,38,1,39,1,39,1,39,5,39,599,8,39,10,39,12,
39,602,9,39,1,40,1,40,1,40,3,40,607,8,40,1,40,1,40,3,40,611,8,40,1,41,1,
41,1,41,5,41,616,8,41,10,41,12,41,619,9,41,1,42,1,42,1,42,3,42,624,8,42,
1,42,3,42,627,8,42,1,42,3,42,630,8,42,1,42,1,42,1,42,5,42,635,8,42,10,42,
12,42,638,9,42,1,43,1,43,1,43,1,44,1,44,3,44,645,8,44,1,44,1,44,1,45,1,45,
1,45,1,45,5,45,653,8,45,10,45,12,45,656,9,45,3,45,658,8,45,1,45,1,45,1,46,
1,46,1,46,1,46,1,47,1,47,1,47,0,2,74,84,48,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,80,82,84,86,88,90,92,94,0,8,1,0,3,5,1,0,32,34,1,0,52,54,1,0,
59,61,1,0,57,58,1,0,62,67,1,0,68,69,2,0,1,1,75,80,744,0,99,1,0,0,0,2,131,
1,0,0,0,4,133,1,0,0,0,6,143,1,0,0,0,8,158,1,0,0,0,10,180,1,0,0,0,12,196,
1,0,0,0,14,202,1,0,0,0,16,218,1,0,0,0,18,234,1,0,0,0,20,240,1,0,0,0,22,249,
1,0,0,0,24,311,1,0,0,0,26,313,1,0,0,0,28,315,1,0,0,0,30,326,1,0,0,0,32,350,
1,0,0,0,34,352,1,0,0,0,36,360,1,0,0,0,38,365,1,0,0,0,40,373,1,0,0,0,42,376,
1,0,0,0,44,385,1,0,0,0,46,402,1,0,0,0,48,419,1,0,0,0,50,425,1,0,0,0,52,431,
1,0,0,0,54,434,1,0,0,0,56,437,1,0,0,0,58,440,1,0,0,0,60,446,1,0,0,0,62,450,
1,0,0,0,64,453,1,0,0,0,66,457,1,0,0,0,68,460,1,0,0,0,70,463,1,0,0,0,72,466,
1,0,0,0,74,523,1,0,0,0,76,588,1,0,0,0,78,595,1,0,0,0,80,603,1,0,0,0,82,612,
1,0,0,0,84,629,1,0,0,0,86,639,1,0,0,0,88,642,1,0,0,0,90,648,1,0,0,0,92,661,
1,0,0,0,94,665,1,0,0,0,96,98,3,2,1,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,
1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,5,0,0,1,103,
1,1,0,0,0,104,132,3,4,2,0,105,132,3,6,3,0,106,132,3,20,10,0,107,132,3,8,
4,0,108,132,3,22,11,0,109,132,3,10,5,0,110,132,3,14,7,0,111,132,3,16,8,0,
112,132,3,32,16,0,113,132,3,38,19,0,114,132,3,40,20,0,115,132,3,42,21,0,
116,132,3,44,22,0,117,132,3,46,23,0,118,132,3,48,24,0,119,132,3,50,25,0,
120,132,3,52,26,0,121,132,3,54,27,0,122,132,3,56,28,0,123,132,3,58,29,0,
124,132,3,60,30,0,125,132,3,62,31,0,126,132,3,64,32,0,127,132,3,66,33,0,
128,132,3,68,34,0,129,132,3,70,35,0,130,132,3,72,36,0,131,104,1,0,0,0,131,
105,1,0,0,0,131,106,1,0,0,0,131,107,1,0,0,0,131,108,1,0,0,0,131,109,1,0,
0,0,131,110,1,0,0,0,131,111,1,0,0,0,131,112,1,0,0,0,131,113,1,0,0,0,131,
114,1,0,0,0,131,115,1,0,0,0,131,116,1,0,0,0,131,117,1,0,0,0,131,118,1,0,
0,0,131,119,1,0,0,0,131,120,1,0,0,0,131,121,1,0,0,0,131,122,1,0,0,0,131,
123,1,0,0,0,131,124,1,0,0,0,131,125,1,0,0,0,131,126,1,0,0,0,131,127,1,0,
0,0,131,128,1,0,0,0,131,129,1,0,0,0,131,130,1,0,0,0,132,3,1,0,0,0,133,137,
5,46,0,0,134,136,3,2,1,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,
137,138,1,0,0,0,138,140,1,0,0,0,139,137,1,0,0,0,140,141,5,47,0,0,141,5,1,
0,0,0,142,144,3,26,13,0,143,142,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,
145,146,7,0,0,0,146,149,5,81,0,0,147,148,5,56,0,0,148,150,3,84,42,0,149,
147,1,0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,152,5,52,0,0,152,154,3,74,
37,0,153,151,1,0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,156,5,50,0,0,156,
7,1,0,0,0,157,159,3,26,13,0,158,157,1,0,0,0,158,159,1,0,0,0,159,161,1,0,
0,0,160,162,5,29,0,0,161,160,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,
164,5,2,0,0,164,166,5,81,0,0,165,167,3,28,14,0,166,165,1,0,0,0,166,167,1,
0,0,0,167,168,1,0,0,0,168,170,5,44,0,0,169,171,3,78,39,0,170,169,1,0,0,0,
170,171,1,0,0,0,171,172,1,0,0,0,172,175,5,45,0,0,173,174,5,56,0,0,174,176,
3,84,42,0,175,173,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,3,4,2,
0,178,9,1,0,0,0,179,181,3,26,13,0,180,179,1,0,0,0,180,181,1,0,0,0,181,182,
1,0,0,0,182,183,5,22,0,0,183,185,5,81,0,0,184,186,3,28,14,0,185,184,1,0,
0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,191,5,46,0,0,188,190,3,12,6,0,189,
188,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,194,1,0,
0,0,193,191,1,0,0,0,194,195,5,47,0,0,195,11,1,0,0,0,196,197,5,81,0,0,197,
198,5,56,0,0,198,199,3,84,42,0,199,200,5,50,0,0,200,13,1,0,0,0,201,203,3,
26,13,0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,5,23,0,0,
205,206,5,81,0,0,206,207,5,46,0,0,207,212,5,81,0,0,208,209,5,51,0,0,209,
211,5,81,0,0,210,208,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,
0,0,213,215,1,0,0,0,214,212,1,0,0,0,215,216,5,47,0,0,216,15,1,0,0,0,217,
219,3,26,13,0,218,217,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,221,5,
24,0,0,221,223,5,81,0,0,222,224,3,28,14,0,223,222,1,0,0,0,223,224,1,0,0,
0,224,225,1,0,0,0,225,229,5,46,0,0,226,228,3,18,9,0,227,226,1,0,0,0,228,
231,1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,230,232,1,0,0,0,231,229,1,0,
0,0,232,233,5,47,0,0,233,17,1,0,0,0,234,235,5,81,0,0,235,236,5,56,0,0,236,
237,3,84,42,0,237,238,5,50,0,0,238,19,1,0,0,0,239,241,3,26,13,0,240,239,
1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,243,5,26,0,0,243,244,5,81,0,
0,244,245,5,52,0,0,245,246,3,84,42,0,246,247,5,50,0,0,247,21,1,0,0,0,248,
250,3,26,13,0,249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,252,5,
10,0,0,252,254,5,81,0,0,253,255,3,28,14,0,254,253,1,0,0,0,254,255,1,0,0,
0,255,261,1,0,0,0,256,257,5,11,0,0,257,259,5,81,0,0,258,260,3,30,15,0,259,
258,1,0,0,0,259,260,1,0,0,0,260,262,1,0,0,0,261,256,1,0,0,0,261,262,1,0,
0,0,262,263,1,0,0,0,263,267,5,46,0,0,264,266,3,24,12,0,265,264,1,0,0,0,266,
269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,267,1,0,
0,0,270,271,5,47,0,0,271,23,1,0,0,0,272,274,3,26,13,0,273,272,1,0,0,0,273,
274,1,0,0,0,274,275,1,0,0,0,275,277,5,81,0,0,276,278,3,28,14,0,277,276,1,
0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,281,5,44,0,0,280,282,3,78,39,0,
281,280,1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,286,5,45,0,0,284,285,
5,56,0,0,285,287,3,84,42,0,286,284,1,0,0,0,286,287,1,0,0,0,287,288,1,0,0,
0,288,312,3,4,2,0,289,291,3,26,13,0,290,289,1,0,0,0,290,291,1,0,0,0,291,
293,1,0,0,0,292,294,5,29,0,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,
0,0,295,296,5,2,0,0,296,298,5,81,0,0,297,299,3,28,14,0,298,297,1,0,0,0,298,
299,1,0,0,0,299,300,1,0,0,0,300,302,5,44,0,0,301,303,3,78,39,0,302,301,1,
0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,307,5,45,0,0,305,306,5,56,0,0,
306,308,3,84,42,0,307,305,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,312,
3,4,2,0,310,312,3,6,3,0,311,273,1,0,0,0,311,290,1,0,0,0,311,310,1,0,0,0,
312,25,1,0,0,0,313,314,7,1,0,0,314,27,1,0,0,0,315,316,5,62,0,0,316,321,5,
81,0,0,317,318,5,51,0,0,318,320,5,81,0,0,319,317,1,0,0,0,320,323,1,0,0,0,
321,319,1,0,0,0,321,322,1,0,0,0,322,324,1,0,0,0,323,321,1,0,0,0,324,325,
5,63,0,0,325,29,1,0,0,0,326,327,5,62,0,0,327,332,3,84,42,0,328,329,5,51,
0,0,329,331,3,84,42,0,330,328,1,0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,
333,1,0,0,0,333,335,1,0,0,0,334,332,1,0,0,0,335,336,5,63,0,0,336,31,1,0,
0,0,337,338,5,12,0,0,338,339,5,46,0,0,339,340,3,34,17,0,340,341,5,47,0,0,
341,342,5,14,0,0,342,343,5,79,0,0,343,344,5,50,0,0,344,351,1,0,0,0,345,346,
5,12,0,0,346,347,5,81,0,0,347,348,5,14,0,0,348,349,5,79,0,0,349,351,5,50,
0,0,350,337,1,0,0,0,350,345,1,0,0,0,351,33,1,0,0,0,352,357,3,36,18,0,353,
354,5,51,0,0,354,356,3,36,18,0,355,353,1,0,0,0,356,359,1,0,0,0,357,355,1,
0,0,0,357,358,1,0,0,0,358,35,1,0,0,0,359,357,1,0,0,0,360,363,5,81,0,0,361,
362,5,25,0,0,362,364,5,81,0,0,363,361,1,0,0,0,363,364,1,0,0,0,364,37,1,0,
0,0,365,371,5,13,0,0,366,372,3,6,3,0,367,372,3,8,4,0,368,372,3,22,11,0,369,
372,3,10,5,0,370,372,3,14,7,0,371,366,1,0,0,0,371,367,1,0,0,0,371,368,1,
0,0,0,371,369,1,0,0,0,371,370,1,0,0,0,372,39,1,0,0,0,373,374,5,6,0,0,374,
375,3,2,1,0,375,41,1,0,0,0,376,377,5,7,0,0,377,378,5,44,0,0,378,379,3,74,
37,0,379,380,5,45,0,0,380,383,3,2,1,0,381,382,5,8,0,0,382,384,3,2,1,0,383,
381,1,0,0,0,383,384,1,0,0,0,384,43,1,0,0,0,385,386,5,15,0,0,386,387,3,4,
2,0,387,395,5,16,0,0,388,389,5,44,0,0,389,392,5,81,0,0,390,391,5,56,0,0,
391,393,3,84,42,0,392,390,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,396,
5,45,0,0,395,388,1,0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,400,3,4,2,0,
398,399,5,17,0,0,399,401,3,4,2,0,400,398,1,0,0,0,400,401,1,0,0,0,401,45,
1,0,0,0,402,403,5,19,0,0,403,407,5,44,0,0,404,408,3,6,3,0,405,408,3,52,26,
0,406,408,5,50,0,0,407,404,1,0,0,0,407,405,1,0,0,0,407,406,1,0,0,0,408,410,
1,0,0,0,409,411,3,74,37,0,410,409,1,0,0,0,410,411,1,0,0,0,411,412,1,0,0,
0,412,414,5,50,0,0,413,415,3,74,37,0,414,413,1,0,0,0,414,415,1,0,0,0,415,
416,1,0,0,0,416,417,5,45,0,0,417,418,3,2,1,0,418,47,1,0,0,0,419,420,5,20,
0,0,420,421,5,44,0,0,421,422,3,74,37,0,422,423,5,45,0,0,423,424,3,2,1,0,
424,49,1,0,0,0,425,427,5,9,0,0,426,428,3,74,37,0,427,426,1,0,0,0,427,428,
1,0,0,0,428,429,1,0,0,0,429,430,5,50,0,0,430,51,1,0,0,0,431,432,3,74,37,
0,432,433,5,50,0,0,433,53,1,0,0,0,434,435,5,35,0,0,435,436,3,2,1,0,436,55,
1,0,0,0,437,438,5,36,0,0,438,439,3,4,2,0,439,57,1,0,0,0,440,441,5,37,0,0,
441,442,5,44,0,0,442,443,3,74,37,0,443,444,5,45,0,0,444,445,3,2,1,0,445,
59,1,0,0,0,446,447,5,38,0,0,447,448,3,74,37,0,448,449,3,2,1,0,449,61,1,0,
0,0,450,451,5,39,0,0,451,452,3,2,1,0,452,63,1,0,0,0,453,454,5,40,0,0,454,
455,3,74,37,0,455,456,5,50,0,0,456,65,1,0,0,0,457,458,5,41,0,0,458,459,5,
50,0,0,459,67,1,0,0,0,460,461,5,42,0,0,461,462,5,50,0,0,462,69,1,0,0,0,463,
464,5,43,0,0,464,465,3,4,2,0,465,71,1,0,0,0,466,467,5,43,0,0,467,468,3,6,
3,0,468,73,1,0,0,0,469,470,6,37,-1,0,470,471,5,18,0,0,471,473,3,74,37,0,
472,474,3,30,15,0,473,472,1,0,0,0,473,474,1,0,0,0,474,475,1,0,0,0,475,477,
5,44,0,0,476,478,3,82,41,0,477,476,1,0,0,0,477,478,1,0,0,0,478,479,1,0,0,
0,479,480,5,45,0,0,480,524,1,0,0,0,481,482,5,30,0,0,482,524,3,74,37,21,483,
484,5,27,0,0,484,485,3,74,37,0,485,489,5,46,0,0,486,488,3,76,38,0,487,486,
1,0,0,0,488,491,1,0,0,0,489,487,1,0,0,0,489,490,1,0,0,0,490,492,1,0,0,0,
491,489,1,0,0,0,492,493,5,47,0,0,493,524,1,0,0,0,494,495,5,81,0,0,495,498,
5,72,0,0,496,499,3,74,37,0,497,499,3,4,2,0,498,496,1,0,0,0,498,497,1,0,0,
0,499,524,1,0,0,0,500,502,5,44,0,0,501,503,3,78,39,0,502,501,1,0,0,0,502,
503,1,0,0,0,503,504,1,0,0,0,504,505,5,45,0,0,505,508,5,72,0,0,506,509,3,
74,37,0,507,509,3,4,2,0,508,506,1,0,0,0,508,507,1,0,0,0,509,524,1,0,0,0,
510,511,5,70,0,0,511,524,3,74,37,8,512,513,5,31,0,0,513,524,3,74,37,7,514,
524,5,81,0,0,515,524,3,94,47,0,516,524,3,88,44,0,517,524,3,90,45,0,518,524,
5,21,0,0,519,520,5,44,0,0,520,521,3,74,37,0,521,522,5,45,0,0,522,524,1,0,
0,0,523,469,1,0,0,0,523,481,1,0,0,0,523,483,1,0,0,0,523,494,1,0,0,0,523,
500,1,0,0,0,523,510,1,0,0,0,523,512,1,0,0,0,523,514,1,0,0,0,523,515,1,0,
0,0,523,516,1,0,0,0,523,517,1,0,0,0,523,518,1,0,0,0,523,519,1,0,0,0,524,
583,1,0,0,0,525,526,10,20,0,0,526,527,5,71,0,0,527,582,3,74,37,21,528,529,
10,18,0,0,529,530,5,73,0,0,530,531,3,74,37,0,531,532,5,56,0,0,532,533,3,
74,37,19,533,582,1,0,0,0,534,535,10,17,0,0,535,536,5,73,0,0,536,537,5,73,
0,0,537,582,3,74,37,18,538,539,10,13,0,0,539,540,7,2,0,0,540,582,3,74,37,
13,541,542,10,12,0,0,542,543,7,3,0,0,543,582,3,74,37,13,544,545,10,11,0,
0,545,546,7,4,0,0,546,582,3,74,37,12,547,548,10,10,0,0,548,549,7,5,0,0,549,
582,3,74,37,11,550,551,10,9,0,0,551,552,7,6,0,0,552,582,3,74,37,10,553,554,
10,26,0,0,554,555,5,55,0,0,555,582,5,81,0,0,556,557,10,25,0,0,557,558,5,
48,0,0,558,559,3,74,37,0,559,560,5,49,0,0,560,582,1,0,0,0,561,562,10,24,
0,0,562,563,5,56,0,0,563,564,5,56,0,0,564,565,3,30,15,0,565,567,5,44,0,0,
566,568,3,82,41,0,567,566,1,0,0,0,567,568,1,0,0,0,568,569,1,0,0,0,569,570,
5,45,0,0,570,582,1,0,0,0,571,572,10,23,0,0,572,574,5,44,0,0,573,575,3,82,
41,0,574,573,1,0,0,0,574,575,1,0,0,0,575,576,1,0,0,0,576,582,5,45,0,0,577,
578,10,16,0,0,578,579,5,73,0,0,579,580,5,55,0,0,580,582,5,81,0,0,581,525,
1,0,0,0,581,528,1,0,0,0,581,534,1,0,0,0,581,538,1,0,0,0,581,541,1,0,0,0,
581,544,1,0,0,0,581,547,1,0,0,0,581,550,1,0,0,0,581,553,1,0,0,0,581,556,
1,0,0,0,581,561,1,0,0,0,581,571,1,0,0,0,581,577,1,0,0,0,582,585,1,0,0,0,
583,581,1,0,0,0,583,584,1,0,0,0,584,75,1,0,0,0,585,583,1,0,0,0,586,589,3,
74,37,0,587,589,5,28,0,0,588,586,1,0,0,0,588,587,1,0,0,0,589,590,1,0,0,0,
590,593,5,72,0,0,591,594,3,74,37,0,592,594,3,4,2,0,593,591,1,0,0,0,593,592,
1,0,0,0,594,77,1,0,0,0,595,600,3,80,40,0,596,597,5,51,0,0,597,599,3,80,40,
0,598,596,1,0,0,0,599,602,1,0,0,0,600,598,1,0,0,0,600,601,1,0,0,0,601,79,
1,0,0,0,602,600,1,0,0,0,603,606,5,81,0,0,604,605,5,56,0,0,605,607,3,84,42,
0,606,604,1,0,0,0,606,607,1,0,0,0,607,610,1,0,0,0,608,609,5,52,0,0,609,611,
3,74,37,0,610,608,1,0,0,0,610,611,1,0,0,0,611,81,1,0,0,0,612,617,3,74,37,
0,613,614,5,51,0,0,614,616,3,74,37,0,615,613,1,0,0,0,616,619,1,0,0,0,617,
615,1,0,0,0,617,618,1,0,0,0,618,83,1,0,0,0,619,617,1,0,0,0,620,621,6,42,
-1,0,621,623,5,81,0,0,622,624,3,30,15,0,623,622,1,0,0,0,623,624,1,0,0,0,
624,626,1,0,0,0,625,627,3,86,43,0,626,625,1,0,0,0,626,627,1,0,0,0,627,630,
1,0,0,0,628,630,5,75,0,0,629,620,1,0,0,0,629,628,1,0,0,0,630,636,1,0,0,0,
631,632,10,1,0,0,632,633,5,74,0,0,633,635,3,84,42,2,634,631,1,0,0,0,635,
638,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,85,1,0,0,0,638,636,1,0,0,
0,639,640,5,48,0,0,640,641,5,49,0,0,641,87,1,0,0,0,642,644,5,48,0,0,643,
645,3,82,41,0,644,643,1,0,0,0,644,645,1,0,0,0,645,646,1,0,0,0,646,647,5,
49,0,0,647,89,1,0,0,0,648,657,5,46,0,0,649,654,3,92,46,0,650,651,5,51,0,
0,651,653,3,92,46,0,652,650,1,0,0,0,653,656,1,0,0,0,654,652,1,0,0,0,654,
655,1,0,0,0,655,658,1,0,0,0,656,654,1,0,0,0,657,649,1,0,0,0,657,658,1,0,
0,0,658,659,1,0,0,0,659,660,5,47,0,0,660,91,1,0,0,0,661,662,5,81,0,0,662,
663,5,56,0,0,663,664,3,74,37,0,664,93,1,0,0,0,665,666,7,7,0,0,666,95,1,0,
0,0,73,99,131,137,143,149,153,158,161,166,170,175,180,185,191,202,212,218,
223,229,240,249,254,259,261,267,273,277,281,286,290,293,298,302,307,311,
321,332,350,357,363,371,383,392,395,400,407,410,414,427,473,477,489,498,
502,508,523,567,574,581,583,588,593,600,606,610,617,623,626,629,636,644,
654,657];


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
                            "'await'", "'typeof'", "'public'", "'private'", 
                            "'protected'", "'queue'", "'js'", "'unless'", 
                            "'repeat'", "'forever'", "'fail'", "'break'", 
                            "'continue'", "'comptime'", "'('", "')'", "'{'", 
                            "'}'", "'['", "']'", "';'", "','", "'='", "'+='", 
                            "'-='", "'.'", "':'", "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'<'", "'>'", "'<='", "'>='", "'=='", 
                            "'!='", "'&&'", "'||'", "'!'", "'|>'", "'=>'", 
                            "'?'", "'|'", "'null'" ];
    static symbolicNames = [ null, "RegexLiteral", "FN", "LET", "VAR", "CONST", 
                             "DEFER", "IF", "ELSE", "RETURN", "CLASS", "EXTENDS", 
                             "IMPORT", "EXPORT", "FROM", "TRY", "CATCH", 
                             "FINALLY", "NEW", "FOR", "WHILE", "THIS", "STRUCT", 
                             "ENUM", "INTERFACE", "AS", "TYPE", "MATCH", 
                             "DEFAULT", "ASYNC", "AWAIT", "TYPEOF", "PUBLIC", 
                             "PRIVATE", "PROTECTED", "QUEUE", "JS", "UNLESS", 
                             "REPEAT", "FOREVER", "FAIL", "BREAK", "CONTINUE", 
                             "COMPTIME", "OpenParen", "CloseParen", "OpenBrace", 
                             "CloseBrace", "OpenBracket", "CloseBracket", 
                             "SemiColon", "Comma", "Assign", "PlusAssign", 
                             "MinusAssign", "Dot", "COLON", "Plus", "Minus", 
                             "Multiply", "Divide", "Modulus", "LessThan", 
                             "MoreThan", "LessEqual", "MoreEqual", "Equals_", 
                             "NotEquals", "AND", "OR", "NOT", "Pipe", "Arrow", 
                             "Question", "UnionSep", "NullLiteral", "BooleanLiteral", 
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
                         "comptimeStmt", "comptimeVarDecl", "expression", 
                         "matchArm", "formalParameterList", "parameter", 
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
    	case 37:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 42:
    	    		return this.type_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 20);
    		case 1:
    			return this.precpred(this._ctx, 18);
    		case 2:
    			return this.precpred(this._ctx, 17);
    		case 3:
    			return this.precpred(this._ctx, 13);
    		case 4:
    			return this.precpred(this._ctx, 12);
    		case 5:
    			return this.precpred(this._ctx, 11);
    		case 6:
    			return this.precpred(this._ctx, 10);
    		case 7:
    			return this.precpred(this._ctx, 9);
    		case 8:
    			return this.precpred(this._ctx, 26);
    		case 9:
    			return this.precpred(this._ctx, 25);
    		case 10:
    			return this.precpred(this._ctx, 24);
    		case 11:
    			return this.precpred(this._ctx, 23);
    		case 12:
    			return this.precpred(this._ctx, 16);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    type_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 13:
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3992762110) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 90111) !== 0) || ((((_la - 70)) & ~0x1f) === 0 && ((1 << (_la - 70)) & 4065) !== 0)) {
	            this.state = 96;
	            this.statement();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
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
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.varDecl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 106;
	            this.typeAlias();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 107;
	            this.functionDecl();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 108;
	            this.classDecl();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 109;
	            this.structDecl();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 110;
	            this.enumDecl();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 111;
	            this.interfaceDecl();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 112;
	            this.importStmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 113;
	            this.exportStmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 114;
	            this.deferStmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 115;
	            this.ifStatement();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 116;
	            this.tryStatement();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 117;
	            this.forStatement();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 118;
	            this.whileStatement();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 119;
	            this.returnStatement();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 120;
	            this.expressionStatement();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 121;
	            this.queueStmt();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 122;
	            this.jsBlock();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 123;
	            this.unlessStmt();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 124;
	            this.repeatStmt();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 125;
	            this.foreverStmt();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 126;
	            this.failStmt();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 127;
	            this.breakStmt();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 128;
	            this.continueStmt();
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 129;
	            this.comptimeStmt();
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 130;
	            this.comptimeVarDecl();
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
	        this.state = 133;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3992762110) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 90111) !== 0) || ((((_la - 70)) & ~0x1f) === 0 && ((1 << (_la - 70)) & 4065) !== 0)) {
	            this.state = 134;
	            this.statement();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 140;
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
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 142;
	            this.modifier();
	        }

	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 56) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 146;
	        this.match(ZScriptParser.Identifier);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===56) {
	            this.state = 147;
	            this.match(ZScriptParser.COLON);
	            this.state = 148;
	            this.type(0);
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 151;
	            this.match(ZScriptParser.Assign);
	            this.state = 152;
	            this.expression(0);
	        }

	        this.state = 155;
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
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 157;
	            this.modifier();
	        }

	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 160;
	            this.match(ZScriptParser.ASYNC);
	        }

	        this.state = 163;
	        this.match(ZScriptParser.FN);
	        this.state = 164;
	        this.match(ZScriptParser.Identifier);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 165;
	            this.typeParameters();
	        }

	        this.state = 168;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===81) {
	            this.state = 169;
	            this.formalParameterList();
	        }

	        this.state = 172;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===56) {
	            this.state = 173;
	            this.match(ZScriptParser.COLON);
	            this.state = 174;
	            this.type(0);
	        }

	        this.state = 177;
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
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 179;
	            this.modifier();
	        }

	        this.state = 182;
	        this.match(ZScriptParser.STRUCT);
	        this.state = 183;
	        this.match(ZScriptParser.Identifier);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 184;
	            this.typeParameters();
	        }

	        this.state = 187;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===81) {
	            this.state = 188;
	            this.structField();
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 194;
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
	        this.state = 196;
	        this.match(ZScriptParser.Identifier);
	        this.state = 197;
	        this.match(ZScriptParser.COLON);
	        this.state = 198;
	        this.type(0);
	        this.state = 199;
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
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 201;
	            this.modifier();
	        }

	        this.state = 204;
	        this.match(ZScriptParser.ENUM);
	        this.state = 205;
	        this.match(ZScriptParser.Identifier);
	        this.state = 206;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 207;
	        this.match(ZScriptParser.Identifier);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 208;
	            this.match(ZScriptParser.Comma);
	            this.state = 209;
	            this.match(ZScriptParser.Identifier);
	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 215;
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
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 217;
	            this.modifier();
	        }

	        this.state = 220;
	        this.match(ZScriptParser.INTERFACE);
	        this.state = 221;
	        this.match(ZScriptParser.Identifier);
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 222;
	            this.typeParameters();
	        }

	        this.state = 225;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===81) {
	            this.state = 226;
	            this.interfaceField();
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 232;
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
	        this.state = 234;
	        this.match(ZScriptParser.Identifier);
	        this.state = 235;
	        this.match(ZScriptParser.COLON);
	        this.state = 236;
	        this.type(0);
	        this.state = 237;
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
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 239;
	            this.modifier();
	        }

	        this.state = 242;
	        this.match(ZScriptParser.TYPE);
	        this.state = 243;
	        this.match(ZScriptParser.Identifier);
	        this.state = 244;
	        this.match(ZScriptParser.Assign);
	        this.state = 245;
	        this.type(0);
	        this.state = 246;
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
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 248;
	            this.modifier();
	        }

	        this.state = 251;
	        this.match(ZScriptParser.CLASS);
	        this.state = 252;
	        this.match(ZScriptParser.Identifier);
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 253;
	            this.typeParameters();
	        }

	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 256;
	            this.match(ZScriptParser.EXTENDS);
	            this.state = 257;
	            this.match(ZScriptParser.Identifier);
	            this.state = 259;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 258;
	                this.typeArguments();
	            }

	        }

	        this.state = 263;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 536870972) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0) || _la===81) {
	            this.state = 264;
	            this.classElement();
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 270;
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
	        this.state = 311;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	                this.state = 272;
	                this.modifier();
	            }

	            this.state = 275;
	            this.match(ZScriptParser.Identifier);
	            this.state = 277;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 276;
	                this.typeParameters();
	            }

	            this.state = 279;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 281;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===81) {
	                this.state = 280;
	                this.formalParameterList();
	            }

	            this.state = 283;
	            this.match(ZScriptParser.CloseParen);
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 284;
	                this.match(ZScriptParser.COLON);
	                this.state = 285;
	                this.type(0);
	            }

	            this.state = 288;
	            this.block();
	            break;

	        case 2:
	            localctx = new ClassMethodWithFnContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	                this.state = 289;
	                this.modifier();
	            }

	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 292;
	                this.match(ZScriptParser.ASYNC);
	            }

	            this.state = 295;
	            this.match(ZScriptParser.FN);
	            this.state = 296;
	            this.match(ZScriptParser.Identifier);
	            this.state = 298;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 297;
	                this.typeParameters();
	            }

	            this.state = 300;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 302;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===81) {
	                this.state = 301;
	                this.formalParameterList();
	            }

	            this.state = 304;
	            this.match(ZScriptParser.CloseParen);
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 305;
	                this.match(ZScriptParser.COLON);
	                this.state = 306;
	                this.type(0);
	            }

	            this.state = 309;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 310;
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
	        this.state = 313;
	        _la = this._input.LA(1);
	        if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0))) {
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
	        this.state = 315;
	        this.match(ZScriptParser.LessThan);
	        this.state = 316;
	        this.match(ZScriptParser.Identifier);
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 317;
	            this.match(ZScriptParser.Comma);
	            this.state = 318;
	            this.match(ZScriptParser.Identifier);
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 324;
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
	        this.state = 326;
	        this.match(ZScriptParser.LessThan);
	        this.state = 327;
	        this.type(0);
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 328;
	            this.match(ZScriptParser.Comma);
	            this.state = 329;
	            this.type(0);
	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 335;
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
	        this.state = 350;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 337;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 338;
	            this.match(ZScriptParser.OpenBrace);
	            this.state = 339;
	            this.importItems();
	            this.state = 340;
	            this.match(ZScriptParser.CloseBrace);
	            this.state = 341;
	            this.match(ZScriptParser.FROM);
	            this.state = 342;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 343;
	            this.match(ZScriptParser.SemiColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 345;
	            this.match(ZScriptParser.IMPORT);
	            this.state = 346;
	            this.match(ZScriptParser.Identifier);
	            this.state = 347;
	            this.match(ZScriptParser.FROM);
	            this.state = 348;
	            this.match(ZScriptParser.StringLiteral);
	            this.state = 349;
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
	        this.state = 352;
	        this.importItem();
	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 353;
	            this.match(ZScriptParser.Comma);
	            this.state = 354;
	            this.importItem();
	            this.state = 359;
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
	        this.state = 360;
	        this.match(ZScriptParser.Identifier);
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 361;
	            this.match(ZScriptParser.AS);
	            this.state = 362;
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
	        this.state = 365;
	        this.match(ZScriptParser.EXPORT);
	        this.state = 371;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 366;
	            this.varDecl();
	            break;

	        case 2:
	            this.state = 367;
	            this.functionDecl();
	            break;

	        case 3:
	            this.state = 368;
	            this.classDecl();
	            break;

	        case 4:
	            this.state = 369;
	            this.structDecl();
	            break;

	        case 5:
	            this.state = 370;
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
	        this.state = 373;
	        this.match(ZScriptParser.DEFER);
	        this.state = 374;
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
	        this.state = 376;
	        this.match(ZScriptParser.IF);
	        this.state = 377;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 378;
	        this.expression(0);
	        this.state = 379;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 380;
	        this.statement();
	        this.state = 383;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        if(la_===1) {
	            this.state = 381;
	            this.match(ZScriptParser.ELSE);
	            this.state = 382;
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
	        this.state = 385;
	        this.match(ZScriptParser.TRY);
	        this.state = 386;
	        this.block();
	        this.state = 387;
	        this.match(ZScriptParser.CATCH);
	        this.state = 395;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 388;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 389;
	            this.match(ZScriptParser.Identifier);
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 390;
	                this.match(ZScriptParser.COLON);
	                this.state = 391;
	                this.type(0);
	            }

	            this.state = 394;
	            this.match(ZScriptParser.CloseParen);
	        }

	        this.state = 397;
	        this.block();
	        this.state = 400;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 398;
	            this.match(ZScriptParser.FINALLY);
	            this.state = 399;
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
	        this.state = 402;
	        this.match(ZScriptParser.FOR);
	        this.state = 403;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 407;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	        case 5:
	        case 32:
	        case 33:
	        case 34:
	            this.state = 404;
	            this.varDecl();
	            break;
	        case 1:
	        case 18:
	        case 21:
	        case 27:
	        case 30:
	        case 31:
	        case 44:
	        case 46:
	        case 48:
	        case 70:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	            this.state = 405;
	            this.expressionStatement();
	            break;
	        case 50:
	            this.state = 406;
	            this.match(ZScriptParser.SemiColon);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 410;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3357802498) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	            this.state = 409;
	            this.expression(0);
	        }

	        this.state = 412;
	        this.match(ZScriptParser.SemiColon);
	        this.state = 414;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3357802498) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	            this.state = 413;
	            this.expression(0);
	        }

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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ZScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
	        this.match(ZScriptParser.WHILE);
	        this.state = 420;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 421;
	        this.expression(0);
	        this.state = 422;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 423;
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
	        this.state = 425;
	        this.match(ZScriptParser.RETURN);
	        this.state = 427;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3357802498) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	            this.state = 426;
	            this.expression(0);
	        }

	        this.state = 429;
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
	        this.state = 431;
	        this.expression(0);
	        this.state = 432;
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
	        this.state = 434;
	        this.match(ZScriptParser.QUEUE);
	        this.state = 435;
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
	        this.state = 437;
	        this.match(ZScriptParser.JS);
	        this.state = 438;
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
	        this.state = 440;
	        this.match(ZScriptParser.UNLESS);
	        this.state = 441;
	        this.match(ZScriptParser.OpenParen);
	        this.state = 442;
	        this.expression(0);
	        this.state = 443;
	        this.match(ZScriptParser.CloseParen);
	        this.state = 444;
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
	        this.state = 446;
	        this.match(ZScriptParser.REPEAT);
	        this.state = 447;
	        this.expression(0);
	        this.state = 448;
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
	        this.state = 450;
	        this.match(ZScriptParser.FOREVER);
	        this.state = 451;
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
	        this.state = 453;
	        this.match(ZScriptParser.FAIL);
	        this.state = 454;
	        this.expression(0);
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



	breakStmt() {
	    let localctx = new BreakStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ZScriptParser.RULE_breakStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this.match(ZScriptParser.BREAK);
	        this.state = 458;
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
	        this.state = 460;
	        this.match(ZScriptParser.CONTINUE);
	        this.state = 461;
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



	comptimeStmt() {
	    let localctx = new ComptimeStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, ZScriptParser.RULE_comptimeStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.match(ZScriptParser.COMPTIME);
	        this.state = 464;
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



	comptimeVarDecl() {
	    let localctx = new ComptimeVarDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ZScriptParser.RULE_comptimeVarDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 466;
	        this.match(ZScriptParser.COMPTIME);
	        this.state = 467;
	        this.varDecl();
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
	    const _startState = 74;
	    this.enterRecursionRule(localctx, 74, ZScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NewExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 470;
	            this.match(ZScriptParser.NEW);
	            this.state = 471;
	            this.expression(0);
	            this.state = 473;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 472;
	                this.typeArguments();
	            }

	            this.state = 475;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3357802498) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	                this.state = 476;
	                this.arguments();
	            }

	            this.state = 479;
	            this.match(ZScriptParser.CloseParen);
	            break;

	        case 2:
	            localctx = new AwaitExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 481;
	            this.match(ZScriptParser.AWAIT);
	            this.state = 482;
	            this.expression(21);
	            break;

	        case 3:
	            localctx = new MatchExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 483;
	            this.match(ZScriptParser.MATCH);
	            this.state = 484;
	            this.expression(0);
	            this.state = 485;
	            this.match(ZScriptParser.OpenBrace);
	            this.state = 489;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3626237954) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	                this.state = 486;
	                this.matchArm();
	                this.state = 491;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 492;
	            this.match(ZScriptParser.CloseBrace);
	            break;

	        case 4:
	            localctx = new LambdaExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 494;
	            this.match(ZScriptParser.Identifier);
	            this.state = 495;
	            this.match(ZScriptParser.Arrow);
	            this.state = 498;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 496;
	                this.expression(0);
	                break;

	            case 2:
	                this.state = 497;
	                this.block();
	                break;

	            }
	            break;

	        case 5:
	            localctx = new LambdaExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 500;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 502;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===81) {
	                this.state = 501;
	                this.formalParameterList();
	            }

	            this.state = 504;
	            this.match(ZScriptParser.CloseParen);
	            this.state = 505;
	            this.match(ZScriptParser.Arrow);
	            this.state = 508;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 506;
	                this.expression(0);
	                break;

	            case 2:
	                this.state = 507;
	                this.block();
	                break;

	            }
	            break;

	        case 6:
	            localctx = new UnaryOpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 510;
	            this.match(ZScriptParser.NOT);
	            this.state = 511;
	            this.expression(8);
	            break;

	        case 7:
	            localctx = new TypeofExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 512;
	            this.match(ZScriptParser.TYPEOF);
	            this.state = 513;
	            this.expression(7);
	            break;

	        case 8:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 514;
	            this.match(ZScriptParser.Identifier);
	            break;

	        case 9:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 515;
	            this.literal();
	            break;

	        case 10:
	            localctx = new ArrayExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 516;
	            this.arrayLiteral();
	            break;

	        case 11:
	            localctx = new ObjectExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 517;
	            this.objectLiteral();
	            break;

	        case 12:
	            localctx = new ThisExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 518;
	            this.match(ZScriptParser.THIS);
	            break;

	        case 13:
	            localctx = new ParenthesizedExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 519;
	            this.match(ZScriptParser.OpenParen);
	            this.state = 520;
	            this.expression(0);
	            this.state = 521;
	            this.match(ZScriptParser.CloseParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 583;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,59,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 581;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PipeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 525;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 526;
	                    this.match(ZScriptParser.Pipe);
	                    this.state = 527;
	                    this.expression(21);
	                    break;

	                case 2:
	                    localctx = new TernaryExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 528;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 529;
	                    this.match(ZScriptParser.Question);
	                    this.state = 530;
	                    this.expression(0);
	                    this.state = 531;
	                    this.match(ZScriptParser.COLON);
	                    this.state = 532;
	                    this.expression(19);
	                    break;

	                case 3:
	                    localctx = new NullishCoalescingExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 534;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 535;
	                    this.match(ZScriptParser.Question);
	                    this.state = 536;
	                    this.match(ZScriptParser.Question);
	                    this.state = 537;
	                    this.expression(18);
	                    break;

	                case 4:
	                    localctx = new AssignmentExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 538;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 539;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 540;
	                    this.expression(13);
	                    break;

	                case 5:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 541;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 542;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 543;
	                    this.expression(13);
	                    break;

	                case 6:
	                    localctx = new BinaryOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 544;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 545;
	                    _la = this._input.LA(1);
	                    if(!(_la===57 || _la===58)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 546;
	                    this.expression(12);
	                    break;

	                case 7:
	                    localctx = new CompareOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 547;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 548;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 63) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 549;
	                    this.expression(11);
	                    break;

	                case 8:
	                    localctx = new LogicalOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 550;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 551;
	                    _la = this._input.LA(1);
	                    if(!(_la===68 || _la===69)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 552;
	                    this.expression(10);
	                    break;

	                case 9:
	                    localctx = new MemberIndexContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 553;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 554;
	                    this.match(ZScriptParser.Dot);
	                    this.state = 555;
	                    this.match(ZScriptParser.Identifier);
	                    break;

	                case 10:
	                    localctx = new ArrayAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 556;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 557;
	                    this.match(ZScriptParser.OpenBracket);
	                    this.state = 558;
	                    this.expression(0);
	                    this.state = 559;
	                    this.match(ZScriptParser.CloseBracket);
	                    break;

	                case 11:
	                    localctx = new GenericCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 561;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 562;
	                    this.match(ZScriptParser.COLON);
	                    this.state = 563;
	                    this.match(ZScriptParser.COLON);
	                    this.state = 564;
	                    this.typeArguments();
	                    this.state = 565;
	                    this.match(ZScriptParser.OpenParen);
	                    this.state = 567;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3357802498) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	                        this.state = 566;
	                        this.arguments();
	                    }

	                    this.state = 569;
	                    this.match(ZScriptParser.CloseParen);
	                    break;

	                case 12:
	                    localctx = new CallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 571;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 572;
	                    this.match(ZScriptParser.OpenParen);
	                    this.state = 574;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3357802498) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	                        this.state = 573;
	                        this.arguments();
	                    }

	                    this.state = 576;
	                    this.match(ZScriptParser.CloseParen);
	                    break;

	                case 13:
	                    localctx = new OptionalChainingExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_expression);
	                    this.state = 577;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 578;
	                    this.match(ZScriptParser.Question);
	                    this.state = 579;
	                    this.match(ZScriptParser.Dot);
	                    this.state = 580;
	                    this.match(ZScriptParser.Identifier);
	                    break;

	                } 
	            }
	            this.state = 585;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,59,this._ctx);
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
	    this.enterRule(localctx, 76, ZScriptParser.RULE_matchArm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 588;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 18:
	        case 21:
	        case 27:
	        case 30:
	        case 31:
	        case 44:
	        case 46:
	        case 48:
	        case 70:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	            this.state = 586;
	            this.expression(0);
	            break;
	        case 28:
	            this.state = 587;
	            this.match(ZScriptParser.DEFAULT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 590;
	        this.match(ZScriptParser.Arrow);
	        this.state = 593;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 591;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 592;
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
	    this.enterRule(localctx, 78, ZScriptParser.RULE_formalParameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 595;
	        this.parameter();
	        this.state = 600;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 596;
	            this.match(ZScriptParser.Comma);
	            this.state = 597;
	            this.parameter();
	            this.state = 602;
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
	    this.enterRule(localctx, 80, ZScriptParser.RULE_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 603;
	        this.match(ZScriptParser.Identifier);
	        this.state = 606;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===56) {
	            this.state = 604;
	            this.match(ZScriptParser.COLON);
	            this.state = 605;
	            this.type(0);
	        }

	        this.state = 610;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 608;
	            this.match(ZScriptParser.Assign);
	            this.state = 609;
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
	    this.enterRule(localctx, 82, ZScriptParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 612;
	        this.expression(0);
	        this.state = 617;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 613;
	            this.match(ZScriptParser.Comma);
	            this.state = 614;
	            this.expression(0);
	            this.state = 619;
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
	    const _startState = 84;
	    this.enterRecursionRule(localctx, 84, ZScriptParser.RULE_type, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 629;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 81:
	            this.state = 621;
	            this.match(ZScriptParser.Identifier);
	            this.state = 623;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
	            if(la_===1) {
	                this.state = 622;
	                this.typeArguments();

	            }
	            this.state = 626;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	            if(la_===1) {
	                this.state = 625;
	                this.typeSuffix();

	            }
	            break;
	        case 75:
	            this.state = 628;
	            this.match(ZScriptParser.NullLiteral);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 636;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,69,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TypeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, ZScriptParser.RULE_type);
	                this.state = 631;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 632;
	                this.match(ZScriptParser.UnionSep);
	                this.state = 633;
	                this.type(2); 
	            }
	            this.state = 638;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,69,this._ctx);
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
	    this.enterRule(localctx, 86, ZScriptParser.RULE_typeSuffix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 639;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 640;
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
	    this.enterRule(localctx, 88, ZScriptParser.RULE_arrayLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 642;
	        this.match(ZScriptParser.OpenBracket);
	        this.state = 644;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3357802498) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 2214592533) !== 0) || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 63) !== 0)) {
	            this.state = 643;
	            this.arguments();
	        }

	        this.state = 646;
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
	    this.enterRule(localctx, 90, ZScriptParser.RULE_objectLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 648;
	        this.match(ZScriptParser.OpenBrace);
	        this.state = 657;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===81) {
	            this.state = 649;
	            this.property();
	            this.state = 654;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===51) {
	                this.state = 650;
	                this.match(ZScriptParser.Comma);
	                this.state = 651;
	                this.property();
	                this.state = 656;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 659;
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
	    this.enterRule(localctx, 92, ZScriptParser.RULE_property);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 661;
	        this.match(ZScriptParser.Identifier);
	        this.state = 662;
	        this.match(ZScriptParser.COLON);
	        this.state = 663;
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
	    this.enterRule(localctx, 94, ZScriptParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 665;
	        _la = this._input.LA(1);
	        if(!(_la===1 || ((((_la - 75)) & ~0x1f) === 0 && ((1 << (_la - 75)) & 63) !== 0))) {
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
ZScriptParser.TYPEOF = 31;
ZScriptParser.PUBLIC = 32;
ZScriptParser.PRIVATE = 33;
ZScriptParser.PROTECTED = 34;
ZScriptParser.QUEUE = 35;
ZScriptParser.JS = 36;
ZScriptParser.UNLESS = 37;
ZScriptParser.REPEAT = 38;
ZScriptParser.FOREVER = 39;
ZScriptParser.FAIL = 40;
ZScriptParser.BREAK = 41;
ZScriptParser.CONTINUE = 42;
ZScriptParser.COMPTIME = 43;
ZScriptParser.OpenParen = 44;
ZScriptParser.CloseParen = 45;
ZScriptParser.OpenBrace = 46;
ZScriptParser.CloseBrace = 47;
ZScriptParser.OpenBracket = 48;
ZScriptParser.CloseBracket = 49;
ZScriptParser.SemiColon = 50;
ZScriptParser.Comma = 51;
ZScriptParser.Assign = 52;
ZScriptParser.PlusAssign = 53;
ZScriptParser.MinusAssign = 54;
ZScriptParser.Dot = 55;
ZScriptParser.COLON = 56;
ZScriptParser.Plus = 57;
ZScriptParser.Minus = 58;
ZScriptParser.Multiply = 59;
ZScriptParser.Divide = 60;
ZScriptParser.Modulus = 61;
ZScriptParser.LessThan = 62;
ZScriptParser.MoreThan = 63;
ZScriptParser.LessEqual = 64;
ZScriptParser.MoreEqual = 65;
ZScriptParser.Equals_ = 66;
ZScriptParser.NotEquals = 67;
ZScriptParser.AND = 68;
ZScriptParser.OR = 69;
ZScriptParser.NOT = 70;
ZScriptParser.Pipe = 71;
ZScriptParser.Arrow = 72;
ZScriptParser.Question = 73;
ZScriptParser.UnionSep = 74;
ZScriptParser.NullLiteral = 75;
ZScriptParser.BooleanLiteral = 76;
ZScriptParser.DecimalLiteral = 77;
ZScriptParser.BigIntLiteral = 78;
ZScriptParser.StringLiteral = 79;
ZScriptParser.TemplateString = 80;
ZScriptParser.Identifier = 81;
ZScriptParser.DOC_COMMENT = 82;
ZScriptParser.LineComment = 83;
ZScriptParser.BlockComment = 84;
ZScriptParser.WhiteSpaces = 85;

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
ZScriptParser.RULE_comptimeStmt = 35;
ZScriptParser.RULE_comptimeVarDecl = 36;
ZScriptParser.RULE_expression = 37;
ZScriptParser.RULE_matchArm = 38;
ZScriptParser.RULE_formalParameterList = 39;
ZScriptParser.RULE_parameter = 40;
ZScriptParser.RULE_arguments = 41;
ZScriptParser.RULE_type = 42;
ZScriptParser.RULE_typeSuffix = 43;
ZScriptParser.RULE_arrayLiteral = 44;
ZScriptParser.RULE_objectLiteral = 45;
ZScriptParser.RULE_property = 46;
ZScriptParser.RULE_literal = 47;

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

	comptimeStmt() {
	    return this.getTypedRuleContext(ComptimeStmtContext,0);
	};

	comptimeVarDecl() {
	    return this.getTypedRuleContext(ComptimeVarDeclContext,0);
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



class ComptimeStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_comptimeStmt;
    }

	COMPTIME() {
	    return this.getToken(ZScriptParser.COMPTIME, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitComptimeStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComptimeVarDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZScriptParser.RULE_comptimeVarDecl;
    }

	COMPTIME() {
	    return this.getToken(ZScriptParser.COMPTIME, 0);
	};

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitComptimeVarDecl(this);
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


class OptionalChainingExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	Question() {
	    return this.getToken(ZScriptParser.Question, 0);
	};

	Dot() {
	    return this.getToken(ZScriptParser.Dot, 0);
	};

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitOptionalChainingExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.OptionalChainingExprContext = OptionalChainingExprContext;

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

class NullishCoalescingExprContext extends ExpressionContext {

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

	Question = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZScriptParser.Question);
	    } else {
	        return this.getToken(ZScriptParser.Question, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitNullishCoalescingExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.NullishCoalescingExprContext = NullishCoalescingExprContext;

class LambdaExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(ZScriptParser.Identifier, 0);
	};

	Arrow() {
	    return this.getToken(ZScriptParser.Arrow, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	OpenParen() {
	    return this.getToken(ZScriptParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(ZScriptParser.CloseParen, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitLambdaExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.LambdaExprContext = LambdaExprContext;

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

class TypeofExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TYPEOF() {
	    return this.getToken(ZScriptParser.TYPEOF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitTypeofExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.TypeofExprContext = TypeofExprContext;

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

class TernaryExprContext extends ExpressionContext {

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

	Question() {
	    return this.getToken(ZScriptParser.Question, 0);
	};

	COLON() {
	    return this.getToken(ZScriptParser.COLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZScriptVisitor ) {
	        return visitor.visitTernaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZScriptParser.TernaryExprContext = TernaryExprContext;

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

	NullLiteral() {
	    return this.getToken(ZScriptParser.NullLiteral, 0);
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

	UnionSep() {
	    return this.getToken(ZScriptParser.UnionSep, 0);
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
ZScriptParser.ComptimeStmtContext = ComptimeStmtContext; 
ZScriptParser.ComptimeVarDeclContext = ComptimeVarDeclContext; 
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
