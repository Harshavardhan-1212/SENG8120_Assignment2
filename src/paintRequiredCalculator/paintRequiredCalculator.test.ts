import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

  test("area is 0 returns 0 paint needed", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });

  test("throws error for negative area", () => {
    expect(() => paintRequiredCalculator(-1, 10)).toThrow("non negative");
  });

  test("throws error for zero coverage", () => {
    expect(() => paintRequiredCalculator(100, 0)).toThrow("greater than zero");
  });

  test("throws error for negative coverage", () => {
    expect(() => paintRequiredCalculator(100, -10)).toThrow("greater than zero");
  });

  test("calculates fractional result", () => {
    expect(paintRequiredCalculator(45, 8)).toBeCloseTo(5.63, 2);
  });

  test("handles large area and normal coverage", () => {
    expect(paintRequiredCalculator(1000000, 10)).toBe(100000);
  });
  
  test("handles small area and high coverage", () => {
    expect(paintRequiredCalculator(10, 100)).toBe(0.1);
  });

  test("handles floating point precision", () => {
    expect(paintRequiredCalculator(33, 7)).toBeCloseTo(4.71, 2);
  });

  test("returns exactly 1 when area equals coverage", () => {
    expect(paintRequiredCalculator(50, 50)).toBe(1);
  });

});
