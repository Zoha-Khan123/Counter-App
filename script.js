let count = document.querySelector(`.count`);
let increase = document.querySelector(`.button1`);
let reset = document.querySelector(`.button2`);
let decrease = document.querySelector(`.button3`);
let count2 = 0


//Increase button setting
increase.onclick = () => {
  count.innerHTML = ++count2
  if (count2 < 0) {
    count.style.color = "Red"
  } else {
    count.style.color = "Green"
  }
}

//Decrease button setting
decrease.onclick = () => {
  count.innerHTML = --count2
  if (count2 < 0) {
    count.style.color = "Red"
  } else {
    count.style.color = "Green"
  }
}

//Reset button setting
reset.onclick = () => {
  count2 = 0
  count.innerHTML = count2
  if (count2 == 0) {
    count.style.color = "Black"
  }
}

