import calculateAverage from "./calculateAverage";

describe("calculateAverage", () => {
  it("calculates the average of an array of numbers", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
  });

  it("returns 0 for an empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });

  it("calculates the average of an array with decimals", () => {
    expect(calculateAverage([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
  });
});
