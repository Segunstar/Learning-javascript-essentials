// let container = [
//   {
//     name: "Gbemiro",
//     class: "S.S.S 2",
//     age: 16
//   }
//   , {
//     name: "Precious",
//     class: "S.S.S 3",
//     age: 14
//   },
//   {
//     name: "Daniel",
//     class: "S.S.S 1",
//     age: 15
//   },
//   {
//     name: "Ayo ola",
//     class: "J.S.S 3",
//     age: 20
//   }
// ]
// for (let i = 0; i < container.length; i++) {
//   let name = container[i].name;
//   let clas = container[i].class;
//   let age = container[i].age
//   console.log(` This is ${name}, 
//   He is ${age}yrs old and he is in ${clas} class
//   `)
// }
const bruce = { name: "Bruce" }; const madeline = { name: "Madeline" };
// this function isn't associated with any object, yet 
// it's using 'this'! 
function greet() {   return `Hello, I'm ${this.name}!`; }
greet();                // "Hello, I'm !" - 'this' not bound 
greet.call(bruce);      // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
 let x = greet.call(madeline);   // "Hello, I'm Madeline!" - 'this' bound to 'madeline' 
console.log(x);
