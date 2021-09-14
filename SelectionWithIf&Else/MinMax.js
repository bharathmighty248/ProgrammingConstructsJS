let min = 0;
let max = 0;
for (i=0;i<5;i++)
{
    threeDigitNumber = Math.floor(Math.random()*(999-100)+100);
    console.log(threeDigitNumber); 
    if(i == 0)
    {
    min = threeDigitNumber;
    max = threeDigitNumber;
    }
    else
    {
        if(min>threeDigitNumber)
        {
            min = threeDigitNumber;
        }
        if(max<threeDigitNumber)
        {
            max = threeDigitNumber;
        }
    }
}
console.log("minimum number  is : "+min);
console.log("maximum number  is : "+max);