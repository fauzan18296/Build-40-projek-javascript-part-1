const hexColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorText = document.querySelector(".color-text");

btn.addEventListener("click", () => {
 let hex = "#";
 const getRandomColor = () => Math.floor(Math.random() * hexColors.length);
 for(let i = 0; i<6; i++) {
  hex += hexColors[getRandomColor()];
 }
 document.body.style.backgroundColor = hex;
 colorText.textContent = hex;
})