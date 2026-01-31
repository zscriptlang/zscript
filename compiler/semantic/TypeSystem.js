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
  constructor(params, returnType, isVariadic = false) {
    super(
      `fn(${params.map(p => p.type.toString()).join(", ")}) => ${returnType.toString()}`
    );
    this.params = params; // Array of { name, type }
    this.returnType = returnType;
    this.isVariadic = isVariadic;
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
  }
  isAssignableTo(other) {
    if (other instanceof AnyType) return true;
    if (other instanceof UnionType) {
      return other.types.some(t => this.isAssignableTo(t));
    }
    if (other instanceof NominalType && this.name === other.name && this.kind === other.kind) {
      return true;
    }
    return false;
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

// Any class or struct should be assignable to an interface if it matches the structure
// Let's modify ClassType and StructType to check for interface compatibility
const originalClassIsAssignableTo = ClassType.prototype.isAssignableTo;
ClassType.prototype.isAssignableTo = function(other) {
    if (originalClassIsAssignableTo.call(this, other)) return true;
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
