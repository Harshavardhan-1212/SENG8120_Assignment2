export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {

  if (area < 0) {
    throw new Error("Area must be non negative.");
  }

  if (coveragePerLiter <= 0) {
    throw new Error("Coverage per liter must be greater than zero");
  }

  const paintRequired = area / coveragePerLiter;

  return parseFloat(paintRequired.toFixed(2));
}
