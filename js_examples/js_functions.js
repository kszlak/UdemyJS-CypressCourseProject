//block of code
//var - global level/ functional level
//let - global level/ block level {}
//const - can't be reinitialized

function add(a,b)
{
    return a+b
}

let sum = add(2,3) //to execute a function
console.log(sum)

//anonymous function, function expressions, without a name
let sumOfIntegers = function(c,d)
{
    return c+d
}
//anonymous function, the shortest way
let sumOfIntegers2 = (c,d)=> c+d
console.log(sumOfIntegers2(2,3))