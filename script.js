const runScript = function () {
  const dogCage = document.createElement("div");
  const dogInject = document.createElement("img");
  const barking = document.createElement("audio");

  barking.className = "bark-audio";
  barking.src = chrome.runtime.getURL("pictures/bark.mp3");

  dogCage.style.position = "fixed";
  dogCage.className = "dog-cage-item";
  dogCage.style.bottom = "0";
  dogCage.style.width = "1600px";
  dogCage.style.height = "80px";

  dogInject.src = chrome.runtime.getURL("pictures/dog-midwalk.png");
  dogInject.className = "dog-pic-item";
  dogInject.style.position = "absolute";
  dogInject.style.width = "80px";
  dogInject.style.height = "80px";

  dogCage.appendChild(dogInject);
  document.body.appendChild(dogCage);
  document.body.appendChild(barking);
};

runScript();

function bark() {
  const barked = document.querySelector(".bark-audio");
  barked.play();
}

function move() {
  let id = null;
  const dog = document.querySelector(".dog-pic-item");
  const cage = document.querySelector(".dog-cage-item");
  const cageWidth = parseInt(cage.style.width);
  const dogWidth = parseInt(dog.style.width);
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == cageWidth - dogWidth) {
      i = 0;
      clearInterval(id);
      clearInterval(id2);
    } else {
      pos++;
      dog.style.left = pos + "px";
    }
  }

  let i = 0;
  const pics = ["pictures/dog-midwalk.png", "pictures/dog-hop2.png"];
  function toggle() {
    dog.src = chrome.runtime.getURL(pics[i]);
    i = (i + 1) % pics.length;
  }
  let id2 = setInterval(toggle, 700);
}

const dog = document.querySelector(".dog-pic-item");
dog.addEventListener("click", () => {
  move();
});

dog.addEventListener("mouseover", bark);
