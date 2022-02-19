// Data base
let colombia = [];

// Helpers 

// show error message in case that the name or salary are not enetered or redirect the flow to can add or remove data
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
            addData(name, salary);
        }
    } else { // When is to delete
        if(name.value.length === 0) {
            message.innerHTML = "The name is empty, please enter this.";

            message.classList.remove("hidden");
        } else {
            deleteData(name);
        }
    }

    // Hidde the message (in case) after 3 seconds
    setTimeout(() => {
        message.classList.add("hidden");
    }, 3000);
}

// check the existence of the property
function checkProtetie(name) {
    for(let index in colombia) {
        if(colombia[index]["name"] === name) {
            return true;
        }
    }

    return false;
}

// replace the salary
function replaceSalary(name, salary) {
    for(let index in colombia) {
        if(colombia[index]["name"] === name) {
            colombia[index]["salary"] = salary;
            
            return;
        }
    }
}

// Add data
function addData(name, salary) {
    // Trim the start and the end of name
    name.value.trimStart();
    name.value.trimEnd();

    // Get the name 
    const nameData = name.value;

    // Get the salary
    const salaryData = parseInt(salary.value);

    // Create the pushed object
    const obj = {};

    // Add the new property
    obj["name"] = nameData;
    obj["salary"] = salaryData;

    // check if the data already exists 
    if(!checkProtetie(nameData)) { // Not: add the new object
        // Push the object
        colombia.push(obj);
    } else { // Yes: replace the salary
        replaceSalary(nameData, salaryData);
    }
}

// Delete data
function deleteData(name) {
    // Trim the start and the end of name
    name.value.trimStart();
    name.value.trimEnd();

    // Get the name
    const nameData = name.value;

    // Aux to save the new array
    let aux = [];

    for(let index in colombia) {
        if(colombia[index]["name"] != nameData) {
            aux.push(colombia[index]);
        }
    }

    // Initialize the main array again
    colombia = aux;
}

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

// Button to prove others things
const prove = document.getElementById("prove");


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
    // Saves all of the arrays in an array 
    const salaries = colombia.map((element) => {
        return element["salary"];
    });

    // Sort the list
    salaries.sort((a, b) => {
        return a - b; 
    });

    // Total of salaries
    const totalNumbers = salaries.length;

    // Median
    let median = 0;

    // Check if total numbers is pair or unpair
    if(totalNumbers % 2 === 0) { // addtion between the two of the midel and then divide the result in 2
        console.log(salaries[totalNumbers / 2], salaries[totalNumbers / 2 - 1]);
        console.log(salaries);

        median = (salaries[totalNumbers / 2] + salaries[totalNumbers / 2 - 1])/2;
    } else { // Get the midel one
        console.log(salaries);

        median = salaries[Math.floor(totalNumbers / 2)]; 
    }

    result.innerHTML = `The median is: ${median}.`;

    output.classList.remove("hidden");
});
// Event to calculate the top 10% and show the output
top10.addEventListener("click", () => {
    // Saves all of the arrays in an array 
    const salaries = colombia.map((element) => {
        return element["salary"];
    });

    output.classList.remove("hidden");
});

// Event to prove other things
prove.addEventListener("click", () => {
    console.log(colombia);
});