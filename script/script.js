// The main functions that are called by each button that in turn calls the specific functions that it needs

function topLeftButton() {
    addTopRow();
    addLeftCol();

    deleteBottomRow();
    deleteRightCol();

    positionUpLeft();
}

function topButton() {
    addTopRow();

    deleteBottomRow();

    positionUp();
}

function topRightButton() {
    addTopRow();
    addRightCol();

    deleteBottomRow();
    deleteLeftCol();

    positionUpRight();
}

function leftButton() {
    addLeftCol();

    deleteRightCol();

    positionLeft();
}

function rightButton() {
    addRightCol();

    deleteLeftCol();

    positionRight();
}

function bottomLeftButton() {
    addBottomRow();
    addLeftCol();

    deleteTopRow();
    deleteRightCol();

    positionDownLeft();
}

function bottomButton() {
    addBottomRow();

    deleteTopRow();

    positionDown();
}

function bottomRightButton() {
    addBottomRow();
    addRightCol();

    deleteTopRow();
    deleteLeftCol();

    positionDownRight();
}

// Functions that add the new rows and cols to the main table

function addTopRow() {
    var theTable, newRow, firstCells;

    var theTable   = document.getElementById('main_table');
    var newRow  = theTable.insertRow(0);
    var firstCells = theTable.getElementsByTagName('tr')[1].getElementsByTagName("td");

    for (var i = 0; i < firstCells.length; i++) {
        newRow.insertCell(i);
    };
}

function addRightCol() {
    var tableRows;
    
    var tableRows = document.getElementById('main_table').getElementsByTagName('tr');

    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].insertCell(-1);
    };
}

function addBottomRow() {
    var theTable, newRow, firstCells;

    var theTable   = document.getElementById('main_table');
    var newRow  = theTable.insertRow(-1);
    var firstCells = theTable.getElementsByTagName('tr')[1].getElementsByTagName("td");

    for (var i = 0; i < firstCells.length; i++) {
        newRow.insertCell(i);
    };
}

function addLeftCol() {
    var tableRows;

    var tableRows = document.getElementById('main_table').getElementsByTagName('tr');

    for (var i = 0; i < tableRows.length; i++) {
        tableRows[i].insertCell(0);
    };
}

// funcitons that delete the opposite columns and rows to avoid the overflow

function deleteTopRow() {
    var theTable;

    var theTable  = document.getElementById('main_table');
    theTable.deleteRow(-1);
}

function deleteRightCol() {
    var rowsTable;
    
    var rowsTable = document.getElementById('main_table').getElementsByTagName('tr');
    for (var i = 0; i < rowsTable.length; i++) {
        rowsTable[i].deleteCell(0);
    };
}

function deleteBottomRow() {
    var theTable;

    var theTable  = document.getElementById('main_table');
    theTable.deleteRow(0);
}

function deleteLeftCol() {
    var rowsTable;

    var rowsTable = document.getElementById('main_table').getElementsByTagName('tr');
    for (var i = 0; i < rowsTable.length; i++) {
        rowsTable[i].deleteCell(-1);
    };
}

// The following code is to know the current position of the center cell

var currentPosition = "0,0";
console.log(currentPosition);

function positionUpLeft() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) - 1;
    var positionY          = parseInt(independentVelues[1]) + 1;

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function positionUp() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]);
    var positionY          = parseInt(independentVelues[1]) + 1;

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function positionUpRight() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) + 1;
    var positionY          = parseInt(independentVelues[1]) + 1;

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function positionLeft() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) - 1;
    var positionY          = parseInt(independentVelues[1]);

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function positionRight() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) + 1;
    var positionY          = parseInt(independentVelues[1]);

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function positionDownLeft() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) - 1;
    var positionY          = parseInt(independentVelues[1]) - 1;
    
    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function positionDown() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]);
    var positionY          = parseInt(independentVelues[1]) - 1;
    
    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function positionDownRight() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) + 1;
    var positionY          = parseInt(independentVelues[1]) - 1;
    
    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}
