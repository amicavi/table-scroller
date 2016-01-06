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

function addRow() {
    var getTable = document.getElementById("myTable");
    var row      = getTable.insertRow(0);

    var allRows  = document.getElementsByTagName("tr");
    var firstRow = allRows[1].getElementsByTagName("td").length;

    for (var r = 0; r < firstRow; r++) {
        row.insertCell(r);
    };



    // var newCell = row.insertCell(r);
    // newCell.innerHTML = "coordenate"

    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // cell1.innerHTML = "NEW CELL1";
    // cell2.innerHTML = "NEW CELL2";
    // cell3.innerHTML = "NEW CELL3";
}

function addCol(){
    var getTable = document.getElementById("myTable");
    var tableRows  = getTable.getElementsByTagName("tr");

    for (var c = 0; c < tableRows.length; c++) {
        tableRows[c].insertCell();
    };
}

