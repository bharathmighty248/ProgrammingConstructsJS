let randomArray=new Array();
for(let i=1; i<=10; i++){
    let random=Math.floor(Math.random()*(999-100)+100);
    randomArray.push(random);
}
console.log(randomArray);
randomArray.sort();
console.log(randomArray);

console.log("2nd Largest num: " + randomArray[1]);
console.log("2nd Smallest num: " + randomArray[8]);