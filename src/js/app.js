import visa from "./imgs/card-visa.png";
import master from "./imgs/card-master.png";
import mir from "./imgs/card-mir.png";
import paypal from "./imgs/card-paypal.png";
import exp from "./imgs/card-exp.png";
import discover from "./imgs/card-discover.png";

let btn = document.querySelectorAll(".card-btn");
let cardsList = {
  visa: visa,
  master: master,
  mir: mir,
  paypal: paypal,
  exp: exp,
  discover: discover,
};

function cardGenerator() {
  let counter = -1;
  for (let key in cardsList) {
    counter++;
    let img = document.createElement("img");
    img.src = cardsList[key];
    img.id = key;
    img.classList.add("card-img");
    btn[counter].appendChild(img);
  }
}

cardGenerator();
