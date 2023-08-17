let marks1 = Array(6) //declare only length
console.log(marks1) //no items

let marks2 = new Array(20,40,35,12,37,100) // declare and add values
console.log(marks2)
//or
let marks = [20,40,35,12,37,100]

console.log(marks) //all values
console.log(marks[2]) //35
marks[3] = 14
console.log(marks) //[ 20, 40, 35, 14, 37, 100 ]
console.log(marks.length) //6

marks.push(65)//adding one more element
console.log(marks) ////[ 20, 40, 35, 14, 37, 100, 65 ]
marks.pop()
console.log(marks) ////[ 20, 40, 35, 14, 37, 100 ]
marks.unshift(12) //adding value to the begging
console.log(marks)
console.log(marks.indexOf(100)) //to receive the index of the value
console.log(marks.includes(120))//to check if value is present in the array

submarks = marks2.slice(2,5)//to create a new array from the existing one [ 20, 40, 35, 12, 37, 100 ]
console.log(submarks) //[ 35, 12, 37 ]

let sum = 0
for (let i=0; i<marks2.length; i++)
{
    //console.log(marks2[i]) to print all values separately
    sum = sum + marks2[i]
}
console.log(sum)

let total = marks2.reduce((sum, mark)=>sum+mark,0)
console.log(total)

//crate new array with even numbers of scores array[] --> [ 12, 14, 16 ]
let scores = [12,13,14,16]
let evenScores = []
for (let i=0; i<scores.length; i++)
{
    if(scores[i] %2 ==0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//the same with filter method
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores) //[ 12, 14, 16 ]

//mapping
//create a new array with even numbers multiply 3 ==> [ 12, 14, 16 ] mapping to new one with values [ 36, 42, 48 ]
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)

//find even numbers multiply 3 and sum them
let totalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

//the same in one line
let scores1 = [12,13,14,16]
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)