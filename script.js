let rows = 2;
let columns = 1;

let cells = document.getElementsByTagName("td");
let cellList = [...cells];


for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    initializeCell(cell)
}


//1

function addRow() {
    
    let Grid = document.getElementById("main");
    
    let newRow = document.createElement("tr");

    for(let i = 0; i < rows; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)
        // mark the cell as uncolored. when it is colored, remove class
        cell.classList.add("uncolored");
        newRow.appendChild(cell);
    }

    Grid.appendChild(newRow);
    rows++;
}
//2
function addColumn() {
    
    let Grid = document.getElementById("main");
    
    let allRows = document.createElement("tr");
    let x=0;

    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)
        
        allRows[x].appendChild(cell);
        x++;
    }

    rows++;
}

//3
function removeRow() {
    //grab the main grid
    let Grid = document.getElementById("main");
    
    Grid.deleteRow(rows-1);

    rows--;
}


//4
function removeColumns() {
    
    let Grid = document.getElementById("main");
    
    let allRows = document.querySelectorAll("tr");

    let counter = 0;



    for(let i = 0; i < rows; i++) {
    
        allRows[counter].removeChild(allRows[counter].lastChild);

        counter++;
       
    }

    columns--;


}


//5
function setColor(color) {
    currentColor = color;
}

//6
function changeColor() {
    this.style.backgroundColor = currentColor;

    // remove class "uncolored" because cell is now colored
    this.classList.remove("uncolored")
}



let currentColor = `${document.getElementById("color").value}`


function initializeCell(cell) {
   
    cell.addEventListener("click", changeColor);
    // give cell as class called "uncolored"
    cell.classList.add("uncolored");

   
}