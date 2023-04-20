const runScript = function () {
  const dogInject = document.createElement("img");
  dogInject.className = "dog-element-class";
  dogInject.src = chrome.runtime.getURL("pictures/dog-sitting.png");
  dogInject.style.position = "fixed";
  dogInject.style.bottom = "0";
  dogInject.style.width = "70px";
  dogInject.style.height = "30px";
  document.body.appendChild(dogInject);
};

runScript();
