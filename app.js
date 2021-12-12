/* Set Default Values */
let defaultColor = "#454545";
let defaultSize = 16;

/* Select Elements */
const container = document.querySelector("#container");
const btnClear = document.querySelector("#clear");
const inputSize = document.querySelector("#size");
const displaySize = document.querySelector("#displaySize");
const color = document.querySelector("#color");

/* If user changes size - display that size */
inputSize.addEventListener("mousemove", function() {
	displaySize.textContent = `${this.value}x${this.value}`;
});

/* Make new grid on size change */
inputSize.addEventListener("change", function() {
	defaultSize = parseInt(this.value);
	makeRows(defaultSize, defaultSize);
})

/* Function for the hover efect on cells */
/* Change background color of the cell when hovered */
color.addEventListener("change", function(e) {
	defaultColor = e.target.value;
})
function hoverFunc(e, color = defaultColor) {
	this.style.backgroundColor = color;
}

/* Function that creates rows and columns */
const makeRows = (rows, cols) => {
	container.style.setProperty("--grid-rows", rows);
	container.style.setProperty("--grid-cols", cols);

	container.innerHTML = "";

	for(let i = 0; i < (rows * cols); i++) {
		let cell = document.createElement("div");
		cell.addEventListener("mouseover", hoverFunc);
		container.appendChild(cell);
	}
}

/* Function to Clear the grid */
const clearGrid = () => {
	makeRows(defaultSize, defaultSize)
}

btnClear.addEventListener("click", clearGrid);

makeRows(defaultSize, defaultSize);