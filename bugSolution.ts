function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Iterate over the array
for (const name of user) {
  console.log(greeter(name));
}

//Solution 2: Handle array explicitly
function greeterArray(people: string[]): string[]{
  return people.map(person => "Hello, " + person);
}
console.log(greeterArray(user));