//
// Object Destructuring
//

// const person = {
//   name: "Steve",
//   age: 35,
//   location: {
//     city: "Wales",
//     temp: 45
//   }
// };

// const { name: firstName = "Unknown", age } = person;
// //const name = person.name;
// //const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ["1299 S Juniper Street", "Wales", "Wisconsin", "53183"];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [type, small, medium, large] = item;

console.log(`A medium ${type} costs ${medium}.`);
