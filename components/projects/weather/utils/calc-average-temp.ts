export const calcAverageTemp = (min: number[], max: number[]) => {
  return min.map((item: number, i: number) => (item + max[i]) / 2);
};
