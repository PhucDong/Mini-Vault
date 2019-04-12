// https://stackoverflow.com/questions/4220126/run-javascript-function-when-user-finishes-typing-instead-of-on-key-up

import accounts from "./accountsData.js";


// check that name to data in accounts
function isAvailable(input) {
    let heading = document.createElement("h2");
    let email = document.createElement("p");
    let password = document.createElement("p");
    let container = document.getElementById("container");

    accounts.forEach(item => {
        // if it matches, show account name, email, and password
        if (item.name.toUpperCase() === input.toUpperCase()) {
            heading.textContent = item.name.toUpperCase();
            container.appendChild(heading);

            email.textContent = `Email: ${item.email}`;
            container.appendChild(email);

            password.textContent = `Password: ${item.password}`;
            container.appendChild(password);
        }
    })
}

// ask users for their account name
let userInput = prompt("Enter your desired account");
isAvailable(userInput);