// Data base
const colombia = [1, 2, 4];

// Helpers 

// Function to show error message in case that the name or salary are not enetered 
// true = name and salary, false = just name
function ShowMessage(name, salary, option, message) {
    // When is to add 
    if(option) {
        if(name.value.length === 0 && salary.value.length === 0) {
            message.innerHTML = "Both inputs are empty, please enter these.";

            message.classList.remove("hidden");
        } else if(name.value.length === 0) {
            message.innerHTML = "The name is empty, please enter this.";

            message.classList.remove("hidden");
        } else if(salary.value.length === 0) {
            message.innerHTML = "The salary is empty, please enter this.";

            message.classList.remove("hidden");
        } else {
            console.log("Fine!.")
        }
    } else { // When is to delete
        if(name.value.length === 0) {
            message.innerHTML = "The name is empty, please enter this.";

            message.classList.remove("hidden");
        } else {
            console.log("Fone!.")
        }
    }

    // Hidde the message (in case) after 3 seconds
    setTimeout(() => {
        message.classList.add("hidden");
    }, 3000);
}

// Add data
function addData(name, salary) {
    const nameData = name.value;

    const salaryData = salary.value;

    colombia.push({nameData: salaryData});
}

// Delete data

// Getting every element that is going to be used
const name = document.getElementById("name");
const salary = document.getElementById("salary");
const btn_add_delete = document.getElementById("btn-add-delete");
const change = document.getElementById("change");
const message = document.getElementById("message");
const median = document.getElementById("median");
const output = document.getElementById("output");
const top10 = document.getElementById("top10");
const exit = document.getElementById("exit");
const result = document.getElementById("result");


// Event to change the contect of the button add or delete
change.addEventListener("click", () => {
    if(btn_add_delete.value === "Add") {
        btn_add_delete.value = "Delete";
    } else {
        btn_add_delete.value = "Add";
    }
    
});

// Event to add or delete data
btn_add_delete.addEventListener("click", () => {
    if(btn_add_delete.value == "Add") {
        ShowMessage(name, salary, true, message);
    } else {
        ShowMessage(name, salary, false, message);
    }
});

// Event to exit the panel of the result 
exit.addEventListener("click", () => {
    output.classList.add("hidden");
});

// Event to calculate the median and show the output
median.addEventListener("click", () => {
    output.classList.remove("hidden");
});
// Event to calculate the top 10% and show the output
top10.addEventListener("click", () => {
    output.classList.remove("hidden");
});