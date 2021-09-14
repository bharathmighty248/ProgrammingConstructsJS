const promt=require('prompt-sync')();
const startRange = promt('Enter Start Range Number: ');
const endRange = promt('Enter End Range Number: ');

for (let i=startRange; i<=endRange; i++){
    let count=0;
    for(let j=1; j<=i; j++){
        let remainder=i % j;
        if(remainder==0){
            count++;
        }
    }
    if(count==2){
        console.log(i);
    }
}