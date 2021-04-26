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

const itemObj=[
	{
  	name:`Carrots`,
    price:10
  },
  {
  	name:`Meat`,
    price:10
  },
  {
  	name:`Fish`,
    price:10
  },
  {
  	name:`Eggs`,
    price:5,
    hasDiscount:true,
    discount:0.10
  },
  {
  	name:`Rice`,
    price:5
  },
  {
  	name:`Sugar`,
    price:5
  }
]

//console.log(itemObj[0])
//console.log(itemObj[0].name)
const itemsList = [`Carrots`, `Meat`, `Fish` , `Eggs`, `Rice`, `Sugar`];
const itemsPrice = [10,10,10,5,5,5]
const banknotes = [5, 10, 10];

let totalCash = 0
//console.log("bank notes array "+banknotes.length)
for(let i=0; i<banknotes.length;i++){
	totalCash+=banknotes[i]
}

const itemCanBuy=[]
const itemCantBuy=[]
let currentMoney = 0

for(let i=0; i<itemObj.length;i++){
	currentMoney+=itemObj[i].price
	if(currentMoney<=totalCash){
  	//can buy
    itemCanBuy.push(itemObj[i].name)
  }
  else{
  	itemCantBuy.push(itemObj[i].name)
  }
}
console.log(itemCanBuy)
console.log(itemCantBuy)


let totalList = 0 
for(let i=0; i<itemObj.length;i++){
	if(itemObj[i].discount){
  	totalList+=itemObj[i].price - (itemObj[i].price *itemObj[i].discount);  
  }
  else
  {
  	totalList+=itemObj[i].price
  }
}
//price_Carrots+price_Meat+price_Fish+discount_Eggs+price_Rice+price_Sugar;
    console.log(`Total List =`+` `+`${totalList}`+` `+`€`);

    
/*let banknote_1 = banknotes[0];
let banknote_2 = banknotes[1];
let banknote_3 = banknotes[2];
const totalCash = banknote_1+banknote_2+banknote_3;  */

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
