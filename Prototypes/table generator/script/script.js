/* with this function we can read the input values to create the table 
depending on the number of cols and rows that the user required 
Also,with the extreme number in the left and the top we start the counting iterator
and we build the location coordinates */

function createTable() {

    var rows           = document.getElementById("setRows").value;
    var cols           = document.getElementById("setCols").value;
    var xNegativeLimit = (cols / 2) - cols;
    var yPositiveLimit = (rows / 2);
    var xAxisPosition;
    var yAxisPosition;
    var table;

    table = "<table id='myTable'>";
    table += "<tbody>";

    for (var i = 0; i < rows; i++) {
         table += "<tr>";

         for (var j = 0; j < cols; j++) {
            xAxisPosition = Math.round(xNegativeLimit) + j;
            yAxisPosition = Math.floor(yPositiveLimit) - i;
            table += "<td>" + xAxisPosition + "," + yAxisPosition + "</td>";
         };
         table +="</tr>";
     }; 

    table += "</table>";
    table += "</tbody>";

    document.getElementById("tableHolder").innerHTML= table;
    document.getElementById("tableCopy").innerHTML= table;
  
}

function addTopRow() {
    var getTable = document.getElementById("myTable");
    var newRow   = getTable.insertRow(0);

    var getRow   = getTable.getElementsByTagName("tr");
    var firstRow = getRow[1].getElementsByTagName("td");

    for (var r = 0; r < firstRow.length; r++) {
        var addCells    = newRow.insertCell(r);
        var splitValue = firstRow[r].innerHTML.split(",")
        var xNewRow    = parseInt(splitValue[0]);
        var yNewRow    = parseInt(splitValue[1]) + 1;

        addCells.innerHTML = xNewRow + "," + yNewRow;
    };
}

function addRightCol(){
    var getTable   = document.getElementById("myTable");
    var getRow     = getTable.getElementsByTagName("tr");
    var cellLength = getRow[0].getElementsByTagName("td").length;

    for (var c = 0; c < getRow.length; c++) {
        var addCell    = getRow[c].insertCell(-1);
        var lastCell   = getRow[c].getElementsByTagName("td");
        var splitValue = lastCell[cellLength - 1].innerHTML.split(",")
        var xNewCol    = parseInt(splitValue[0]) + 1;
        var yNewCol    = parseInt(splitValue[1]);

        addCell.innerHTML = xNewCol + "," + yNewCol;

    };
}

function addBottomRow() {
    var getTable  = document.getElementById("myTable");
    var newRow    = getTable.insertRow(-1);

    var getRow    = getTable.getElementsByTagName("tr");
    var rowLength = getRow.length - 1; //2
    // var lastRow   = getRow[rowLength].getElementsByTagName("td");
    var lastRow   = getRow[2].getElementsByTagName("td");

    for (var r = 0; r < lastRow.length; r++) {
        var addCells    = newRow.insertCell(r);
        var splitValue = lastRow[r].innerHTML.split(",")
        var xNewRow    = parseInt(splitValue[0]);
        var yNewRow    = parseInt(splitValue[1]) - 1;

        addCells.innerHTML = xNewRow + "," + yNewRow;
    };
}

function addLeftCol(){
    var getTable = document.getElementById("myTable");
    var getRow   = getTable.getElementsByTagName("tr");

    for (var c = 0; c < getRow.length; c++) {
        var addCell    = getRow[c].insertCell(0);
        var firstCell  = getRow[c].getElementsByTagName("td");
        var splitValue = firstCell[1].innerHTML.split(",")
        var xNewCol    = parseInt(splitValue[0]) - 1;
        var yNewCol    = parseInt(splitValue[1]);

        addCell.innerHTML = xNewCol + "," + yNewCol;

    };
}
