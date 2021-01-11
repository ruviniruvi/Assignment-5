let Grid = document.getElementById("grid");
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


//1

addRow.addEventListener("click", function() {
    
   
    
    let newRow = document.createElement("tr");

    for(let i = 0; i < columns; i++) {
        let addCell = document.createElement("td");
        
        initializeCell(addCell);
        
        //cell.classList.add("uncolored");
        newRow.appendChild(addCell);
       
    }
    rows++;

    Grid.appendChild(newRow);
 
});

//2
addColumn.addEventListener("click", function() {
    
   
    
    let allRows = document.querySelectorAll("tr");
    let x=0;

    for(let i = 0; i < allRows.length; i++) {
        let addCell = document.createElement("td");
        
        initializeCell(addCell)
        
        allRows[i].appendChild(addCell);
       
    }

    columns++;
});

//3
removeRow.addEventListener("click", function() {
    
    Grid.lastElementChild.remove()
   

    rows--;
});


//4
removeColumn.addEventListener("click", function() {
    
    
    let allRows = document.querySelectorAll("tr");

  //  let counter = 0;



    for(let i = 0; i < allRows.length; i++) {
    
        allRows[i].deleteCell(columns-1);

        counter++;
       
    }

    columns--;


})




let currentColor = `${document.getElementById("color").value}`
//5
/*function setColor(color) {
    currentColor = color;
}*/
//6
function changeColor() {
    this.style.backgroundColor = currentColor;

    // remove class "uncolored" because cell is now colored
    this.classList.remove("uncolored")
}

//5
function setColor(color) {
    currentColor = color;
}


    function applyColor(color) {
        currentColor = color;}

//7
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


//8

fillAllCurrent.addEventListener("click", function(){
    
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
});
//9
 clearAllCells.addEventListener("click", function(){
    
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.classList.add("uncolored");
    })
})

function initializeCell(cell) {
    // change color on click
    cell.addEventListener("click", applyColor);
    // give cell as class called "uncolored"
    cell.classList.add("grid-item");
    cell.classList.add("uncolored");
    


     //10:
      
    
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
    });
}