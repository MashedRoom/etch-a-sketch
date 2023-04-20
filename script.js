const submitBtn = document.querySelector(".submit")
const gridContainer = document.getElementById("gridContainer")
let color = document.getElementById("colorPick")
let gridSize = document.getElementById("gridSize")
let outputSize = document.getElementById("outputSize")

function makeGrid(size){
    for (let i=0; i<size; i++){
        let rowContainer = document.createElement("div")
        rowContainer.classList.add("rowContainer")
        for (let x=0; x<size; x++){
            let create = document.createElement("div")
            create.classList.add("grid")
            rowContainer.appendChild(create)
            gridContainer.appendChild(rowContainer)
        }
    }
}

outputSize.innerText = `${gridSize.value} x ${gridSize.value}`
gridSize.oninput = function() {
    outputSize.innerHTML = `${this.value} x ${this.value}`;
    let rowContainer = document.querySelectorAll(".rowContainer")
        rowContainer.forEach((box)=>{
            box.remove()
        })
        makeGrid(gridSize.value)
        let grid = document.querySelectorAll(".grid")
        grid.forEach((e)=>{
            e.addEventListener("mouseover", ()=>{
                e.style.backgroundColor = color.value
            })
        })
}

makeGrid(11)

let grid = document.querySelectorAll(".grid")
grid.forEach((e)=>{
    e.addEventListener("mouseover", ()=>{
        e.style.backgroundColor = color.value
    })
})