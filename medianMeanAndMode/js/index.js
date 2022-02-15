import "../components/output.js";

// Getting the button, text area, the text message (used to show warning to the user abour thei input) and the container were we have the component
const button = document.getElementById("button");
const text_area = document.getElementById("numbers");
const output = document.getElementById("output");
const app = document.getElementById("app-output");
const message = document.getElementById("message");


// Event to begin the canculation, other wise return an erro if the input is not in the requested format
button.addEventListener("click", (e) => {
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
        // Avoid append multiple components        
        app.totalNumbers = 10;
        app.numbersAddition = 34;
        app.main = 3;
        app.median = 4;
        app.mode = 4;
        app.ascendingMode = "1 2 2 2 4 4 4 4 5 6";

        console.log(app);
    
        output.classList.remove("hidden");
    }    
});

