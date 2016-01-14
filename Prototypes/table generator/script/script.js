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

    // In this part we call have a function to change the values of the second table for buttons
    // with this we can control the main table giving actions to the button.

    function addButtons(){
        var secondDiv = document.getElementById("tableCopy");
        var copyTable = secondDiv.getElementsByTagName("table");
        var copyRow   = copyTable[0].getElementsByTagName('tr');

        for (var p = 0; p < copyRow.length; p++) {
            var eachRow = copyRow[p].getElementsByTagName('td');

            for (var n = 0; n < eachRow.length; n++) {
                var eachCell = eachRow[n];

                eachCell.innerHTML = '<button>Works</button>';
            };
        };
    }

    // The follow function allow to see the main table that is behind the copy,
    // this give to the div container the same measures as the copy table for
    // hide the overfow in the main table

    function adjustMeasures(){
        var secondDiv = document.getElementById("tableCopy");
        var copyTable = secondDiv.getElementsByTagName("table");

        var getHeight = copyTable[0].offsetHeight;
        var getWidth  = copyTable[0].offsetWidth;

        document.getElementById('frameTable').style.height = getHeight + 'px';
        document.getElementById('frameTable').style.width = getWidth + 'px';
    }

    addButtons();
    adjustMeasures()

    function buttonsControl(){

        var topHalf  = Math.floor(cols / 2);
        var leftHalf = Math.floor(rows / 2);
        console.log(topHalf);
        console.log(leftHalf);
        var secondDiv = document.getElementById("tableCopy");
        var copyTable = secondDiv.getElementsByTagName("table");
        var copyRow   = copyTable[0].getElementsByTagName('tr');
        var copyCell  = copyRow[0].getElementsByTagName("td");
        console.log(copyCell);

        for (var b = 0; b < topHalf; b++) {
            console.log(b);
            copyCell[b].getElementsByTagName('button')[0].addEventListener("click", addTopRow);
            
        };
    }
    buttonsControl()
}

// The next functions add rows and cells top-bottom and right-left.

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
    var rowLength = getRow.length - 2; //Because I first create the row I need to back 2 index positions.
    var lastRow   = getRow[rowLength].getElementsByTagName("td");

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