export class Scope {
  constructor(parent = null) {
    this.parent = parent;
    this.symbols = new Map(); // name -> symbol info (for values/variables/functions)
    this.types = new Map();   // name -> Type object
  }

  define(name, info) {
    if (this.symbols.has(name)) {
      throw new Error(`Duplicate symbol '${name}'`);
    }
    this.symbols.set(name, info);
  }

  defineType(name, type) {
    if (this.types.has(name)) {
      throw new Error(`Duplicate type '${name}'`);
    }
    this.types.set(name, type);
  }

  resolve(name) {
    if (this.symbols.has(name)) {
      return this.symbols.get(name);
    }
    if (this.parent) return this.parent.resolve(name);
    return null;
  }

  resolveType(name) {
    if (this.types.has(name)) {
      return this.types.get(name);
    }
    if (this.parent) return this.parent.resolveType(name);
    return null;
  }

  // To resolve the Type object itself from the symbol table if it's there
  resolveTypeType(name) {
      const sym = this.resolve(name);
      if (sym && (sym.kind === "type" || sym.kind === "struct" || sym.kind === "class" || sym.kind === "interface")) {
          return sym.type;
      }
      return null;
  }
}
