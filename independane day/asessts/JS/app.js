const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");

menuIcon.addEventListener("click", function () {
  navList.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".sticky-header");
  if (window.scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

const education = document.querySelector("#edu");
const eduPara = document.querySelector("#eduText");
const food = document.querySelector("#food");
const foodPara = document.querySelector("#foodText");
const medical = document.querySelector("#med");
const medPara = document.querySelector("#medText");

food.addEventListener("click", () => {
  foodPara.classList.toggle("hidden");
  food.textContent = foodPara.classList.contains("hidden")
    ? "Read More"
    : "Read Less";
});
education.addEventListener("click", () => {
  eduPara.classList.toggle("hidden");
  education.textContent = eduPara.classList.contains("hidden")
    ? "Read More"
    : "Read Less";
});
medical.addEventListener("click", () => {
  medPara.classList.toggle("hidden");
  medical.textContent = medPara.classList.contains("hidden")
    ? "Read More"
    : "Read Less";
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

let valueCounter = document.querySelector(".donate-counter");
const donateBox = document.querySelector(".box");
const increment = document.querySelector("#increement");
const decreement = document.querySelector("#decreement");
const addAmount = document.querySelector("#add");
const div = document.querySelector(".amount");
const submit = document.querySelector("#submit");

// let value = 0
let value = parseInt(valueCounter.textContent);
increment.addEventListener("click", () => {
  value += 100;

  valueCounter.textContent = value;
  donateBox.style.backgroundColor = "lawngreen";
  donateBox.style.color = "black";
});

decreement.addEventListener("click", () => {
  if (value > 0) {
    value -= 100;
    valueCounter.textContent = value;
  } else if (value === 0) {
    decreement.disabled = true;
  }

  donateBox.style.backgroundColor = "darkred";
  donateBox.style.color = "white";
});

addAmount.addEventListener("click", () => {
  div.textContent = value;
  value = 0;
  valueCounter.textContent = value;
  donateBox.style.backgroundColor = "whitesmoke";
  donateBox.style.color = "black";
});

submit.addEventListener("click", () => {
  alert("You Donate " + div.textContent + " rupees To Saylani");
  div.textContent = "";
});

