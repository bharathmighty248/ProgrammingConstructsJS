let heads=0;
let tails=0;

while(heads != 11 && tails != 11){
    let toss=Math.floor(Math.random()*10)%2;
    switch(toss){
        case 0:
            heads=heads+1;
            break;
        case 1:
            tails=tails+1;
            break;
    }
}
console.log("Heads Count: " + heads);
console.log("Tails Count: " + tails);