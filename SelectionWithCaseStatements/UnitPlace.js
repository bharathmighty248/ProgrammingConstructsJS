const prompt = require ('prompt-sync')();
var number = parseInt(prompt("Enter Number: "));

switch(number){
    case 1:
        console.log("Units Place")
        break;
    case 10:
        console.log("Tens Place");
        break;
    case 100:
        console.log("Hundreds Place");
        break;
    case 1000:
        console.log("Thousands Place");
        break;
    case 10000:
        console.log("Ten Thousands Place");
        break;
    default:
        console.log("Not Defined");
        break;

}