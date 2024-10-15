/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

function randomChoice(x,y,z) {
    let num = Math.floor(Math.random()*3);
    if (num == 0){
        return x;
    }
    else if(num == 1) {
        return y;
    }
    else{
        return z;
    }
}

console.log(`Your business name is : ${randomChoice("Crazy","Amazing","Fire")} ${randomChoice("Engine","Foods","Garments")} ${randomChoice("Bros","Limited","Hub")}`);