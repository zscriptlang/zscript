grammar ZScript;

/* =======================
   PROGRAM STRUCTURE
======================= */

program
    : statement* EOF
    ;

statement
    : block
    | visibility? varDecl
    | visibility? typeAlias
    | visibility? functionDecl
    | visibility? macroDecl
    | visibility? classDecl
    | visibility? structDecl
    | visibility? enumDecl
    | visibility? interfaceDecl
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
    | labeledStatement
    | debuggerStmt
    | SemiColon
    ;

labeledStatement
    : Identifier COLON statement
    ;

debuggerStmt
    : DEBUGGER SemiColon
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
    : varDeclContent
    ;

varDeclContent
    : (LET | VAR | CONST) bindingPattern (COLON type)? (Assign expression)? SemiColon
    ;

bindingPattern
    : anyIdentifier
    | arrayBindingPattern
    | objectBindingPattern
    ;

arrayBindingPattern
    : OpenBracket (bindingPattern (Comma bindingPattern)*)? CloseBracket
    ;

objectBindingPattern
    : OpenBrace (objectBindingElement (Comma objectBindingElement)*)? CloseBrace
    ;

objectBindingElement
    : Identifier (COLON bindingPattern)? (Assign expression)?
    ;

functionDecl
    : ASYNC? FN '*'? anyIdentifier typeParameters? OpenParen formalParameterList? CloseParen (COLON type)? (block | SemiColon)
    ;

macroDecl
    : MACRO anyIdentifier typeParameters? OpenParen formalParameterList? CloseParen (block | SemiColon)
    ;

structDecl
    : STRUCT anyIdentifier typeParameters? OpenBrace structField* CloseBrace
    ;

structField
    : anyIdentifier COLON type SemiColon
    ;

enumDecl
    : ENUM anyIdentifier OpenBrace enumMember (Comma enumMember)* CloseBrace
    ;

enumMember
    : anyIdentifier (Assign (StringLiteral | DecimalLiteral))?
    ;

interfaceDecl
    : INTERFACE anyIdentifier typeParameters? OpenBrace interfaceField* CloseBrace
    ;

interfaceField
    : anyIdentifier COLON type SemiColon
    ;

typeAlias
    : TYPE anyIdentifier Assign type SemiColon
    ;

classDecl
    : CLASS anyIdentifier typeParameters? (EXTENDS anyIdentifier typeArguments?)? OpenBrace classElement* CloseBrace
    ;

classElement
    : visibility? STATIC? (GET | SET)? anyIdentifier typeParameters? OpenParen formalParameterList? CloseParen (COLON type)? (block | SemiColon)   # ClassMethod
    | visibility? STATIC? ASYNC? FN anyIdentifier typeParameters? OpenParen formalParameterList? CloseParen (COLON type)? (block | SemiColon) # ClassMethodWithFn
    | visibility? STATIC? varDeclContent                                                                               # ClassField
    ;

visibility
    : PUBLIC
    | PRIVATE
    | PROTECTED
    ;

typeParameters
    : LessThan anyIdentifier (Comma anyIdentifier)* MoreThan
    ;

typeArguments
    : LessThan type (Comma type)* MoreThan
    ;

/* =======================
   MODULE SYSTEM
======================= */

importStmt
    : IMPORT OpenBrace importItems CloseBrace FROM StringLiteral SemiColon
    | IMPORT (Identifier | '*') (AS Identifier)? FROM StringLiteral SemiColon
    | IMPORT StringLiteral SemiColon
    ;

importItems
    : importItem (Comma importItem)*
    ;

importItem
    : anyIdentifier (AS anyIdentifier)?
    ;

exportStmt
    : EXPORT (varDecl | functionDecl | macroDecl | classDecl | structDecl | enumDecl | typeAlias | interfaceDecl)
    | EXPORT '*' FROM StringLiteral SemiColon
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
    : FOR ASYNC? OpenParen (varDecl | expressionStatement | SemiColon)
      expression? SemiColon expression?
      CloseParen statement
    | FOR ASYNC? OpenParen (LET | VAR | CONST)? bindingPattern (IN | OF) expression CloseParen statement
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
  : COMPTIME varDeclContent
  ;

/* =======================
   EXPRESSIONS
======================= */

expression
    : expression Dot anyIdentifier                          # MemberIndex
    | expression OpenBracket expression CloseBracket     # ArrayAccess
    | expression COLON COLON typeArguments OpenParen arguments? CloseParen  # GenericCallExpression
    | expression '!' OpenParen arguments? CloseParen            # MacroCallExpression
    | expression OpenParen arguments? CloseParen                # CallExpression
    | NEW expression typeArguments? OpenParen arguments? CloseParen     # NewExpression
    | expression Question Dot anyIdentifier                 # OptionalChainingExpr
    | AWAIT expression                                   # AwaitExpr
    | YIELD '*'? expression?                             # YieldExpr
    | TYPEOF expression                                  # TypeofExpr
    | NOT expression                                     # UnaryOp
    | expression (Multiply | Divide | Modulus) expression # BinaryOp
    | expression (Plus | Minus) expression               # BinaryOp
    | expression (LessThan | MoreThan | LessEqual | MoreEqual | Equals_ | NotEquals) expression # CompareOp
    | expression (AND | OR) expression                   # LogicalOp
    | expression Question Question expression             # NullishCoalescingExpr
    | expression Pipe expression                         # PipeExpr
    | expression Question expression COLON expression    # TernaryExpr
    | MATCH expression OpenBrace matchArm* CloseBrace    # MatchExpr
    | anyIdentifier Arrow (expression | block)              # LambdaExpr
    | OpenParen formalParameterList? CloseParen Arrow (expression | block) # LambdaExpr
    | <assoc=right> expression (Assign | PlusAssign | MinusAssign) expression # AssignmentExpr
    | IMPORT OpenParen expression CloseParen             # DynamicImportExpr
    | anyIdentifier                                      # IdentifierExpr
    | literal                                            # LiteralExpr
    | arrayLiteral                                       # ArrayExpr
    | objectLiteral                                       # ObjectExpr
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
    : ELLIPSIS? bindingPattern (COLON type)? (Assign expression)?
    ;

arguments
    : (ELLIPSIS? expression) (Comma (ELLIPSIS? expression))*
    ;

/* =======================
   TYPES
======================= */

anyIdentifier
    : Identifier
    | GET
    | SET
    | UNKNOWN
    | TYPE
    | AS
    | FROM
    | ASYNC
    | AWAIT
    | YIELD
    ;

type
    : anyIdentifier typeArguments? typeSuffix?
    | NullLiteral
    | UNKNOWN
    | literal
    | type UnionSep type
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
    : anyIdentifier COLON expression
    | ELLIPSIS expression
    | anyIdentifier // shorthand
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
YIELD: 'yield';
TYPEOF: 'typeof';
MACRO: 'macro';
QUEUE   : 'queue';
JS      : 'js';
UNLESS  : 'unless';
REPEAT  : 'repeat';
FOREVER : 'forever';
FAIL    : 'fail';
BREAK : 'break';
CONTINUE : 'continue';
GET : 'get';
SET : 'set';
UNKNOWN : 'unknown';
IN : 'in';
OF : 'of';
COMPTIME : 'comptime';
STATIC: 'static';
DEBUGGER: 'debugger';
PUBLIC: 'public';
PRIVATE: 'private';
PROTECTED: 'protected';


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
Question: '?';
UnionSep: '|';
ELLIPSIS: '...';

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
