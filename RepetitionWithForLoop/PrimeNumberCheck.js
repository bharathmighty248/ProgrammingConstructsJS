const promt=require('prompt-sync')();
const n = promt('Enter number: ');

let count=0;
for(let i=1; i<=n; i++){
    let remainder=n % i;
    if(remainder==0){
        count++;
    }
}

if (count==2){
    console.log(n + " is a Prime Number")
}
else{
    console.log(n + " is Not a Prime Number")
}