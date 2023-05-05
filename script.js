const folders = [
  "Interactive-rating-component",
  "NFT-preview-card-component",
  "Order-summary-component",
  "Profile-card-component",
  "Product-preview-card-component",
  "QR-code-card",
  "Results-summary-component",
  "Stats-preview-card-component",
  "Social-proof-section",
  "3-column-preview-card-component",
];

folders.forEach((element) => {
  const section = document.querySelector(".projects");

  const newCard = document.createElement("article");
  const newContainerImg = document.createElement("div");
  const newImg = document.createElement("img");
  const newContainerInfos = document.createElement("div");
  const newTitle = document.createElement("h2");
  const newLink = document.createElement("a");

  newCard.className = "card";

  newContainerImg.className = "container-screen";
  newImg.src = `./${element}/images/screenshot.webp`;
  newImg.alt = `${element} screenshot`;
  newImg.loading = "lazy";

  newContainerInfos.className = "container-infos";
  newTitle.innerText = element.replace(/-/g, " ");
  newLink.innerText = "Preview";
  newLink.href = `./${element}/index.html`;
  newLink.target = "_blank";
  newLink.role = "button";

  newContainerImg.appendChild(newImg);
  newContainerInfos.appendChild(newTitle);
  newContainerInfos.appendChild(newLink);

  newCard.appendChild(newContainerImg);
  newCard.appendChild(newContainerInfos);

  section.appendChild(newCard);
});
