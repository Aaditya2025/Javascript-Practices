// It follow the properties of shallow copy and in js arryas are resizable. 
// Shallow copy of an object is a copy whose properties share the same references.
// We put any datatype of values in an aarray. 

const arr = [0, 1, 2, 3, 4, 5] ; 
// console.log(arr[1]);

//Method: 2

// arr.push(5); 
// arr.push(234); 
// arr.pop(); 

// arr.unshift(3); 
// arr.shift();

// console.log(arr.includes(3));
// console.log(arr.indexOf(6));

// const newarr = arr.join();  //It will convert the arr into string.

// console.log(arr);
// console.log(typeof newarr);


// SLICE AND SPLICE : Slice will not change the original array but splice will change the original array as we see in the below example.

console.log("A",  arr);
const myn1 = arr.slice(1,3)

console.log(myn1);      // 'slice' will not include the last index value. 
console.log("B", arr); 

const myn2 = arr.splice(1,3)
console.log("C", arr)
console.log(myn2);    //Include last index value. 
