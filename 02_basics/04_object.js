// Singleton:

// const insta = new Object()
const insta = {}; 

insta.id = "1324aabd"
insta.name = "aditya" 
insta.isloggedIn = false

// console.log(insta);

const regularuser = {
    email : "aditya@gmail.com",
    fullname : {
        username : {
            firstName: "aditya", 
            lastName: "yadav"
        }
    }
}

// console.log(regularuser.fullname.username.lastName);

// Object is also combined such as we combined the two Array in previous array file. 

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);  //"{}": this braces act as target it means except this all values are inserted in the {} Or we can say that the first index which we provide.

console.log(insta); 
console.log(Object.keys(insta))
console.log(Object.values(insta))
console.log(Object.entries(insta))

console.log(insta.hasOwnProperty('isloggedIn'))