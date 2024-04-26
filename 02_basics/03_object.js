//singleton
//object.create


//object literals: 

const mysym = Symbol("key1"); 

const JSuser ={
    name : "Aditya", 
    "full name" : "Aditya Yadav", 
    [mysym] : "mykey1",    //we have to use square bracket to act this key as a symbol otherwise it will behave as a string. 
    email : "aditya@gmail.com", 
    id : 234233, 
    location : "Gr. Noida", 
    isLoggedIn : false, 
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JSuser.email);    
// console.log(JSuser["email"]); // Another Method to access the object. 
// console.log(JSuser["full name"])  //We are not able to access it with Dot(.) operator that't why second method is good to access any object keys or value.
// console.log(JSuser[mysym])
// JSuser.email = "yadav@gmail.com" 
// Object.freeze(JSuser);    //After freeze the object will not change. 
// JSuser.email = "yaduvanshi@gmail.com" 
// console.log(JSuser)

JSuser.greeting = function(){
    console.log("Hello Js user"); 
}
JSuser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JSuser.greeting())
console.log(JSuser.greetingtwo())

