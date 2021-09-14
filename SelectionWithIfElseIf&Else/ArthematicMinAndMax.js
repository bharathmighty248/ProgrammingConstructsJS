const prompt = require('prompt-sync')();
const a = prompt('Enter 1st number :');
const b = prompt('Enter 2nd number :');
const c = prompt('Enter 3rd number :');

console.log(arithmetic1= a+b*c );
console.log(arithmetic2= a%b+c );
console.log(arithmetic3= c+a/b );
console.log(arithmetic4= a*b+c );

let max =arithmetic1;
if(max<arithmetic2){
    max =arithmetic2;
}
else if(max<arithmetic3){
    max=arithmetic3;
}
else if(max<arithmetic4){
    max =arithmetic4;
}

let min = arithmetic1;
if(min>arithmetic2){
    min =arithmetic2;
}
else if(min>arithmetic3){
    min=arithmetic3;
}
else if(min>arithmetic4){
    min =arithmetic4;
}

console.log("Maximum value = " + max);
console.log("Manimum value = " + min);