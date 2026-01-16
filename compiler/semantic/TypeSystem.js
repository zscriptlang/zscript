export function isAssignable(to, from) {
  if (to === "any" || from === "any") return true;
  if (to === from) return true;

  // union types: A | B
  if (to.includes("|")) {
    return to.split("|").some(t => isAssignable(t.trim(), from));
  }

  return false;
}

export function assertAssignable(to, from, message) {
  if (!isAssignable(to, from)) {
    throw new Error(`${message} (cannot assign ${from} to ${to})`);
  }
}
