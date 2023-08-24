//object is collection of properties

let person = {
    firstName:'Nela',
    lastName :'Nowak',
          age: 24,
     fullName: function()
         {
             console.log(this.firstName + this.lastName)
         }
}

console.log(person.fullName()) //need to add brackets for the function
//how to access the properties values
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Maja'
console.log(person.firstName) //update value if exists
person.gender = 'female' //create new if not exists
console.log(person)
delete person.gender //delete property
console.log(person)

console.log('gender' in person)  //to check if property exists in the object

//to check if value exists for any object
for(let key in person)
{
    console.log(person[key]) // print all the values of js object
}