const promt=require('prompt-sync')();
const n = promt('Enter number: ');

for(let i=2; i<=n; i++){
    if(n % i == 0){
        let count = 0;
        for (let j=1; j<=i; j++){
            let remainder=i % j;
            if(remainder==0){
                count++;
            }
        }
        if(count==2){
            console.log(i);
        }
    }
}