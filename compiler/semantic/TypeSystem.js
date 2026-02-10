export class Type {
  constructor(name) {
    this.name = name;
  }

  isAssignableTo(other) {
    if (other instanceof AnyType || this instanceof AnyType) return true;
    if (other instanceof UnionType) {
      return other.types.some(t => this.isAssignableTo(t));
    }
    if (this.name === other.name) return true;
    return false;
  }

  toString() {
    return this.name;
  }
}

export class AnyType extends Type {
  constructor() {
    super("any");
  }
  isAssignableTo(other) {
    return true;
  }
}

export class VoidType extends Type {
  constructor() {
    super("void");
  }
}

export class PrimitiveType extends Type {
  constructor(name) {
    super(name);
  }
}

export class ArrayType extends Type {
  constructor(elementType) {
    super(`${elementType.toString()}[]`);
    this.elementType = elementType;
  }
  isAssignableTo(other) {
    if (other instanceof AnyType) return true;
    if (other instanceof UnionType) {
      return other.types.some(t => this.isAssignableTo(t));
    }
    return (
      other instanceof ArrayType &&
      this.elementType.isAssignableTo(other.elementType)
    );
  }
}

export class FunctionType extends Type {
  constructor(params, returnType, isVariadic = false, typeParams = []) {
    super(
      `${typeParams.length ? '<' + typeParams.join(', ') + '>' : ''}fn(${params.map(p => p.type.toString()).join(", ")}) => ${returnType.toString()}`
    );
    this.params = params; // Array of { name, type }
    this.returnType = returnType;
    this.isVariadic = isVariadic;
    this.typeParams = typeParams;
  }
  isAssignableTo(other) {
    if (other instanceof AnyType) return true;
    if (other instanceof UnionType) {
      return other.types.some(t => this.isAssignableTo(t));
    }
    if (!(other instanceof FunctionType)) return false;
    if (this.params.length !== other.params.length) return false;
    for (let i = 0; i < this.params.length; i++) {
      // Parameters are contravariant
      if (!other.params[i].type.isAssignableTo(this.params[i].type))
        return false;
    }
    // Return type is covariant
    return this.returnType.isAssignableTo(other.returnType);
  }
}

export class NominalType extends Type {
  constructor(name, kind) {
    super(name);
    this.kind = kind; // 'struct', 'class', 'enum', 'interface'
    this.typeParams = [];
    this.typeArgs = [];
  }
  isAssignableTo(other) {
    if (other instanceof AnyType) return true;
    if (other instanceof UnionType) {
      return other.types.some(t => this.isAssignableTo(t));
    }
    if (other instanceof NominalType && this.name === other.name && this.kind === other.kind) {
      if (this.typeArgs.length !== other.typeArgs.length) return false;
      for (let i = 0; i < this.typeArgs.length; i++) {
          // Type arguments should ideally be invariant for generic nominal types
          if (this.typeArgs[i].name !== other.typeArgs[i].name) return false;
      }
      return true;
    }
    return false;
  }
  
  toString() {
      if (this.typeArgs.length > 0) {
          return `${this.name}<${this.typeArgs.map(t => t.toString()).join(", ")}>`;
      }
      return this.name;
  }
}

export class StructType extends NominalType {
  constructor(name, fields = {}) {
    super(name, "struct");
    this.fields = fields; // { name: Type }
  }
}

export class ClassType extends NominalType {
  constructor(name, baseClass = null, fields = {}, methods = {}) {
    super(name, "class");
    this.baseClass = baseClass;
    this.fields = fields; // { name: Type }
    this.methods = methods; // { name: FunctionType }
  }
  isAssignableTo(other) {
    if (super.isAssignableTo(other)) return true;
    if (this.baseClass) return this.baseClass.isAssignableTo(other);
    return false;
  }
}

export class EnumType extends NominalType {
  constructor(name, members = []) {
    super(name, "enum");
    this.members = members; // string[]
  }
}

export class InterfaceType extends NominalType {
    constructor(name, fields = {}, methods = {}) {
        super(name, "interface");
        this.fields = fields;
        this.methods = methods;
    }

    isAssignableTo(other) {
        if (super.isAssignableTo(other)) return true;
        // Interface can be assignable to another interface if it has all the members (structural)
        if (other instanceof InterfaceType) {
            for (const [name, type] of Object.entries(other.fields)) {
                if (!this.fields[name] || !this.fields[name].isAssignableTo(type)) return false;
            }
            for (const [name, type] of Object.entries(other.methods)) {
                if (!this.methods[name] || !this.methods[name].isAssignableTo(type)) return false;
            }
            return true;
        }
        return false;
    }
}

export class GenericParameterType extends Type {
    constructor(name) {
        super(name);
    }
    isAssignableTo(other) {
        if (other instanceof AnyType) return true;
        if (other instanceof GenericParameterType && this.name === other.name) return true;
        return false;
    }
}

// Built-in Promise type
export class PromiseType extends NominalType {
    constructor(wrappedType) {
        super("Promise", "class");
        this.typeArgs = [wrappedType];
    }
    isAssignableTo(other) {
        if (other instanceof AnyType) return true;
        if (other instanceof PromiseType) {
            return this.typeArgs[0].isAssignableTo(other.typeArgs[0]);
        }
        return false;
    }
}

// Any class or struct should be assignable to an interface if it matches the structure
const originalClassIsAssignableTo = ClassType.prototype.isAssignableTo;
ClassType.prototype.isAssignableTo = function(other) {
    if (originalClassIsAssignableTo.call(this, other)) return true;
    if (other instanceof InterfaceType) {
        for (const [name, type] of Object.entries(other.fields)) {
            const field = this.fields[name];
            if (!field) return false;
            const fieldType = field.type || field;
            if (!fieldType.isAssignableTo(type)) return false;
        }
        for (const [name, type] of Object.entries(other.methods)) {
            const method = this.methods[name];
            if (!method) return false;
            const methodType = method.type || method;
            if (!methodType.isAssignableTo(type)) return false;
        }
        return true;
    }
    return false;
};

const originalStructIsAssignableTo = StructType.prototype.isAssignableTo;
StructType.prototype.isAssignableTo = function(other) {
    if (originalStructIsAssignableTo.call(this, other)) return true;
    if (other instanceof InterfaceType) {
        for (const [name, type] of Object.entries(other.fields)) {
            if (!this.fields[name] || !this.fields[name].isAssignableTo(type)) return false;
        }
        return true;
    }
    return false;
};

export class UnionType extends Type {
  constructor(types) {
    super(types.map(t => t.toString()).join(" | "));
    this.types = types;
  }
  isAssignableTo(other) {
    if (other instanceof AnyType) return true;
    // (A | B) is assignable to T if A is assignable to T AND B is assignable to T
    return this.types.every(t => t.isAssignableTo(other));
  }
}

export const Primitives = {
  Number: new PrimitiveType("Number"),
  String: new PrimitiveType("String"),
  Boolean: new PrimitiveType("Boolean"),
  Null: new PrimitiveType("null"),
  Any: new AnyType(),
  Void: new VoidType()
};

export function assertAssignable(to, from, message) {
  if (!from.isAssignableTo(to)) {
    throw new Error(
      `${message} (cannot assign ${from.toString()} to ${to.toString()})`
    );
  }
}
