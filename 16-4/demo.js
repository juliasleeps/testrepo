//v1

//function User(name) {
//this.name = name;
//getName = function () {
//console.log(this.name)
//}
//}

//v2

// User.prototype.getName = function () {
//     console.log(this.name)
// }

//v3

class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name)
    }
}

var user1 = new User();
var user2 = new User();


console.log(user1.name === user2.name);
console.log(user1.getName === user2.getName);

// при создании объекта класса свойства ссылаются на парента, а методы создаются свои , поэтому испльзеутся prototype