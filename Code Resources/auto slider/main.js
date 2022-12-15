const slider = document.getElementById("slider");
const slides = 4;


window.addEventListener("load", Slider());

function Slider() {
  let a = 100;
  setInterval(() => {
    slider.style = `margin-left: -${a}%`;
    a += 100;
    console.log(a);
    a = a == 400? 0 : a;
  }, 1000);
}



