// // Object destructuring

// const person = {
//   name: 'Clot',
//   age: 27,
//   location: {
//     city: 'New York City',
//     temp: 6696548
//   }
// };

// const { name: firstName = 'Anon', age } = person; // sets default value for name to Anon if name is not present
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-published

// Array destructuring

// const address = ['1299 S Juniper Street', 'Philly', 'PA', '35642389'];

// const [, , state = 'NY'] = address;

// console.log(state);

const item = ['coffee (ice)', '2', '2.50', '2.75'];

const [beverage, , medium] = item

console.log(beverage, medium);