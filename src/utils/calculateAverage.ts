/**
 * Calculate the average of an array of numbers
 */
const calculateAverage = (numbers: number[]) => {
  if (numbers.length === 0) return 0;

  const total = numbers.reduce<number>((acc, num) => acc + num, 0);
  return total / numbers.length;
};

export default calculateAverage;
