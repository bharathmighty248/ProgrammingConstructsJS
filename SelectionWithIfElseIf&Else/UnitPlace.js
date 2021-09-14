const prompt = require('prompt-sync')();
var number = prompt('Enter Number: ');

if(number<10){
    console.log("Units Place");
}
else if(number<100){
    console.log("Tens Place");
}
else if(number<1000){
    console.log("Hundred Place")
}
else if(number<10000){
    console.log("Thousands Place")
}
else{
    console.log("Not Defined");
}