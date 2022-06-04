const btn = document.querySelectorAll("button");
let slider = document.getElementById("slider");
let innerSlider = document.querySelector(".slider-inner");
const box = document.querySelectorAll(".box");
let count = -1;

function Rclick() {
  if (count <= 6) {
    count++;
    innerSlider.appendChild(box[count]);
  } else if (count == 7) {
    innerSlider.appendChild(box[0]);
    count = 0;
  }
}

function Lclick() {
  if (count > -1) {
    innerSlider.prepend(box[count]);
    return count = count - 1;
  } else if (count == -1) {
    innerSlider.prepend(box[box.length - 1]);
    return count = 6;
  }
}

btn[0].addEventListener("click", Rclick);
btn[1].addEventListener("click", Lclick);