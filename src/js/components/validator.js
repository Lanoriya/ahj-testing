import luhn from "./luhn";
import yes from "../imgs/yes.png";
import no from "../imgs/no.png";

let input = document.querySelector(".card-input");
let inputBtn = document.querySelector(".validate-btn");
let imgs = document.querySelectorAll(".card-img");

inputBtn.addEventListener("click", () => {
  let container = document.querySelector(".press-container");
  let imgYes = document.createElement("img");
  let imgNo = document.createElement("img");
  imgYes.src = yes;
  imgNo.src = no;
  imgYes.classList.add("img-choose");
  imgNo.classList.add("img-choose");

  if (luhn(input.value) && input.value !== "") {
    if (document.querySelector(".img-choose")) {
      document.querySelector(".img-choose").remove();
    }
    container.prepend(imgYes);
  } else {
    if (document.querySelector(".img-choose")) {
      document.querySelector(".img-choose").remove();
    }
    container.prepend(imgNo);
  }
});

input.addEventListener("keyup", () => {
  imgs.forEach((img) => {
    img.style.opacity = 0.2;
  });

  let keys = input.value.split("").map(Number);

  switch (keys[0]) {
    case 1:
      const paypal = document.getElementById("paypal");
      paypal.style.opacity = 1;
      break;
    case 2:
      const mir = document.getElementById("mir");
      mir.style.opacity = 1;
      break;
    case 3:
      const exp = document.getElementById("exp");
      exp.style.opacity = 1;
      break;
    case 4:
      const visa = document.getElementById("visa");
      visa.style.opacity = 1;
      break;
    case 5:
      const master = document.getElementById("master");
      master.style.opacity = 1;
      break;
    case 6:
      const discover = document.getElementById("discover");
      discover.style.opacity = 1;
      break;
  }
});
