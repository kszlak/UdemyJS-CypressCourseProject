let day = 'tuesday'
console.log(day.length)
let subDay = day.slice(0,4)
console.log(subDay) //tues
console.log(day[1]) //u
let splitDay = day.split("s") //will split to 'tue' and 'day' --> [ 'tue', 'day' ]
console.log(splitDay)
console.log(splitDay[1])
console.log(splitDay[1].trim().length) //trim removes white spaces

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) // convert strings to integers
console.log(diff)
diff.toString(date) // convert integers to strings

let newQuote = day + " is Funday"
console.log(newQuote)

let val = newQuote.indexOf("day") //from which index "day" starts
console.log(val)

//how many times 'day' appears in 'tuesday is Funday'
let value = newQuote.indexOf("day")
let count = 0
while(value!== -1) //if not found
{
    count++ //2
    value = newQuote.indexOf("day", value+1)
}
console.log(count)