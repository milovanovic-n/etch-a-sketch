const container = document.querySelector("#container");
const btnClear = document.querySelector("#clear");
const inputSize = document.querySelector("#size");
const displaySize = document.querySelector("#displaySize");

/* If user changes size - display that size */
inputSize.addEventListener("mousemove", function() {
	displaySize.textContent = `${this.value}x${this.value}`;
});

/* Make new grid on size change */
inputSize.addEventListener("change", function() {
	const size = parseInt(this.value);
	makeRows(size, size);
})

/* Function for the hover efect on cells */
/* Change background color of the cell when hovered */
function hoverFunc(color = "black") {
	this.classList.add("hoveredGrid");
}

/* Function that creates rows and columns */
const makeRows = (rows, cols) => {
	container.style.setProperty("--grid-rows", rows);
	container.style.setProperty("--grid-cols", cols);

	container.innerHTML = "";

	for(let i = 0; i < (rows * cols); i++) {
		let cell = document.createElement("div");
		cell.className = "gridItem";
		cell.addEventListener("mouseover", hoverFunc);
		container.appendChild(cell);
		cell.classList.remove("hoveredGrid");
	}
}

/* Function to Clear the grid */
const clearGrid = () => {
	makeRows(16, 16)
}

btnClear.addEventListener("click", clearGrid);

makeRows(16, 16);