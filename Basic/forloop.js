// for(let i of cars){
// console.log(i)
// }

// let arr = [1,2,5,7,89,90]

// arr.forEach(element =>{
//     console.log(element);
// });
firstname = "abbc"

//!created object
const person = {
    firstname: "shalini",
    age: 19,
    state: "M.p",
    prints: function(){
        console.log(`my name is ${this.firstname} and age is ${this.age}`);
    }
};
// !added key
person.lastname = "sharma"

// ! accessing values

console.log(person.age);
console.log(person['age'])
// updating the keys
 person.age = 10
// !output
person.prints()

for(let key in person){
    console.log(key,person[key])
}