const runScript = function () {
  const dogCage = document.createElement("div");
  const dogInject = document.createElement("img");
  const barking = document.createElement("audio");

  barking.className = "bark-audio";
  barking.src = chrome.runtime.getURL("pictures/bark.mp3");

  dogCage.style.position = "fixed";
  dogCage.className = "dog-cage-item";
  dogCage.style.bottom = "0";
  dogCage.style.width = "2000px";
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
  const barkPicker = Math.floor(Math.random() * 3);
  const barks = [
    "pictures/bark.mp3",
    "pictures/bark1.mp3",
    "pictures/bark2.mp3",
  ];
  const barked = document.querySelector(".bark-audio");
  barked.src = chrome.runtime.getURL(barks[barkPicker]);
  barked.play();
}

function move() {
  let id = null;
  const dog = document.querySelector(".dog-pic-item");
  const cage = document.querySelector(".dog-cage-item");
  const cageWidth = parseInt(cage.style.width);
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
    if (pos == cageWidth) {
      dog.style.left = "0px";
      dog.src = chrome.runtime.getURL("pictures/dog-midwalk.png");
      i = 0;
      clearInterval(id);
      clearInterval(id2);
    } else {
      pos++;
      dog.style.left = pos + "px";
    }
  }

  let i = 1;
  const pics = ["pictures/dog-midwalk.png", "pictures/dog-hop2.png"];
  function toggle() {
    dog.src = chrome.runtime.getURL(pics[i]);
    i = (i + 1) % pics.length;
  }
  let id2 = setInterval(toggle, 400);
}

const dog = document.querySelector(".dog-pic-item");
dog.addEventListener("click", () => {
  move();
});

dog.addEventListener("mouseover", bark);
