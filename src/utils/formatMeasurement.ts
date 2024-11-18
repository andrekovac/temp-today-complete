/**
 * Format a measurement value with a unit.
 */
const formatMeasurement = (value: number, unit: string = "°C"): string => {
  return `${value.toFixed(1)}${unit}`;
};

export default formatMeasurement;
