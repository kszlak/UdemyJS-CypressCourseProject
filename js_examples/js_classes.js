module.exports = class Person
{
    age = 25
    get location()  //the way to have multiple lines of code in the property
    {
        return "Poland"
    }
    //constructor is a method which executes by default when you crate an object (instance) of the class
    constructor(firstName, lastName)
    {
        this.firstName = firstName //instance variable
        this.lastName = lastName
    }
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }
}

//if you want to access property of the class you need to create an object of the class
/*
et person = new Person()
console.log(person.age)
console.log(person.location)
console.log(person.fullName())
*/