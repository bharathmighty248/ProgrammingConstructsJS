const prompt=require('prompt-sync')();

function degF(){
    let celsius=parseInt(prompt('Enter the Temperature in Deg °C: '));
    var check=(celsius>=0 && celsius<=100);
    switch(check){
        case true:
            return ((celsius* 9/5)+32);
            break;
        case false:
            return console.log("Please Give Correct Input between 0°C to 100°C ")
    }
}

function degC(){
    let fahrenheit=parseInt(prompt('Enter the Temperature in Deg °F: '));
    var check=(fahrenheit>=32 && fahrenheit<=212);
    switch(check){
        case true:
            return ((fahrenheit-32)* 5/9);
            break;
        case false:
            return console.log("Please Give Correct Input between 32°F to 212°F ")
    }
}

console.log("1. DegC to DegF");
console.log("2. DegF to DegC");

let choice=parseInt(prompt('Select Your Conversion Type: '));
switch(choice){
    case 1:
        let resultDegF=degF();
        console.log(resultDegF + "°F");
        break;
    case 2:
        let resultDegC=degC();
        console.log(resultDegC + "°C");
        break;
    default:
        console.log("Invalid Type");
        break;
}