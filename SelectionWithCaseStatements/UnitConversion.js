const prompt=require('prompt-sync')();
const number = prompt('Enter value: ');

const choice = prompt('1.Feet to Inch \n2.Feet to meter \n3.inches to foot \n4.meter to foot \nEnter Your Conversion Type: ');

switch(choice) {
    case "1": console.log("Given feet " + number + " in inches : "+number*12);
    break;
    case "2": console.log("Given feet " + number + " in meter : "+number*0.3048);
    break;
    case "3": console.log("Given inches " + number + " in feet : "+number*0.0833);
    break;
    case "4": console.log("Given meter " + number + " in feet : "+number*3.28);
    break;
}