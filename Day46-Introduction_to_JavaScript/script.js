alert("Hello There!");

console.log("Console is live");
console.log("Console is running");

var a = prompt("Enter a number");
console.log("Your entered number is : "+a)

var isTrue = confirm("Do you want to switch to darkmode ?");
if (isTrue) {
    console.log("Switched to Dark Mode.");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
} 
else {
    console.log("Stayed on Light mode.");
}

document.title = "Introduction to JavaScript";
// document.body.style.backgroundColor = "red";