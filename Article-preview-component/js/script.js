const modal = document.getElementById("myModal");
const btn = document.getElementById("btn-modal");
const svg = document.querySelector(".svg");

function resetValues() {
  btn.style.background = "hsl(210, 46%, 95%)";
  svg.style.fill = "#6E8098";
}

btn.addEventListener("click", () => {
  modal.style.visibility = "visible";
  btn.style.background = "hsl(217, 19%, 35%)";
  svg.style.fill = "white";
});

document.addEventListener("click", (event) => {
  if (
    !modal.contains(event.target) &&
    event.target !== btn &&
    event.target !== svg
  ) {
    modal.style.visibility = "hidden";
    resetValues();
  }
});
