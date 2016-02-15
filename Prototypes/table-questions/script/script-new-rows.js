
function addTopRow() {
    var theTable, newTopRow, firstCells;

    var theTable  = document.getElementById('myTable');
    var newTopRow = theTable.insertRow(0);
    var firstCells  = theTable.getElementsByTagName('tr')[1].getElementsByTagName("td");

    for (var i = 0; i < firstCells.length; i++) {
        var newCells, lastCoor, newXasis, newtYasis;

        var newCells = newTopRow.insertCell(i);
        var lastCoor  = firstCells[i].innerHTML.split(",");
        var newXasis = parseInt(lastCoor[0]);
        var newtYasis = parseInt(lastCoor[1]) + 1;

        newCells.innerHTML = newXasis + ',' + newtYasis;
    };
}


function addBottomRow() {
    var theTable, rowsLenght, firstCells, newTopRow;

    var theTable   = document.getElementById('myTable');
    var rowsLenght = theTable.getElementsByTagName('tr').length - 1;
    var firstCells = theTable.getElementsByTagName('tr')[rowsLenght].getElementsByTagName("td");
    var newTopRow  = theTable.insertRow(-1);

    for (var i = 0; i < firstCells.length; i++) {
        var newCells, lastCoor, newXasis, newtYasis;

        var newCells = newTopRow.insertCell(i);
        var lastCoor  = firstCells[i].innerHTML.split(",");
        var newXasis = parseInt(lastCoor[0]);
        var newtYasis = parseInt(lastCoor[1]) - 1;

        newCells.innerHTML = newXasis + ',' + newtYasis;
    };
}

function addLeftCol() {
    var rowsTable;

    var rowsTable = document.getElementById('myTable').getElementsByTagName('tr');

    for (var i = 0; i < rowsTable.length; i++) {
        var newLeftCol, leftLatsCoor, lastCoor, newXasis, newtYasis;

        var newLeftCol   = rowsTable[i].insertCell(0);
        var leftLatsCoor = rowsTable[i].getElementsByTagName('td')[1];
        var lastCoor     = leftLatsCoor.innerHTML.split(",");
        var newXasis     = parseInt(lastCoor[0]) - 1;
        var newtYasis    = parseInt(lastCoor[1]);

        newLeftCol.innerHTML = newXasis + ',' + newtYasis;
    };
}

function addRightCol() {
    var rowsTable, colslenght;

    var rowsTable = document.getElementById('myTable').getElementsByTagName('tr');
    var colslenght    = rowsTable[0].getElementsByTagName('td').length - 1;

    for (var i = 0; i < rowsTable.length; i++) {
        var newRightCol, rightLatsCoor, lastCoor, newXasis, newtYasis;

        var newRightCol   = rowsTable[i].insertCell(-1);
        var rightLatsCoor = rowsTable[i].getElementsByTagName('td');
        var lastCoor      = rightLatsCoor[colslenght].innerHTML.split(",");
        var newXasis      = parseInt(lastCoor[0]) + 1;
        var newtYasis     = parseInt(lastCoor[1]);

        newRightCol.innerHTML = newXasis + ',' + newtYasis;
    };
}