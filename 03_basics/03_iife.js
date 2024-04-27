// Immediately Invoked Function Expressions (IIFE) : Global Scope ke pollution ko hatane ke liye ham iife ka use karate hai. 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    //Semi-colon lagana jaruri hai jab do iife use ho tab. 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
