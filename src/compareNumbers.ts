export function compareNumbers(a: number, b: number): number {
  if (a === b) {
    return 0;
  }

  if (Number.isNaN(a) && Number.isNaN(b)) {
    return 0;
  }

  if (!a && !b) {
    throw new Error("Cannot compare null with undefined values");
  }

  return a - b;
}
