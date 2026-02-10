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
    | comptimeStmt
    | comptimeVarDecl
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
    : modifier? (LET | VAR | CONST) Identifier (COLON type)? (Assign expression)? SemiColon
    ;

functionDecl
    : modifier? ASYNC? FN Identifier typeParameters? OpenParen formalParameterList? CloseParen (COLON type)? block
    ;

structDecl
    : modifier? STRUCT Identifier typeParameters? OpenBrace structField* CloseBrace
    ;

structField
    : Identifier COLON type SemiColon
    ;

enumDecl
    : modifier? ENUM Identifier OpenBrace Identifier (Comma Identifier)* CloseBrace
    ;

interfaceDecl
    : modifier? INTERFACE Identifier typeParameters? OpenBrace interfaceField* CloseBrace
    ;

interfaceField
    : Identifier COLON type SemiColon
    ;

typeAlias
    : modifier? TYPE Identifier Assign type SemiColon
    ;

classDecl
    : modifier? CLASS Identifier typeParameters? (EXTENDS Identifier typeArguments?)? OpenBrace classElement* CloseBrace
    ;

classElement
    : modifier? Identifier typeParameters? OpenParen formalParameterList? CloseParen (COLON type)? block   # ClassMethod
    | modifier? ASYNC? FN Identifier typeParameters? OpenParen formalParameterList? CloseParen (COLON type)? block # ClassMethodWithFn
    | varDecl                                                                                                      # ClassField
    ;

modifier
    : PUBLIC | PRIVATE | PROTECTED
    ;

typeParameters
    : LessThan Identifier (Comma Identifier)* MoreThan
    ;

typeArguments
    : LessThan type (Comma type)* MoreThan
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

comptimeStmt
  : COMPTIME block
  ;

comptimeVarDecl
  : COMPTIME varDecl
  ;

/* =======================
   EXPRESSIONS
======================= */

expression
    : expression Dot Identifier                          # MemberIndex
    | expression OpenBracket expression CloseBracket     # ArrayAccess
    | expression COLON COLON typeArguments OpenParen arguments? CloseParen  # GenericCallExpression
    | expression OpenParen arguments? CloseParen                # CallExpression
    | NEW expression typeArguments? OpenParen arguments? CloseParen     # NewExpression
    | AWAIT expression                                   # AwaitExpr
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
    : Identifier typeArguments? typeSuffix?
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
    : OpenBrace (property (Comma property)*)? CloseBrace
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
    | RegexLiteral
    ;

/* =======================
   KEYWORDS
======================= */

RegexLiteral: '/' (~[/\\\r\n] | '\\' .)+ '/' [a-gimuy]*;
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
ASYNC: 'async';
AWAIT: 'await';
PUBLIC: 'public';
PRIVATE: 'private';
PROTECTED: 'protected';
QUEUE   : 'queue';
JS      : 'js';
UNLESS  : 'unless';
REPEAT  : 'repeat';
FOREVER : 'forever';
FAIL    : 'fail';
BREAK : 'break';
CONTINUE : 'continue';
COMPTIME : 'comptime';


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
LineComment:'//' ~[\r\n]* -> channel(HIDDEN);
BlockComment:'/*' .*? '*/' -> channel(HIDDEN);
WhiteSpaces:[ \t\r\n]+ -> channel(HIDDEN);
