// JavaScript Functions


function table(num,upto) {
    for(i=0;i<upto+1;i++) {
        console.log(num + " * " + i + " = " + num*i);
    }
}

table(2,20);

function person(name) {
    console.log("Hey there,", name);
    console.log("User registered :", name);
}

person("Saptarshi");
person("Alex");

function sum(a,b) {
        return a+b;
}

console.log(sum(4,7));
console.log(sum(1,4));

function sum2(x,y,z=5) // Here z is optional
{
    out = x + y + z;
    return out;
}

console.log(sum2(4,7));
console.log(sum2(5,5,5));
console.log(sum2(5));        // Output will be NaN (Not a Number) ; value of b is 'undefined'


// Arrow function :
const func1 = (x)=>{
    console.log("This is an arrow function :",x);
}

func1(7);
func1(4);
func1(75);