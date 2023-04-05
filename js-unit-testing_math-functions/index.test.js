// test("add (a, b)", () => {
//   const result = add(a, b);
//   expect(result).toBe(a + b);
// });

// test("subtract(a, b)", () => {
//   const result = subtract(a, b);
//   expect(result).toBe(a - b);
// });

// test("multiply(a, b)", () => {
//   const result = multiply(a, b);
//   expect(result).toBe(a * b);
// });

// test("divide(a, b)", () => {
//   const result = divide(a, b);
//   expect(result).toBe(a / b);
// });

import { add } from "./index.js";

describe("add()", () => {
  it("returns 5 if called with add(2, 3)", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("returns a negative value if the greater argument is negative", () => {
    expect(add(-2, 3)).toBeGreaterThan(0);
    expect(add(2, -3)).toBeLessThan(0);
  });

  it("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

import { subtract } from "./index.js";

describe("subtract()", () => {
  it("returns 5 if called with subtract(15, 10)", () => {
    expect(subtract(15, 10)).toBe(5);
  });

  it("returns a negative value if the second argument is greater than the first one", () => {
    expect(add(2, -3)).toBeLessThan(0);
  });
});

import { multiply } from "./index.js";

describe("multiply()", () => {
  it("returns 8 if called with multiply(2, 4)", () => {
    expect(multiply(2, 4)).toBe(8);
  });

  it("returns a negative value if only the first argument is negative", () => {
    expect(multiply(-2, 3)).toBeLessThan(0);
  });
  it("returns a negative value if only the second argument is negative", () => {
    expect(multiply(2, -3)).toBeLessThan(0);
  });

  it("returns a positive value if called with two negative arguments", () => {
    expect(multiply(-2, -3)).toBeGreaterThan(0);
  });
});

import { divide } from "./index.js";

describe("divide()", () => {
  it("returns 3 if called with divide(9, 3)", () => {
    expect(divide(9, 3)).toBe(3);
  });

  it("returns `You should not do this!` if called with 0 as second argument", () => {
    expect(divide(9, 0)).toBe("You should not do this!");
  });
});
