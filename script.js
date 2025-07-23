const container = document.querySelector(".container");
const grid = 20 * 20;
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

for (let i = 0; i < grid; i++) {
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
