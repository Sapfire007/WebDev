console.log("Hey this is day 2 of learning javascript!");
var a = 4;
var b = 7;
console.log("Sum of var a : "+a+" var b : "+b+" is = "+(a+b));
var c = "Saptarshi";
console.log("Given string is : "+c)
console.log("Type of var a is  : "+typeof(a));
console.log("Type of var b is  : "+typeof(b));
console.log("Type of var c is  : "+typeof(c));
const a1 = 70;
// a1 = a1+1; This is not allowed because a1 is constant
console.log("The value of const a1 is : "+a1+", and its value is constant.");
console.log("Type of const a1 is  : "+typeof(a1));
let d = 71;
d = d+1;
console.log("The value of d is : "+d);
{
    let d = 25;
    console.log("The value of d within a block is : "+d);
}
console.log("Again the value of d outside the block is : "+d);
let u = "Saptarshi";
let v = 75;
let w = 3.14;
const x = true;
let y = undefined;
let z = null; 
console.log("The value of u is : "+u)
console.log("Type of let u is  : "+typeof(u));
console.log("The value of v is : "+v)
console.log("Type of let v is  : "+typeof(v));
console.log("The value of w is : "+w)
console.log("Type of let w is  : "+typeof(w));
console.log("The value of x is : "+x)
console.log("Type of const x is  : "+typeof(x));
console.log("The value of y is : "+y)
console.log("Type of let y is  : "+typeof(y));
console.log("The value of z is : "+z)
console.log("Type of let z is  : "+typeof(z));
let s = {
    "name" : "Saptarshi",
    "Age group" : "Teenager",
    "is student ? " : true,
    "favourite number" : 7
}
console.log(s);
s.age = "17 years";
console.log(s);
s.age = "18 years";
console.log(s);