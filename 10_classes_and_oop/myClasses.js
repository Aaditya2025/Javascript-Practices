//ES6
//Concept of Classes in javascript. 
class user {
    constructor(username, email, password){
        this.username = username; 
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

}

const chai = new user("chai", "chai@gmail.com", " 132")
console.log(chai.encryptPassword());