// const user = { 
//     username: "aditya", 
//     price : 999, 
//     welcomemessage : function(){
//         console.log(`${this.username}, welcome to website.`);

//     }
// }
// user.welcomemessage(); 

//Inside a function this keyword is no used & it is only available for the object. 

//ARROW FUNCTION: 
const book = () =>{
    let username = "aditya"
    console.log(this.username);
}

const addTwo = (num1, num2) => (num1 + num2)   //this is called Implicit return isme automatic return ho jata hai. 
const objectReturn = (num1, num2) => ({username: "aditya"})  //Object ko automatic return karane ke liye hamesha usko paranthesis ke andar rakhna padta hai.

console.log(objectReturn())
console.log(addTwo(3,4))