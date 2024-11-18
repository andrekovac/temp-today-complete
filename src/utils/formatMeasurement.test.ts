import formatMeasurement from "./formatMeasurement";

describe("formatMeasurement", () => {
  it("formats value with default unit °C", () => {
    expect(formatMeasurement(23.456, "°C")).toBe("23.5°C");
    expect(formatMeasurement(0, "°C")).toBe("0.0°C");
    expect(formatMeasurement(-5, "°C")).toBe("-5.0°C");
  });

  it("formats value with specified unit", () => {
    expect(formatMeasurement(75.678, "°F")).toBe("75.7°F");
    expect(formatMeasurement(300.123, "K")).toBe("300.1K");
    expect(formatMeasurement(10.5, " km/h")).toBe("10.5 km/h");
  });
});
