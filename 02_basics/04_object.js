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

// console.log(insta); 
// console.log(Object.keys(insta))
// console.log(Object.values(insta))
// console.log(Object.entries(insta))

// console.log(insta.hasOwnProperty('isloggedIn'))

const course = {
    coursname : "Js in hindi",
    price : "999", 
    courseInstructor: "Aditya"
}
// console.log(course.courseInstructor);
const {courseInstructor : Instructor} = course;  //Now with this syntax we destructure this keys.
console.log(Instructor);   


// Pahale backend se API ki values XML structure me aati thi ab json format me aati hai,
// JSON: Java Script Object Notation. JSON  bhi ek object ki tarah hai bas iska koi naam nhi hai aur iske andar ki keys bhi string ke form me rahati hai. 

// {
//     "name" : "hitesh", 
//      "branch" : "main", 
//      "userId" : "2342avsd"
// }

// sometimes api's are in the form of array and inside array some object will be stored. 

// [
//     {},
//     {},
//     {},
//     {}
// ]

// https://jsonformatter.org/ : Used to format the api values. 