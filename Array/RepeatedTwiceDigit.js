let repeatingDigitArr = new Array();
for(let i = 1; i<100;i++)
{
    if(i%11==0)
     repeatingDigitArr.push(i);
    }
console.log("numbers which repeats digits twice are : "+repeatingDigitArr);