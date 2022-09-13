container = document.querySelector(".container");

// Create 16x16 child-divs within container div
for (let i = 0; i < 16; i++) {
    rowDiv = document.createElement("div");
    rowDiv.style.cssText = `display: flex;
        justify-content: space-around; 
        flex: 1;
        gap: 1rem;`

    for (let j = 0; j < 16; j++) {
        cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.style.cssText = `flex: 1; text-align: center;
            border: 1px solid gray;`;

        rowDiv.appendChild(cellDiv);
    }
    container.appendChild(rowDiv);
}

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("mouseover", () => {
    cell.classList.add("hovered");
}));

// function hoverOut() {
//     this.classList.remove("hovered");
// }
// cells.forEach(cell => cell.addEventListener("mouseout", hoverOut));

