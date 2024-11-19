console.log("Sap");
let names = document.getElementsByClassName("box");
console.log(names);
names[2].style.backgroundColor = "pink";

let special = document.getElementById("spl");
console.log(special);
special.style.color = "red";

document.querySelector(".box").style.backgroundColor = "teal"; //only the first selector will be targeted

console.log(document.querySelectorAll(".newboxes"));   //returns an array
document.querySelectorAll(".newboxes").forEach(e=>{
    console.log(e);
});
document.querySelectorAll(".newboxes").forEach(e=>{
    e.style.backgroundColor="yellow";
});
console.log(document.getElementsByTagName("div"));
x = document.getElementsByTagName("div");
console.log(x[5].matches('#spl'));
console.log(x[5].closest('html'));
console.log(document.querySelector(".container").contains(x[2]));
console.log(document.querySelector(".container").contains(x[0]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));