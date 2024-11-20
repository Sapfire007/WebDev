function rgbcodegen() {
    let a = Math.floor(Math.random()*1000);

    return a
}
// console.log(rgbcodegen(),rgbcodegen(),rgbcodegen());
let arr1 = document.getElementsByClassName("box");
// console.log(arr2);
for (let index = 0; index < arr1.length; index++) {
    arr1[index].style.backgroundColor = `rgb(${rgbcodegen()},${rgbcodegen()},${rgbcodegen()})`;
    arr1[index].style.color = `rgb(${rgbcodegen()},${rgbcodegen()},${rgbcodegen()})`;
}