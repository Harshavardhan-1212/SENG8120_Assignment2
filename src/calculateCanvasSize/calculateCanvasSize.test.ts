import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })

  test("valid input returns correct area", () => {
    expect(calculateCanvasSize("10", "5")).toBe(50);
  });

  test("non numeric length throws error", () => {
    expect(() => calculateCanvasSize("abc", "5")).toThrow("Invalid input");
  });

  test("non-numeric width throws error", () => {
    expect(() => calculateCanvasSize("10", "xyz")).toThrow("Invalid input");
  });

  test("zero length throws error", () => {
    expect(() => calculateCanvasSize("0", "5")).toThrow("greater than zero");
  });

  test("zero width throws error", () => {
    expect(() => calculateCanvasSize("5", "0")).toThrow("greater than zero");
  });

  test("negative length throws error", () => {
    expect(() => calculateCanvasSize("-10", "5")).toThrow("greater than zero");
  });

  test("negative width throws error", () => {
    expect(() => calculateCanvasSize("10", "-5")).toThrow("greater than zero");
  });

  test("empty string as length throws error", () => {
    expect(() => calculateCanvasSize("", "10")).toThrow("Invalid input");
  });

  test("empty string as width throws error", () => {
    expect(() => calculateCanvasSize("10", "")).toThrow("Invalid input");
  });

  test("very large input values compute correctly", () => {
    expect(calculateCanvasSize("1000000", "2000000")).toBe(2000000000000);
  });

});
