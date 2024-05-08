//PROMISES: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//WAY 1: 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()     
        //'resolve()' is directly connected to the '.then' and when we use this then resoleve func. is called.
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// WAY 2: 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// WAY 3: 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
        // resolve ke andar ham data bhi paas kar sakte hai jyada tar object paas karate hai. 
    }, 1000)
})

promiseThree.then(function(user){    
    // resolve ka data iss function ke parameter me aata hai to hamne maan liya uska naam user hai. 
    console.log(user);
})

// WAY 4: 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {         
    //Jo upar hamane username ko access kiya hai usko ham return kar nhi sakte kisi aur varialbe me to usse return karane ke liye ham chaining method ka use karte hai jisme ham firse '.then' ka use kar ke new varialbe me return kara lete hai jo bhi value rahtaa hai upar wale function me.
    console.log(username);
}).catch(function(error){    //Aur jab error return karana rahta hai toh ham '.catch()' ka use karate hain.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))    //Ye Hamesha execute hoga. 


// WAY 5: async await ka use kar sakte hai promises ko accept kar sakte hai. Isame erroe directly handle nhi hota hai. 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {                            //Error ko handle karane ke liye hame try and catch ka use karna chahiye. 
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() //It takes times in conversion that's why we use await. 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))    
//Yaha pe api ka data pahle print ho rha hai aur jo hamane sample code kiya hai promises ko smjhane ke liye baad me ho rha hai isko smjhane ke liye hame next file pe jana hai.  

// promise.all
// yes this is also available, kuch reading aap b kro.