function topLeftButton() {
    addTopRow();
    addLeftCol();
}

function topButton() {
    addTopRow();
}

function topRightButton() {
    addTopRow();
    addRightCol();
}

function leftButton() {
    addLeftCol();
}

function rightButton() {
    addRightCol();
}

function bottomLeftButton() {
    addBottomRow();
    addLeftCol();
}

function bottomButton() {
    addBottomRow();
}

function bottomRightButton() {
    addBottomRow();
    addRightCol();
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