const colors = ["red" , "teal", "aqua", "#1f1f2f"];
let colorText = document.querySelector(".color-text");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let colorRandom = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorRandom];
  colorText.textContent = colors[colorRandom];
})