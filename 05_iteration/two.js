// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (let greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps : It is a pair of keys and values and all keys are different no two keys are same.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {        //This is the syntax to print map.
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   //for of loop is not work for object and object are not iterable.
//     console.log(key, ':-', value);
// }