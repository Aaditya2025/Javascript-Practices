// function loginusermessage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username"); 
//         return ; 
//     }
//     return `${username} just logged in`; 
// }

// console.log(loginusermessage("Aditya"))
// console.log(loginusermessage())  //If argument is not available then in the parameter given value is used as username. 

// function CalculateCartPrice( ...num1 ){    //This is called Rest operator.
//     return num1
// }
// console.log(CalculateCartPrice(200, 300, 400))


// FUNCTION with Object:

const user = {
    username : "aditya",
    price : "999"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price4}`);
}

handleObject(user)