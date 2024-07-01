console.log("Hello World");
let age = 25;
if (age>=18) {
    console.log("You can vote.");
}
else if(age>0 && age<18) {
    console.log("You cannot vote.");
}
else {
    console.log("Invalid input.");
}
let a = 4;
let b = 7;
console.log("The value of a is : "+a);
console.log("The value of b is : "+b);
console.log(a+" + "+b+" = "+(a+b));
console.log(a+" - "+b+" = "+(a-b));
console.log(a+" * "+b+" = "+(a*b));
console.log(a+" / "+b+" = "+(a/b));
console.log(a+"^"+b+" = "+(a**b));
console.log(b+" % "+a+" = "+(b%a));
let strnum = "75";
let c = 75;
if (strnum==c) {
    console.log("Yes value is same.");
}
else {
    console.log("No value is not same.");
}
if (strnum===c) {
    console.log("Yes data-type is same.");
}
else {
    console.log("No data-type is not same.");
}
/*
Multiline
comments
in
javascript
are
same
as
java
*/
//Ternary Operator in Javascript:
let x = 77;
let y = 700;
let max = (x>y) ? x:y;
console.log("The greater number between x : "+x+", y : "+y+" is = "+max);