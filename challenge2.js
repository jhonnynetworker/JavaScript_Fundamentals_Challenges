/*Coding Challenge #2
    * Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
    * Your tasks:
    * 1.Print a nice output to the console, saying who has the higher BMI. 
    * The message iseither "Mark's BMI is higher than John's!"or "John's BMI is higher than Mark's!"
    * 2.Use a template literal to include the BMI values in the outputs. 
    * Example: "Mark'sBMI (28.3) is higher than John's (23.9)!"
    * Hint:Use an if/else statement 
*/

//Using the BMI example and the code that is already written from Challenge #1

let weightMark = 78;
let tallMark = 1.69;
let weightJhon = 92;
let tallJhon = 1.95;

/*REMOVE THIS COMMENT AND COMMENT THE PREVIOUS CODE TO VIEW THE SECOND EXAMPLE

let weightMark = 95;
let tallMark = 1.88;
let weightJhon = 85;
let tallJhon = 1.76;

*/

const BMIMark = weightMark / tallMark ** 2; 
const BMIJhon = weightJhon / (tallJhon * tallJhon); 

//Use an if/else statement

if (BMIMark > BMIJhon) {
    //Print a nice output to the console
    console.log('Mark`s BMI is higher than John`s!');
 }
 else {
    //Using a template literal to include the BMI values in the outputs
    //BONUS PLUS: Use toFixed() method to remove decimal places 
    console.log(`John's BMI (${(BMIJhon.toFixed(1))}) is higher than Mark's (${BMIMark})!`)
 }   
