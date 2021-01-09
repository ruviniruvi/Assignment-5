let rows = 2;
let columns = 1;

let cells = document.getElementsByTagName("td");
let cellList = [...cells];


for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    initializeCell(cell)
}


//Add rows

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
//Add columns
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


// sets currentColor based on the color selected from dropdown
function setColor(color) {
    currentColor = color;
}
