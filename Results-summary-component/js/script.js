const result = document.querySelector(".score");
const container = document.querySelector(".contain-summary-score");

function calcAverage(array) {
  return array.reduce((sum, val) => sum + val) / array.length;
}

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const scoreArray = data.map((element) => element.score);
    const finalScore = Math.floor(calcAverage(scoreArray));
    result.innerHTML = `<p><span>${finalScore}</span><br />of 100</p>`;

    const fragment = document.createDocumentFragment();
    data.forEach((element) => {
      const category = element.category;
      const icon = element.icon;
      const score = element.score;

      const newDiv = document.createElement("div");
      newDiv.classList.add("summary-score", category);

      const newDivTitle = document.createElement("div");
      newDivTitle.classList.add("contain-svg-title");
      const newSVG = document.createElement("img");
      newSVG.src = icon;
      newSVG.alt = `Logo ${category}`;
      const newP = document.createElement("p");
      newP.innerText = category;

      const newScore = document.createElement("div");
      newScore.classList.add("contain-score");
      newScore.innerHTML = `<p><span>${score} </span>/ 100</p>`;

      newDivTitle.appendChild(newSVG);
      newDivTitle.appendChild(newP);
      newDiv.appendChild(newDivTitle);
      newDiv.appendChild(newScore);
      fragment.appendChild(newDiv);
    });

    container.appendChild(fragment);

    const newButton = document.createElement("button");
    newButton.innerText = "Continue";
    container.appendChild(newButton);
  })
  .catch((error) => console.error(error));
