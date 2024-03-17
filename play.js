const name = " dhanush";
let age = 29 ;
const isLoggedIn = true;

age= 24 ;
const aboutPerson =(userName , userAge , userLoggedIn) =>{
    return (`My name is ${userName} and am ${userAge} old , currently i have ${userLoggedIn}`)

}
// console.log(aboutPerson(name , age, isLoggedIn))

const addNumbers = (a,b)=> a+b;
const addOneNumber = a => a+6 ;
console.log(addOneNumber(5));
console.log(addNumbers(1,5));

const productNumber = (b,c)=> b*c;
console.log(productNumber(5,6));


const person ={
    name : "Kuldeep",
    age: 29,
    greet(){
        console.log("this is " ,this.name )
    }
}

console.log(person);
person.greet();



const hobbies = ["sport","cooking"];
// for(let hobby of hobbies){
// console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby : '+hobby));
console.log(hobbies);