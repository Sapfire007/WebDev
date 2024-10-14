console.log("Learning about strings in JavaScript.");
let real_name = "Saptarshi";
console.log(real_name);

console.log(real_name[(real_name.length)-1]);              //.length is a property

for (let i = 0; i < real_name.length; i++) {
    console.log(real_name[i]);
}

let a = "Sap";
let country = "India";
console.log("His nick-name is "+a+" and he lives in "+country+".");
console.log(`His nick-name is ${a} and he lives in ${country}.`);

let ex1 = "He exclaimed,\"Hello everyone!\"";
console.log(ex1);
console.log("Hey\nthere!");

let ex2 = "iupac";
console.log(`${ex2.toUpperCase()} nomenclature.`);                //.toUpperCase() is a function

let ex3 = 'WASSUP!?';
console.log(`${ex3.toLowerCase()}`);

let ex4 = "Saptarshi Bose";
console.log(ex4.slice(10,ex4.length));
console.log(ex4.slice(10));
console.log(ex4.replace("Bose","a.k.a Sap"));
let ex5 = "Hello Bro Hello";
console.log(ex5.replace("Hello","Wassup"));

console.log(real_name.concat(" ", ex3.toLowerCase(), " How ", "are you?"));

let ex6 = "                     Hello                    world.                   ";
console.log(ex6.trim());

console.log(ex4.charAt(0));
console.log(ex4.indexOf("Bo"));

console.log(ex4.startsWith("Sap"));
console.log(ex4.endsWith("xyz"));