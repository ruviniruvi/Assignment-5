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
    rows++;

    Grid.appendChild(newRow);
    //rows++;
}

//2
function addColumn() {
    
    let Grid = document.getElementById("main");
    
    let allRows = document.querySelectorAll("tr");
    let x=0;

    for(let i = 0; i < rows; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)
        
        allRows[x].appendChild(cell);
        x++;
    }

    columns++;
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
//7
function fillUncolored() {
   
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...allCells];

    // filter out the cells that are colored
    const uncolored = allCellsList.filter(cell => {
        return cell.classList.contains("uncolored");
    });

    // change the background color of each uncolored cell and remove "uncolored" class
    uncolored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}


//8

function fillAllCurrent() {
    
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}
//9
function clearAllCells() {
    
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    // remove "uncolored" class, change background color to red
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.classList.add("uncolored");
    })
}