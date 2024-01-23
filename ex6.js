const originalNumbers = [1, 2, 3, 4, 5];

const modifiedNumbers = originalNumbers.map((number, index) =>
  index % 2 === 1 ? number * number : number
);

console.log(modifiedNumbers);
