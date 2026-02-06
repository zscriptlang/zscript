grammar ZScript;

/* =======================
   PROGRAM STRUCTURE
======================= */

program
    : statement* EOF
    ;

statement
    : block
    | varDecl
    | typeAlias
    | functionDecl
    | classDecl
    | structDecl
    | enumDecl
    | interfaceDecl
    | importStmt
    | exportStmt
    | deferStmt
    | ifStatement
    | tryStatement
    | forStatement
    | whileStatement
    | returnStatement
    | expressionStatement
	| queueStmt
    | jsBlock
    | unlessStmt
    | repeatStmt
    | foreverStmt
    | failStmt
    | breakStmt
    | continueStmt

    ;

/* =======================
   BLOCKS
======================= */

block
    : OpenBrace statement* CloseBrace
    ;

/* =======================
   DECLARATIONS
======================= */

varDecl
    : (LET | VAR | CONST) Identifier (COLON type)? (Assign expression)? SemiColon
    ;

functionDecl
    : FN Identifier OpenParen formalParameterList? CloseParen (COLON type)? block
    ;

structDecl
    : STRUCT Identifier OpenBrace structField* CloseBrace
    ;

structField
    : Identifier COLON type SemiColon
    ;

enumDecl
    : ENUM Identifier OpenBrace Identifier (Comma Identifier)* CloseBrace
    ;

interfaceDecl
    : INTERFACE Identifier OpenBrace interfaceField* CloseBrace
    ;

interfaceField
    : Identifier COLON type SemiColon
    ;

typeAlias
    : TYPE Identifier Assign type SemiColon
    ;

classDecl
    : CLASS Identifier (EXTENDS Identifier)? OpenBrace classElement* CloseBrace
    ;

classElement
    : Identifier OpenParen formalParameterList? CloseParen (COLON type)? block   # ClassMethod
    | varDecl                                                                  # ClassField
    ;

/* =======================
   MODULE SYSTEM
======================= */

importStmt
    : IMPORT OpenBrace importItems CloseBrace FROM StringLiteral SemiColon
    | IMPORT Identifier FROM StringLiteral SemiColon
    ;

importItems
    : importItem (Comma importItem)*
    ;

importItem
    : Identifier (AS Identifier)?
    ;

exportStmt
    : EXPORT (varDecl | functionDecl | classDecl | structDecl | enumDecl)
    ;

/* =======================
   CONTROL FLOW
======================= */

deferStmt
    : DEFER statement
    ;

ifStatement
    : IF OpenParen expression CloseParen statement (ELSE statement)?
    ;

tryStatement
    : TRY block CATCH (OpenParen Identifier (COLON type)? CloseParen)? block (FINALLY block)?
    ;

forStatement
    : FOR OpenParen (varDecl | expressionStatement | SemiColon)
      expression? SemiColon expression?
      CloseParen statement
    ;

whileStatement
    : WHILE OpenParen expression CloseParen statement
    ;

returnStatement
    : RETURN expression? SemiColon
    ;

expressionStatement
    : expression SemiColon
    ;
	
	
	
queueStmt
  : QUEUE statement
  ;

jsBlock
  : JS block
  ;

unlessStmt
  : UNLESS '(' expression ')' statement
  ;

repeatStmt
  : REPEAT expression statement
  ;

foreverStmt
  : FOREVER statement
  ;

failStmt
  : FAIL expression ';'
  ;
	
breakStmt
  : BREAK ';'
  ;
	
continueStmt
  : CONTINUE ';'
  ;
	

/* =======================
   EXPRESSIONS
======================= */

