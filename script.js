let height = 16;
let width = 16;

let body = document.querySelector("body");
const container = document.querySelector(".container");

createGrid(height, width, container);

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("mouseover", () => {
    cell.classList.add("hovered");
}));

// function hoverOut() {
//     this.classList.remove("hovered");
// }
// cells.forEach(cell => cell.addEventListener("mouseout", hoverOut));

button = document.createElement("button");
button.textContent = "New Grid";
button.style.cssText = "margin-top: 1rem;";
button.addEventListener("click", () => {
    // Erase grid
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        container.removeChild(row);
    });

    // Ask for new grid dimensions
    do {
        height = prompt("Squares height:");
        width = prompt("Squares width:");
    } while (width > 100 || height > 100)
    
    // Redraw new dimension grid
    createGrid(height, width, container);

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", () => {
        cell.classList.add("hovered");
    }));
})

body.appendChild(button);

function createGrid(height, width, container) {
    // Create 16x16 child-divs within container div
    for (let i = 0; i < height; i++) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.style.cssText = `display: flex;
            justify-content: space-around; 
            flex: 1;
            gap: 1rem;`

        for (let j = 0; j < width; j++) {
            cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.style.cssText = `flex: 1; text-align: center;
                border: 1px solid gray;`;

            rowDiv.appendChild(cellDiv);
        }
        container.appendChild(rowDiv);
    }
};
