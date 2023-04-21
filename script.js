const folders = [
  "Interactive-rating-component",
  "NFT-preview-card-component",
  "Order-summary-component",
  "Profile-card-component",
  "Product-preview-card-component",
  "QR-code-card",
  "Results-summary-component",
  "Stats-preview-card-component",
  "3-column-preview-card-component",
];
const list = document.querySelector("ul");

folders.forEach((element) => {
  const newLi = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.text = element;
  newLink.href = `./${element}/index.html`;
  newLi.appendChild(newLink);
  list.appendChild(newLi);
});
