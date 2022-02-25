// 2
let name = "Alejandro";
let lastName = "Grillo";
let userNAme = "alejoGrillo300";
let age = "18";
let email = "alGrillo3@gmail.com";
let adult = false;
let moneySaved = 1000000;
let debts = 200000;

console.log(name + " " + lastName);
console.log(moneySaved-debts);

function myPresentation(name = "Name", lastName = "LastName", nickName = "Any") { 
    const completeName = `${name} ${lastName}`;
    console.log(`My name is ${completeName}, but I prefer to be told ${nickName}`); 
}

myPresentation("This", "That", "Whatever");

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}

if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if(tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

const subscription = ["Free", "Basic", "Expert", "ExpertPlus"]; 
const subscriptionAsw = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]; 


let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);

    i++
}

i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);

    i--;
}
