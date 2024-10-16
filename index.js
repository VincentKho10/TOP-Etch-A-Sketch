const body = document.querySelector("body");
body.classList.add("col");

const griddiv = document.createElement("div");
griddiv.setAttribute("class", "griddiv col");

const actiondiv = document.createElement("div");
actiondiv.setAttribute("class", "actiondiv row");

const btnsquares = document.createElement("button");
btnsquares.textContent = "n * n";
btnsquares.setAttribute("id", "btn_squares");

const btnclear = document.createElement("button");
btnclear.textContent = "clear";
btnclear.setAttribute("id", "btn_clear");

actiondiv.append(btnsquares, btnclear);
body.append(actiondiv,griddiv);


let drawpad = [];

const gridCreate = (n) => {
  for (let i = 0; i < n; i++) {
    const coldiv = document.createElement("div");
    coldiv.classList.add("row");
    coldiv.classList.add(i);
    for (let j = 0; j < n; j++) {
      let red = Math.random() * 255;
      let green = Math.random() * 255;
      let blue = Math.random() * 255;
      let opacity = 0.33
      const rowdiv = document.createElement("div");
      rowdiv.classList.add(j);
      rowdiv.addEventListener("pointerover", (ev) => {
        opacity+=0.1
        rowdiv.style.opacity = opacity
        rowdiv.style.backgroundColor = `rgb(${red},${green},${blue})`;
      });
      // rowdiv.addEventListener("pointerout", () => {z
      rowdiv.addEventListener('mousedown', ()=>{
        opacity += 0.1
      })
      coldiv.appendChild(rowdiv);
      drawpad.push(rowdiv);
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

btnclear.addEventListener("click", ()=>{
  for(let dp of drawpad){
    dp.style.opacity = 1
    dp.style.backgroundColor = 'blue'
  }
})