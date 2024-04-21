let clickSwitch = document.querySelector(".switch");
let onBulb = document.querySelector(".bulb-on");
let offBulb = document.querySelector(".bulb-off");

clickSwitch.onclick = () => {
  clickSwitch.classList.toggle("active");
  onBulb.classList.toggle("active");
  offBulb.classList.toggle("active");
};

