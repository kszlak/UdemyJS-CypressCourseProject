const flag = true
if (!flag) // ! negation operator, can be used only with boolean
{
    console.log("condision ok")
}
else
{
    console.log("condition not ok")
}

let i = 0
while (i<10)
{
i++
    console.log(i)
}

//execute once and then monitor status
do
{
i++
}
while(i<10);
console.log(i)

//when you know how many times you want to proceed
for(let k=0; k<=10; k++)
{
    console.log(k)
}

console.log("*************")
//2 and 5
//from 1 to 100 give me common multiple values
let n = 0 //added to receive only 3 values
for(let h=1; h<=100; h++)
{
    if(h%2==0 && h%5==0)
    {
        n++;
        console.log(h)
        if(n==3)
            break
    }
}
