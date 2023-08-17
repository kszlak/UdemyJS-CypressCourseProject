let fruits = ["banana", "mango", "pomegrante", "apple"]
fruits.sort() //sorting numbers
console.log(fruits) //[ 'apple', 'banana', 'mango', 'pomegrante' ]
console.log(fruits.reverse())

let grants = [12,8,45,90,003]
grants.sort(function(a,b){
    return a-b
})
console.log(grants.sort((a,b)=>a-b )) //bubble sort, sorting integers