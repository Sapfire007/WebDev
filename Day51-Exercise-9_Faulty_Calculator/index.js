/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let a = Math.random();

var num1 = prompt("Enter first number :");
var num2 = prompt("Enter second number :");
var op = prompt("Enter the operation you want to perform : ");

let obj1 = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (a>0.1){
    //Perform correct calculation
    alert(`The result of your calculation is ${eval(`${num1} ${op} ${num2}`)}`);
    console.log(`The result of your calculation is ${eval(`${num1} ${op} ${num2}`)}`);
}

else {
    op = obj1[op]
    alert(`The result of your calculation is ${eval(`${num1} ${op} ${num2}`)}`);
    console.log(`The result of your calculation is ${eval(`${num1} ${op} ${num2}`)}`);
}