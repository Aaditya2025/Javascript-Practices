let score = "33abc"; 
console.log(typeof score);
console.log(typeof (score)); 

let valueIn = Number(score);
console.log(typeof valueIn)
console.log(valueIn)

//Here we have to make sure that the variable score have not a number but when we try to convert it then it will be converted into number so we have to aware of that thing. 

// CONVERSTION: 
// "33abc" => NaN
// 33 => 33
// true => 1 
// false => 0
// null => 0
// undefined => NaN 