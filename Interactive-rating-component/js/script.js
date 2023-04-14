const elements = document.querySelectorAll("[id]");
const button = document.querySelector("button");
const activeElements = document.querySelectorAll(".active");
const animCard = document.querySelector(".card");
const animCard2 = document.querySelector(".card.thank");
const final = document.querySelector(".final");

elements.forEach((element) => {
  const id = element.id;
  element.addEventListener("click", () => {
    activeElements.forEach((activeElement) => {
      activeElement.classList.remove("active");
    });
    element.classList.add("active");
    console.log(id);
    button.addEventListener("click", () => {
      const result = document.createElement("p");
      result.innerText = `You selected ${id} out of 5`;
      final.appendChild(result);
      animCard.classList.add("submit");
      animCard2.classList.add("result");
    });
  });
});
