/* 
    Define a prototype
*/

function Person(first, last, age, sex, nation) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.sex = sex;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
      }
    this.say = function(){
        console.log(this.firstName + " " + this.lastName + " said :Hi, my name's " + this.firstName + " " + this.lastName + " and I'm " + this.sex);
    }
    this.setSex = function(sex){
        this.sex = sex;
        console.log("Changed " + this.firstName + " " + this.lastName + "'s sex to " + sex);
    }
    this.getSex = function(){
        console.log(this.firstName + " " + this.lastName + " is " + this.sex);
    }
}

/* 
    Create objects
*/

const person1 = new Person('Liem', 'Nguyen', 22, 'LGBT', 'Vietnam');
const person2 = new Person('Duc', 'Le', 21, 'Male', 'Vietnam');

/* 
    Invoke objects method
*/

person1.say();
person2.say();

person1.setSex('Male')
person1.getSex();

/* 
    Add method to prototype
*/

Person.prototype.learn = function () {
    console.log(this.firstName + " " + this.lastName + " is learing...");
}

person2.learn();

/* 
    call(), apply(), bind() example
*/

const object = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    city: function(city, nation) {
        return this.firstName + " " + this.lastName + " lives in " + city + ", " + nation; 
    }
}

console.log("Object's name : " + object.fullName.call(person1));

console.log(object.city.call(person1, "Da Nang", "Vietnam"));

console.log(object.city.apply(person2, ["Da Nang", "Vietnam"]));

const person3 = {
    firstName: "Hoang",
    lastName: "Ngo",
    flex: function() {
        console.log(this.firstName + " " + this.lastName + " said: I'm rich");
    }
}

let display = person3.flex.bind(person3);

setTimeout(display, 3000);

