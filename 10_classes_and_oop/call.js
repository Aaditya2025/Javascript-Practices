/* 
When 'this' keyword refers to global execution context then the value of this is (window object) but if you have node.js environment the it refers to (and empty object {}). 

CALL: Call ho hai apna current execution context kisi aur function ko pass kar deta hai.
*/

function SetUsername(username){
    //complex DB calls 

    this.username = username;    //Every fnc. have their own this and after the function called the execution context of that function will removed.
    console.log("called")
} 

function createUser(username, email, password){
    SetUsername.call(this, username)    //After passing this setusername function do not uses their 'this' keyword it use the createUser this.
    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@fb.com", "chsdh"); 
console.log(chai)