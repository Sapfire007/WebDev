var a = prompt("Enter a number");
if (a == 0){
    console.log(`${a}! = 1 `)
}
else{
    let arr = [];
    for (let index = a; index > 0; index--) {
        arr.push(index);
    }
    let facto = arr.reduce((a,b)=>{
        return a*b;
    });
    console.log(`${a}! = ${facto} `);
}