expression
    : expression Dot Identifier                          # MemberIndex
    | expression OpenBracket expression CloseBracket     # ArrayAccess
    | expression OpenParen arguments? CloseParen         # CallExpression
    | NEW expression OpenParen arguments? CloseParen     # NewExpression
    | expression Pipe expression                         # PipeExpr
    | MATCH expression OpenBrace matchArm* CloseBrace    # MatchExpr
    | <assoc=right> expression (Assign | PlusAssign | MinusAssign) expression # AssignmentExpr
    | expression (Multiply | Divide | Modulus) expression # BinaryOp
    | expression (Plus | Minus) expression               # BinaryOp
    | expression (LessThan | MoreThan | LessEqual | MoreEqual | Equals_ | NotEquals) expression # CompareOp
    | expression (AND | OR) expression                   # LogicalOp
    | NOT expression                                     # UnaryOp
    | Identifier                                         # IdentifierExpr
    | literal                                            # LiteralExpr
    | arrayLiteral                                       # ArrayExpr
    | objectLiteral                                      # ObjectExpr
    | THIS                                               # ThisExpr
    | OpenParen expression CloseParen                    # ParenthesizedExpr
    ;

matchArm
    : (expression | DEFAULT) Arrow (expression | block)
    ;

formalParameterList
    : parameter (Comma parameter)*
    ;

parameter
    : Identifier (COLON type)? (Assign expression)?
    ;

arguments
    : expression (Comma expression)*
    ;

/* =======================
   TYPES
======================= */

type
    : Identifier typeSuffix?
    | type OR type
    ;

typeSuffix
    : OpenBracket CloseBracket   // array type
    ;

/* =======================
   LITERALS
======================= */

arrayLiteral
    : OpenBracket arguments? CloseBracket
    ;

objectLiteral
    : OpenBrace property (Comma property)* CloseBrace
    ;

property
    : Identifier COLON expression
    ;

literal
    : StringLiteral
    | DecimalLiteral
    | BigIntLiteral
    | BooleanLiteral
    | NullLiteral
    | TemplateString
    ;

/* =======================
   KEYWORDS
======================= */

FN:'fn';
LET:'let';
VAR:'var';
CONST:'const';
DEFER:'defer';
IF:'if';
ELSE:'else';
RETURN:'return';
CLASS:'class';
EXTENDS:'extends';
IMPORT:'import';
EXPORT:'export';
FROM:'from';
TRY:'try';
CATCH:'catch';
FINALLY:'finally';
NEW:'new';
FOR:'for';
WHILE:'while';
THIS:'this';
STRUCT:'struct';
ENUM:'enum';
INTERFACE:'interface';
AS:'as';
TYPE : 'type';
MATCH: 'match';
DEFAULT: 'default';
QUEUE   : 'queue';
JS      : 'js';
UNLESS  : 'unless';
REPEAT  : 'repeat';
FOREVER : 'forever';
FAIL    : 'fail';
BREAK : 'break';
CONTINUE : 'continue';


/* =======================
   SYMBOLS
======================= */

OpenParen:'(';
CloseParen:')';
OpenBrace:'{';
CloseBrace:'}';
OpenBracket:'[';
CloseBracket:']';
SemiColon:';';
Comma:',';
Assign:'=';
PlusAssign:'+=';
MinusAssign:'-=';
Dot:'.';
COLON:':';
Plus:'+';
Minus:'-';
Multiply:'*';
Divide:'/';
Modulus:'%';
LessThan:'<';
MoreThan:'>';
LessEqual:'<=';
MoreEqual:'>=';
Equals_:'==';
NotEquals:'!=';
AND:'&&';
OR:'||';
NOT:'!';
Pipe: '|>';
Arrow: '=>';

/* =======================
   LEXER
======================= */

NullLiteral:'null';
BooleanLiteral:'true'|'false';
DecimalLiteral:[0-9]+('.'[0-9]+)?;
BigIntLiteral:[0-9]+'n';
StringLiteral
    : '"' (~["\\\r\n] | '\\' .)* '"'
    | '\'' (~['\\\r\n] | '\\' .)* '\''
    ;
TemplateString:'`' (~[`\\] | '\\' .)* '`';
Identifier:[a-zA-Z_$][a-zA-Z0-9_$]*;

DOC_COMMENT:'///' ~[\r\n]* -> channel(HIDDEN);
LineComment:'//' ~[\r\n]* -> skip;
BlockComment:'/*' .*? '*/' -> skip;
WhiteSpaces:[ \t\r\n]+ -> skip;
