/*Shopping Exercise
Mary's mother ask her to go to the supermarket shopping and gave her the following shopping list:
Carrots, Meat, Fish , Eggs, Rice, Sugar. For paying Mary received 3 distinct banknotes
1 – Check if Mary can buy all the groceries or not. As an extra you can mention the groceries that
she couldn't buy
2 - Check what are the banknotes that she is going to deliver, and the money she will receive
3 – Consider the promotion of the Eggs having a 10% discount on the price
4 – In case Mary bought everything, her mother told her she could receive 5% of the remaining
money. Calculate the money that Mary received
*/

const itemsList = [`Carrots`, `Meat`, `Fish` , `Eggs`, `Rice`, `Sugar`];
const banknotes = [20, 20, 20];

let price_Carrots = 10;
let price_Meat = 10;
let price_Fish = 10;
let price_Eggs = 5;
let price_Rice = 5;
let price_Sugar = 5;

let discount_Eggs = price_Eggs - (price_Eggs * 0.10);  

    console.log(itemsList[0]+`:`+` `+`${price_Carrots}`+` `+`€`);
    console.log(itemsList[1]+`:`+` `+`${price_Meat}`+` `+ `€`);
    console.log(itemsList[2]+`:`+` `+`${price_Fish}`+` `+ `€`);
    console.log(itemsList[4]+`:`+` `+`${price_Rice}`+` `+ `€`);
    console.log(itemsList[5]+`:`+` `+`${price_Sugar}`+` `+ `€`); 
    console.log(itemsList[3]+`:`+` `+`${discount_Eggs}`+` `+ `€`);
  
    
let totalList = price_Carrots+price_Meat+price_Fish+discount_Eggs+price_Rice+price_Sugar;
    console.log(`Total List =`+` `+`${totalList}`+` `+`€`);

    
let banknote_1 = banknotes[0];
let banknote_2 = banknotes[1];
let banknote_3 = banknotes[2];
const totalCash = banknote_1+banknote_2+banknote_3;  


const chekCash = 
    console.log(`Total Cash =`+` `+totalCash+` `+`€`);


let check = (totalCash - totalList);

if (check >= 0) {
    console.log(`Remaining =`+` `+check+` `+`€`);
    
} else {
    console.log(`Sorry, there is not enough available for all the groceries ...`);

}   

if (check >= 1) {
    let maryWin = check*0.05;
    console.log(`Nice Mary, left`+` `+ maryWin.toFixed(2) +` `+`€`+` `+ `for the sweets!`);
    
} else {
    console.log(`Sorry Mary, there is no "nibble" this time ..`)
}
