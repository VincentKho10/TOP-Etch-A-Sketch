const body = document.querySelector("body");
body.classList.add("col");

const griddiv = document.createElement("div");
griddiv.setAttribute("class", "griddiv col");

const btnsquares = document.createElement("button");
btnsquares.textContent = "n * n";
btnsquares.setAttribute("id", "btn_squares");

body.appendChild(btnsquares);
body.appendChild(griddiv);

const gridCreate = (n) => {
  for (let i = 0; i < n; i++) {
    const coldiv = document.createElement("div");
    coldiv.classList.add("row");
    coldiv.classList.add(i);
    for (let j = 0; j < n; j++) {
      const rowdiv = document.createElement("div");
      rowdiv.classList.add(j);
      rowdiv.addEventListener("pointerover", (ev) => {
      let red = Math.random()*255
      let green = Math.random()*255
      let blue = Math.random()*255
      
      while(red==255 && green==255 && blue==255){
        red+=25
        green+=25
        blue+=25
        if(red>255){
          red=255
        }
        if(green>255){
          green=255
        }
        if(blue>255){
          blue=255
        }
        console.log(red)
      //   setTimeout(()=>{},500)
      //   rowdiv.style.backgroundColor = `rgba(${red},${green},${blue},1)`;
        rowdiv.style.backgroundColor = `rgba(${red},${green},${blue},1)`;
      }
      rowdiv.style.backgroundColor = `rgba(${red},${green},${blue},1)`;
      });
      rowdiv.addEventListener("pointerout", () => {
        rowdiv.style.backgroundColor = "blue";
      });
      coldiv.appendChild(rowdiv);
    }

    griddiv.appendChild(coldiv);
  }
};

gridCreate(4);

btnsquares.addEventListener("click", () => {
  let sidenum = prompt("number of tile side (eg. 6)", 4);
  sidenum = parseInt(sidenum);

  const griddivchildren = griddiv.querySelectorAll(".griddiv > *");
  griddivchildren.forEach((v) => v.remove());
  gridCreate(sidenum);
});
