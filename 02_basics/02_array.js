// Array apne indices ke andar kisi bhi type ke data ko insert kar leta hai jaise abhi ham dekhne wale hain ki kaise ek aaray apne laast indices pe pura ek array ko rakh leta hai. 

const marvel_heros = ["ironman" , "thor", "spiderman"]; 
const dc_heros = ["superman", "flash", "batman"]; 

// marvel_heros.push(dc_heros); 
// console.log(marvel_heros);  //In the result we see that in "marvel_heros" array's 3 index have the dc_heros arrays.
// console.log(marvel_heros[3][1])


// const allHeros = marvel_heros.concat(dc_heros);   //It is better than push but mostly developer use spread operator.
// console.log(allHeros);



const all_new_heros = [...marvel_heros, ...dc_heros];  
// console.log(all_new_heros);              //This (...) is the spread operator which means all values is spread.



// const anotherArray = [1, 2, 3, [4, 5, 6], [2, 8, [1, 9]],3]
// const realanotherArray = anotherArray.flat(Infinity)   //"flat": It will break all the element into a single array element.
// console.log(realanotherArray);



console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));   //To convert value into an array.
console.log(Array.from({name: "Aditya"}));  //We have to tell that of which part you want to create array.


const score1 = 100; 
const score2 = 200; 
const score3 = 300; 

console.log(Array.of(score1, score2, score3));  //"Array.of" : It will also create a new array by using some values.
