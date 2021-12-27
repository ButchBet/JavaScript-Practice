// Square code
console.group("Square")
const side = 5;

function SquarePerimeter(side = 4) {
    return  side * 4 ;
}

console.log("The square perimeter: " + SquarePerimeter(side));

function SquareArea(side) {
   
    return side**2;
}
console.log("The square area: " + SquareArea(side) + "cm^2");
console.groupEnd();

// Triangle code
console.group("Triangle");
const height = 5
const side1 = 6;
const side2 = 6;
const base = 6;
// console.log("Triangle sides are: (" 
//     + TraingleSide1 
//     + " " 
//     + TraingleSide2 
//     + " " 
//     + TraingleSide3 
//     + ")cm");

function TrainglePerimeter(side1 = 4, side2 = 6, base = 5) {
    return  side1 + side2 + base;
} 

console.log("The triangle perimeter: " + TrainglePerimeter(side1, side2, base) + "cm");

function TriangleArea(base, height) {
    return (base * height) / 2;
}

console.log("The square area: " + TriangleArea(base, height) + "cm^2");
console.groupEnd();


// Circle code
console.group("Circle")
const radio = 4;
const PI = Math.PI;

console.log("The circle radio: " + radio + "cm");

function diameter(radio = 4) {
    return radio * 2;
}

console.log("The circle diameter: " + diameter(radio) + "cm");

function CirclePerimeter(diameter = 8, PI = 3.1415) { 
    return  diameter * PI;
}

console.log("The circle perimeter: " + CirclePerimeter(diameter(radio), PI) + "cm");

function CircleArea(PI = 3.1415, radio = 4) {
    return PI * (radio**2);
}

console.log("The circle area: " + CircleArea(PI, radio) + "cm^2");
console.groupEnd();