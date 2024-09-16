console.log("Js program on loops");

// Simple for loop
for (let i = 1; i <= 10; i++){
    console.log(i);
}


// Forin loop
// Generally used for objects
let obj1 = {
    Name : "Saptarshi Bose",
    Age : 17,
    Branch : "Computer Science"
}

for (const key in obj1) {
        const element = obj1[key];
        console.log(key, element)
}


// Forof loop
// Generally used for strings or arrays
for (const c of "Saptarshi") {
    console.log(c)
}


// While loop
let ab = 1;
while (ab < 21) {
    console.log(ab);
    ab++;
}


// do-While loop
xy = 7
do {
    console.log("This do while loop has stated to execute : "+xy)
    xy--;
} while (xy>10);