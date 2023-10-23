function myHamburger(x) {
  x.classList.toggle("change");
  var menu = document.querySelector(".menu");
  menu.classList.toggle("change");
  const containerMain = document.getElementsByTagName("BODY")[0];
  containerMain.classList.toggle("color");
}

function myFeatures() {
  var arrowUp = document.querySelector(".arrow-up");
  var arrowDown = document.querySelector(".arrow-down");
  const dropdownOne = document.getElementById("dropdown1");
  dropdownOne.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  arrowDown.classList.toggle("hidden");
}

function myCompany() {
  var upArrow = document.querySelector(".up-arrow");
  var downArrow = document.querySelector(".down-arrow");
  const dropdownTwo = document.getElementById("dropdown2");
  dropdownTwo.classList.toggle("hidden");
  upArrow.classList.toggle("hidden");
  downArrow.classList.toggle("hidden");
}
