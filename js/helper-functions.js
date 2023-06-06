export {
    cover, menuBar1, menuBar2, menuBar3, navLinks, menuBtn
}

const cover = document.querySelector(".cover");
const menuBars = document.querySelector(".menuBars");
const menuBar1 = document.querySelector(".menuBar1");
const menuBar2 = document.querySelector(".menuBar2");
const menuBar3 = document.querySelector(".menuBar3");
const navLinks = document.querySelector(".navLinks");
const menuBtn = document.querySelector(".menuBars");
export default menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBar1.classList.toggle("active");
  menuBar2.classList.toggle("active");
  menuBar3.classList.toggle("active");
  menuBars.classList.toggle("active");
  cover.classList.toggle("active");
});
