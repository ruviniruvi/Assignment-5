const Grid = document.getElementById("grid");

let columns = 1;
let rows = 1;

let getColor = false;

const addRow = document.getElementById("addRow");
const addColumn = document.getElementById("addColumn");


const removeRow = document.getElementById("removeRow");
const removeColumn = document.getElementById("removeColumn");

const fillUncolored = document.getElementById("fillUncolored");
const fillAllCurrent = document.getElementById("fillAllCurrent");
const clearAllCells = document.getElementById("clearAllCells");


//feature 01

addRow.addEventListener("click", function() {
    
   
    let newRow = document.createElement("tr");

    for(let i = 0; i < columns; i++) {
        let addCell = document.createElement("td");
        
        initializeCell(addCell);
       
        newRow.appendChild(addCell);
       
    }
    rows++;

    Grid.appendChild(newRow);
 
});

// Feature 02
addColumn.addEventListener("click", function() {
    
   
    
    let allRows = document.querySelectorAll("tr");
    //let x=0;

    for(let i = 0; i < allRows.length; i++) {
        let addCell = document.createElement("td");
        
        initializeCell(addCell)
        
        allRows[i].appendChild(addCell);
       
    }

    columns++;
});

// Feature 03
removeRow.addEventListener("click", function() {
    
    Grid.lastElementChild.remove()
   

    rows--;
});


//Feature 04
removeColumn.addEventListener("click", function() {
    
    
    let allRows = document.querySelectorAll("tr");

  //  let counter = 0;

    for(let i = 0; i < allRows.length; i++) {
    
        allRows[i].deleteCell(columns-1);

       // counter++;
       
    }

    columns--;


})


// Feature 05

let currentColor = `${document.getElementById("color").value}`

function setColor(color) {
    currentColor = color;
}
// Feature 06
function changeColor() {
    this.style.backgroundColor = currentColor;

    // remove class "uncolored" because cell is now colored
    this.classList.remove("uncolored")
}


    function applyColor(color) {
        currentColor = color;}

// Feature 07


fillUncolored.addEventListener("click", function() {
   
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...allCells];

   
    const uncolored = allCellsList.filter(cell => {
        return cell.classList.contains("uncolored");
    });

    
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
});


// Feature 08

fillAllCurrent.addEventListener("click", function(){
    
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...allCells];

    
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
});

//Feature 09


 clearAllCells.addEventListener("click", function(){
    
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [... allCells];

    
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'white';
        
    })
})

function initializeCell(cell) {
    
    cell.addEventListener("click", changeColor);
    
    cell.classList.add("grid-item");
    cell.classList.add("uncolored");
    


     // Feature 10
      
    
    cell.addEventListener("mousedown", e => {
        getColor = true
    });

   
    cell.addEventListener("mousemove", e => {
        if ( getColor) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });

    
    cell.addEventListener("mouseup", e => {
        if ( getColor) {
            getColor = false;
        }
    })
}