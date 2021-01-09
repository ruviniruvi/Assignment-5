let rows = 2;
let columns = 1;



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

function removeRows() {
    
    let Grid = document.getElementById("main");
    
    Grid.deleteRow(rows-1);
    rows--;
}

function removeColumns() {
    
    let Grid = document.getElementById("main");
    
    Grid.deleteColumns(columns-1);
    columns--;
}