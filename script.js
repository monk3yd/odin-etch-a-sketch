container = document.querySelector(".container");

// Create 16 child-divs within container div
for (let i = 0; i < 16; i++) {
    rowDiv = document.createElement("div");
    // Give them a class for styling with CSS
    rowDiv.classList.add("row");
    rowDiv.style.cssText = `display: flex;
        justify-content: space-around; 
        flex: 1;
        gap: 1rem;`

    for (let j = 0; j < 16; j++) {
        cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.style.cssText = "flex: 1; text-align: center;"

        cellDiv.style.border = "1px solid gray";

        rowDiv.appendChild(cellDiv);
    }

    // rowDiv.textContent = `${i}`;
    // childDiv.style.border = "1px solid blue";

    container.appendChild(rowDiv);
}

