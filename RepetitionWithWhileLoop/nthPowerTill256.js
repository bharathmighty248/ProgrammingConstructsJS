const prompt=require('prompt-sync')();
const n = prompt('Enter number: ')

let power=1;
let result;
while(power<=n && result != 256){
    result=2 ** power;
    console.log("2 ** " + power + " = " + result);
    power++;
}