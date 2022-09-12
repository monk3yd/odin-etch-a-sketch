container = document.querySelector(".container");

// Create 16 child-divs within container div
for (let i = 0; i < 16; i++) {
    childDiv = document.createElement("div");
    childDiv.classList.add("child");

    childDiv.textContent = `${i}`;
    childDiv.style.border = "1px solid blue";

    container.appendChild(childDiv);
}

// Give them a class for styling with CSS
