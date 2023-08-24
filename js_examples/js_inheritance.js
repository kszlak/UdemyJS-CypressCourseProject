/*
one class can inherit the properties, methods of another class
the class which inherits the properties of other is known as subclass (derived class, child class)
the class whose properties are inherited is known as superclass
 */
// https://flexiple.com/javascript/javascript-require-vs-import/
const Person = require("./js_classes")
class Pet extends Person
    {
        get location()
            {
               return "BlueCross"
            }
        constructor(firstName, lastName)
            {
                //call parent class constructor
                super(firstName, lastName)
            }
    }

let pet = new Pet("sam", "san")
pet.fullName()
console.log(pet.location)