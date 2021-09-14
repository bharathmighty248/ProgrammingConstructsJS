const promt=require('prompt-sync')();
const n = promt('Enter number: ');

let factorial=1;
for (let i=1; i<=n; i++){
    factorial=factorial*i;
}
console.log(n + " Factorial is: " + factorial);