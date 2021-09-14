const promt=require('prompt-sync')();
const n = promt('Enter number: ')

let harmonic = 1;
for(let i =2;i<=n;i++)
{
    harmonic = harmonic+(1/i);
}
console.log(n+"th harmonic number = "+ harmonic);