const burger = document.getElementById("burger");
const menuPanel = document.getElementById("menu-panel-id");
const closeBtn = document.getElementById("closeBtn");

burger.addEventListener("click", () => {
  menuPanel.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});