let money=100;
let won=0;
let bets=0;
const bet=1;

while(money != 0 && money !=200){
    let game=Math.floor(Math.random()*10)%2;
    switch(game){
        case 0:
            money=money+bet;
            won++;
            bets++;
            break;
        case 1:
            money=money-bet;
            bets++;
            break;
    }
}

console.log("Final Amount: " + money);
console.log("No. of Times Won: " + won);
console.log("No. of Bets Made: " + bets);