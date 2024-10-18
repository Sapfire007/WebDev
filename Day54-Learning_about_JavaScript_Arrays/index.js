let arr1 = [1,2,4,7,75,47];
//  Index : 0,1,2,3, 4, 5 
console.log(arr1);
console.log(arr1.length);
console.log(arr1[5]);
arr1[0] = 17;
console.log(arr1);
console.log(typeof(arr1));
console.log(arr1.toString());
console.log(arr1.join(" and "));

let a2 = [1,4,5,7,14];
a2.pop();
console.log(a2);
a2.push(50);
console.log(a2);
a2.push("Sap");
console.log(a2);
a2.shift();
console.log(a2);
a2.unshift("Saptarshi");
console.log(a2);
delete a2[5];
console.log(a2);
console.log(a2.length);
console.log(typeof(a2[5]));

let x = [1,2,3];
let y = [4,5,6];
let z = [7,8,9];
x.concat(y,z);
console.log(x);
console.log(x.concat(y,z));

let ax = [4,3,2,1,6,8,7,9,0,5];
console.log(ax.sort());

let no1 = [];
for (let index = 1; index <= 15; index++) {
    no1.push(index);
}
console.log(no1);
no1.splice(2,8);
console.log(no1);

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

let revloop = [];
for (let index = 1; index < 11; index++) {
    revloop.push(index);
}
revloop.reverse();
console.log(revloop);

for (const element of revloop) {
    console.log(element)
}

revloop.forEach((value, index, arr)=>{console.log(value, index, arr)});

let Arr556 = [2,5,7,10,12];
let newArr = Arr556.map(e=>{
    return e**2;
});
console.log(newArr);

const greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(Arr556.filter(greaterThanSeven));
console.log(Arr556.filter((e)=>{
    if(e>5){
        return true;
    }
    return false;
}));

let sum = newArr.reduce((a,b)=>{
    return a+b;
});
console.log(sum);

console.log(Array.from("Saptarshi"));