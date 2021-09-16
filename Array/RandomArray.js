let randomArray=new Array();
for(let i=1; i<=10; i++){
    let random=Math.floor(Math.random()*(999-100)+100);
    randomArray.push(random);
}
console.log(randomArray);

let firstmax=0;
let firstmin=999;
randomArray.forEach(element => {
    if(element>=firstmax){
        firstmax=element;
    }
    if(element<=firstmin){
        firstmin=element;
    }
});

for( var i = 0; i < randomArray.length; i++){ 
    
    if ( randomArray[i] === firstmax) { 

        randomArray.splice(i, 1); 
    }
    if ( randomArray[i] === firstmin) { 

        randomArray.splice(i, 1); 
    } 

};
console.log(randomArray);

let secondmax=0;
let secondmin=999;
randomArray.forEach(element => {
    if(element>=secondmax){
        secondmax=element;
    }
    if(element<=secondmin){
        secondmin=element;
    }
});

console.log("2nd Largest num: " + secondmax);
console.log("2nd Smallest num: " + secondmin);
