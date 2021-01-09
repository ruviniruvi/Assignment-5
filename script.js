let rows = 2;
let colums = 1;



const addRow=document.getElementsByTagName


function addRow() {
    
    let Grid = document.getElementById("main");
    
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)
        // mark the cell as uncolored. when it is colored, remove class
        cell.classList.add("uncolored");
        newRow.appendChild(cell);
    }

    Grid.appendChild(newRow);
    rows++;
}