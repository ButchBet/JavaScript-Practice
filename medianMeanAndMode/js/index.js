import "../components/output.js";

// Getting the open and close button, text area, aoutput, the text message (used to show warning to the user abour thei input) and different paragraphs of the list
const open = document.getElementById("open");
const close = document.getElementById("close");
const text_area = document.getElementById("numbers");
const output = document.getElementById("output");
const totalNumbersElement = document.getElementById("totalNumbers");
const numbersAdditionElement = document.getElementById("numbersAddition");
const meanElement = document.getElementById("mean");
const medianElement = document.getElementById("median");
const modeElement = document.getElementById("mode");
const ascendingModeElement = document.getElementById("ascendingMode");
const message = document.getElementById("message");


// Event to begin the canculation, other wise return an erro if the input is not in the requested format
open.addEventListener("click", (e) => {
    // check if the text are is empty
    if(text_area.value.length === 0) {
        // Set the value of empty text area
        message.innerHTML = "The text are is empty, please enter at least one number.";

        // show the container
        message.classList.remove("hidden");

        // hidde the item again
        setTimeout(() => {
            message.classList.add("hidden");
        }, 2000);
    } else {
        // RegEx to get the numbers from the string. 
        const reg = /\d+/g;

        // Get value
        const content = text_area.value;

        // Save the numbers in an array
        const numbers = content.match(reg);

        // Change the strings to integers
        for(let i = 0; i < numbers.length; i++) {
            numbers[i] = parseInt(numbers[i]);
        }

        // Sort the list
        numbers.sort();

        // Total of numbers
        const totalNumbers = numbers.length;

        let numbersAddition = 0;

        for(let i = 0; i < totalNumbers; i++) {
            numbersAddition += numbers[i];
        }

        // Mean 
        const mean = numbersAddition / totalNumbers;

        // Media
        let median = 0;

        // Check if total numbers is pair or umpair
        if(totalNumbers % 2 === 0) { // addtion between the two of the midel and then divide the result in 2
            median = (numbers[totalNumbers / 2] + numbers[totalNumbers / 2 - 1])/2;
        } else { // Get the midel one
            median = numbers[Math.floor(totalNumbers / 2)]; 
        }

        // Mode
        let mode = 0;

        const quantity = {};

        for(let i = 0; i < totalNumbers; i++) { // Create and initialize each number
            quantity[numbers[i].toString()] = 0;
        }

        for(let i = 0; i < totalNumbers; i++) { // Get the qantity of each number
            quantity[numbers[i].toString()] += 1;
        }

        // Get keys 
        const keys = Object.keys(quantity);


        mode = quantity[keys[0]];

        // Get the key with a greater quantity
        for(let i = 1; i < keys.length; i++) {
            if(mode < quantity[keys[i]]) {
                mode = keys[i];
            }
        }

        // Ascending mode
        let ascendingMode = "";

        for(let i = 0; i < totalNumbers; i++) {
            ascendingMode += `${numbers[i]} `;
        }


        // Avoid append multiple components        
        totalNumbersElement.innerHTML = totalNumbers;
        numbersAdditionElement.innerHTML = numbersAddition;
        meanElement.innerHTML = mean;
        medianElement.innerHTML = median;
        modeElement.innerHTML = mode;
        ascendingModeElement.innerHTML = ascendingMode;
    
        output.classList.remove("hidden");
    }    
});

// Event to hidde the output content
close.addEventListener("click", () => {
    output.classList.add("hidden");
});