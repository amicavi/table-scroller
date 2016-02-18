// The main functions that are called by each button that in turn calls the specific functions that it needs

function topLeftButton() {
    addTopRow();
    addLeftCol();

    deleteBottomRow();
    deleteRightCol();
}

function topButton() {
    addTopRow();

    deleteBottomRow();
}

function topRightButton() {
    addTopRow();
    addRightCol();

    deleteBottomRow();
    deleteLeftCol();
}

function leftButton() {
    addLeftCol();

    deleteRightCol();
}

function rightButton() {
    addRightCol();

    deleteLeftCol();
}

function bottomLeftButton() {
    addBottomRow();
    addLeftCol();

    deleteTopRow();
    deleteRightCol();
}

function bottomButton() {
    addBottomRow();

    deleteTopRow();
}

function bottomRightButton() {
    addBottomRow();
    addRightCol();

    deleteTopRow();
    deleteLeftCol();
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
