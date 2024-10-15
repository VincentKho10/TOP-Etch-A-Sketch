const body = document.querySelector("body");
body.classList.add('col')

const griddiv = document.createElement('div');
griddiv.setAttribute("class", "griddiv col")

const btnsquares = document.createElement('button')
btnsquares.textContent = "n * n"
btnsquares.setAttribute('id', 'btn_squares')

body.appendChild(btnsquares)
body.appendChild(griddiv)

const gridCreate = (n)=>{
    for (let i = 0; i < n; i++) {
        const coldiv = document.createElement("div");
        coldiv.classList.add("row");
        coldiv.classList.add(i);
        for (let j = 0; j < n; j++) {
            const rowdiv = document.createElement("div");
            rowdiv.classList.add(j);
            // rowdiv.addEventListener('pointerover', ()=>rowdiv.style.backgroundColor = 'red')
            // rowdiv.addEventListener('pointerout', ()=>{
            //     setTimeout(()=>rowdiv.style.backgroundColor = 'blue',500)
            // })
            coldiv.appendChild(rowdiv);
        }
        griddiv.appendChild(coldiv);
    }
}

gridCreate(4)

btnsquares.addEventListener('click', ()=>{
    let sidenum = prompt("number of tile side (eg. 6)", 4)
    sidenum = parseInt(sidenum)
    
    const griddivchildren = griddiv.querySelectorAll(".griddiv > *")
    griddivchildren.forEach((v)=>v.remove())
    gridCreate(sidenum)
})