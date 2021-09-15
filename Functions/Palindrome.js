const prompt=require('prompt-sync')();

function Palindrome(){
    let num1=parseInt(prompt('Enter the first number: '));
    let num2=parseInt(prompt('Enter the Second Number: '));
    let reverse=0;
    let number=num1;
    while(number!=0){
        let remainder =(number%10);
        reverse=(reverse * 10)+remainder;
        number=Math.floor(number/10);
    }
    switch(reverse){
        case num2:
            console.log(num1 + " and " + num2 + " are Palindrome Numbers");
            break;
        default:
            console.log(num1 + " and " + num2 + " are Non-Palindrome Numbers");
            break;
    }
}

console.log("Give the Two Numbers To Check Palindrome");
console.log(Palindrome());