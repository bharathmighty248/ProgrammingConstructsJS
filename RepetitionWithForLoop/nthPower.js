const prompt=require('prompt-sync')();
const n = prompt('Enter number: ')

for(let i=1;i<=n;i++)
{
    let exp=2**i;
    console.log("2 ** " + i + " = " + exp);
}