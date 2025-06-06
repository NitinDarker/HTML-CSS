// let el1 = "<p>Initializing Hacking...</p>"
let el2 = "<div>Reading your files...</div>";
let el3 = "<div>Password Files detected...</div>";
let el4 = "<div>Sending all password files to the server...</div>";
let el5 = "<div>Cleaning up...</div>";
let el6 = "<div>Done</div>  ";

let help = document.querySelectorAll(".hack");
let dot = document.createElement("span");
dot.innerHTML = "...";

let i = 0;

function toggleHiddenAttr() {
  if (i >= help.length) {
    clearInterval(attrInterval);
    setTimeout(() => {
      clearInterval(dotInterval);
    }, 3000);
    dot.setAttribute("hidden", true);

    return;
  }
  xxx = help[i];
  if (xxx.hasAttribute("hidden")) {
    xxx.removeAttribute("hidden");
  } else {
    xxx.setAttribute("hidden", true);
  }
  help[i].append(dot);
  i++;
}

const attrInterval = setInterval(toggleHiddenAttr, 2000);

// const heck = document.querySelector(".hack");
// heck.append(dot);

function toggleHiddenDot() {
  if (dot.hasAttribute("hidden")) {
    dot.removeAttribute("hidden");
  } else {
    dot.setAttribute("hidden", true);
  }
}

const dotInterval = setInterval(toggleHiddenDot, 500);
