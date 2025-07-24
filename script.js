const container = document.querySelector(".container");
const gridBtn = document.querySelector(".btn");

let isMouseDown = false;

function rgb() {
  const colors = ["#ff0000", "#0000ff", "#00ff00"];
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

document.body.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isMouseDown = true;
});

document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
});

gridBtn.addEventListener("click", () => {
  let size = prompt("Enter your grid size (e.g. 16)");
  size = parseInt(size);

  if (isNaN(size) || size < 1 || size > 50) {
    alert("Choose the grid size between 1 and 100");
    return;
  }

  container.innerHTML = "";

  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${size}, 12px)`;
  container.style.gridTemplateRows = `repeat(${size}, 12px)`;

  totalSize = size * size;

  for (let i = 0; i < totalSize; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("box");

    newDivs.addEventListener("mouseover", () => {
      if (isMouseDown && !newDivs.style.backgroundColor) {
        newDivs.style.backgroundColor = rgb();
      }
    });

    newDivs.addEventListener("click", () => {
      newDivs.style.backgroundColor = "white";
    });

    container.append(newDivs);
  }
});
