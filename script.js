// Define the string
const message = "Welcome to JavaScript ES6!";

// Convert the string to lowercase
const lowerCaseMessage = message.toLowerCase();
console.log("Lowercase:", lowerCaseMessage);

// Find the position of the word "JavaScript"
const position = message.indexOf("JavaScript");
console.log("Position of 'JavaScript':", position);

// Replace "JavaScript" with "ES6"
const replacedMessage = message.replace("JavaScript", "ES6");
console.log("Replaced Message:", replacedMessage);


// Filter numbers greater than 10 from an array
const numbers = [3, 6, 9, 12, 15, 18, 21];
const greaterThanTen = numbers.filter(num => num > 10);
console.log("Numbers greater than 10:", greaterThanTen);


// Template literals with string length
const name = "JavaScript";
console.log(`The length of the word '${name}' is ${name.length} characters.`);


// Calculate the total score using reduce()
const scores = [10, 15, 20, 25];
const totalScore = scores.reduce((acc, score) => acc + score, 0);
console.log("Total Score:", totalScore);


// Find product details in products array
const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
  ];
  
  // Find product with name "Phone"
  const phoneProduct = products.find(product => product.name === "Phone");
  console.log("Product with name 'Phone':", phoneProduct);
  
  // Find index of product with id 3
  const tabletIndex = products.findIndex(product => product.id === 3);
  console.log("Index of product with id 3:", tabletIndex);

  
//   Capitalize each item in items array
const items = ["apple", "banana", "cherry"];
const capitalizedItems = items.map(item => item.charAt(0).toUpperCase() + item.slice(1));
console.log("Capitalized Items:", capitalizedItems);


// Function with a default parameter
const greet = (name = "Friend") => `Hello, ${name}!`;
console.log(greet()); // "Hello, Friend!"
console.log(greet("John")); // "Hello, John!"


// Merge arr1 and arr2 using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);


// Check conditions in ages array
const ages = [21, 18, 45, 30];

// Check if all ages are >= 18
const allAdults = ages.every(age => age >= 18);
console.log("All ages are >= 18:", allAdults);

// Check if any age is < 20
const anyBelowTwenty = ages.some(age => age < 20);
console.log("Any age < 20:", anyBelowTwenty);
