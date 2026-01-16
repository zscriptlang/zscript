export class Scope {
  constructor(parent = null) {
    this.parent = parent;
    this.symbols = new Map(); // name -> symbol info
  }

  define(name, info) {
    if (this.symbols.has(name)) {
      throw new Error(`Duplicate symbol '${name}'`);
    }
    this.symbols.set(name, info);
  }

  resolve(name) {
    if (this.symbols.has(name)) {
      return this.symbols.get(name);
    }
    if (this.parent) return this.parent.resolve(name);
    return null;
  }
}
