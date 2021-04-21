/* JavaScript Fundamentals –Part 1
    * Coding Challenge #1
    * Mark and John are trying to compare their BMI (Body Mass Index), 
    * which is calculated using the formula:
    * BMI = mass / height ** 2 = mass / (height * height)
    * (mass in kg and height in meter).
    
    * The tasks:
    * 1.Store Mark's and John's mass and height in variables
    * 2.Calculate both their BMIs using the formula (you can even implement both versions)
    * 3.Create a Booleanvariable 'markHigherBMI'containing information about whether Mark has a higher BMI than John.
    
    * Test data:
    * Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    * Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
    * End!
*/

//Store Mark's and John's mass and height in variables for Data 1
let weightMark = 78;
let tallMark = 1.69;
let weightJhon = 92;
let tallJhon = 1.95;

let BMIMark = weightMark / tallMark ** 2; //BMI = mass / height ** 2
let BMIJhon = weightJhon / (tallJhon * tallJhon); //BMI = mass / (height * height)
let markHigherBMI = BMIMark > BMIJhon; //Boolean variable containing information about whether Mark has a higher BMI than John.

console.log(BMIMark, BMIJhon, markHigherBMI);

/* REMOVE THIS COMMENT AND COMMENT THE PREVIOUS CODE TO VIEW THE SECOND EXAMPLE

//Store Mark's and John's mass and height in variables for Data 2
let weightMark = 95;
let tallMark = 1.88;
let weightJhon = 85;
let tallJhon = 1.76;

let BMIMark = weightMark / tallMark ** 2; //BMI = mass / height ** 2
let BMIJhon = weightJhon / (tallJhon * tallJhon); //BMI = mass / (height * height)
let markHigherBMI = BMIMark > BMIJhon; //Boolean variable containing information about whether Mark has a higher BMI than John.

console.log(BMIMark, BMIJhon, markHigherBMI);
*/
