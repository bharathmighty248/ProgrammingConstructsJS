const prompt=require('prompt-sync')();
console.log("Think a Number Between 1 to 100")

let l=1;
let h=100;
let choice;
let guess=Math.round((l + h )/2);
do{
    console.log("1. Is Your Number Greaterthan " + guess);
    console.log("2. Is Your Number Lessthan " + guess);
    console.log("3. Is Your Number Equal To " + guess);
    
    choice=parseInt(prompt('Select One Option: '));
    switch(choice){
        case 1:
            l=guess;
            guess=Math.round((l + h )/2);
            break;
        case 2:
            h=guess;
            guess=Math.round((l + h )/2);
            break;
        case 3:
            console.log("Your number is: " + guess);
            break;
        default:
            console.log("Invalid Option");
            break;
    }
}while(choice !=3);