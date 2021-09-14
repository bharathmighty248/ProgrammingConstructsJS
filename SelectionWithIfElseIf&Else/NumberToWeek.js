const prompt = require('prompt-sync')();
const singleDigitNumber = prompt('Enter a number : ');

if(singleDigitNumber == 0)
 {
     console.log("Sunday");
 }
else if(singleDigitNumber == 1)
{
    console.log("Monday");
}
else if(singleDigitNumber == 2)
{
    console.log("Tuesday");
}
else if(singleDigitNumber == 3)
{
    console.log("Wednesday");
}
else if(singleDigitNumber == 4)
{
    console.log("Thursday");
}
else if(singleDigitNumber == 5)
{
    console.log("Friday");
}
else if(singleDigitNumber == 6)
{
    console.log("Saturday");
}
else{
    console.log("wrong input");
}