const prompt=require('prompt-sync')();
const n = parseInt(prompt('Enter number: '));

function Prime(){
    let count=0;
    for(let i=1; i<=n; i++){
        let remainder=n % i;
        if(remainder==0){
            count++;
        }
    }

    if (count==2){
        return 1;
    }
    else{
        return 0;
    }
}

function PrimePalindrome(){
    let num=Prime();
    switch(num){
        case 1:
            let reverse=0;
            let number=n;
            while(number!=0){
                let remainder=number%10;
                reverse=(reverse*10)+remainder;
                number=Math.floor(number/10);
            }
            if(reverse==n){
                console.log("This is a Prime-Palimdrome Number");
            }
            else{
                console.log("This is a Not a Prime-Palimdrome Number");
            }
            break;
        case 0:
            console.log("This is Even Not a Prime number,Then This is Not a Prime-Palindrome Number");
            break;
    }
}

let primePalindromeCheck=PrimePalindrome();
console.log(primePalindromeCheck);