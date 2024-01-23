const names = ["John Doe", "Alice Smith", "Bob Johnson"];

const initials = names.map((name) => {
  const nameParts = name.split(" ");
  return nameParts[0][0] + nameParts[1][0];
});

console.log(initials);
