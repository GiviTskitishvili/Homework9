const names = ["John Doe", "Alice Smith", "Bob Johnson"];

const initials = names.map((name) => {
  const nameParts = name.split(" "); // Split the name into parts
  return nameParts[0][0] + nameParts[1][0]; // Take the first character of each part
});

console.log(initials);
