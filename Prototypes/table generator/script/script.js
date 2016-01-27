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

    // Get main table
    var getTable  = document.getElementById("myTable");
    var getRow    = getTable.getElementsByTagName("tr");
    var firstRow  = getRow[0].getElementsByTagName("td");

    // Get copy table
    var secondDiv = document.getElementById("tableCopy");
    var copyTable = secondDiv.getElementsByTagName("table");
    var copyRow   = copyTable[0].getElementsByTagName('tr')

    // Get Tables containers
    var mainTableBox = document.getElementById('frameTable')
    var copyTableBox = document.getElementById('tableCopy')

    // The follow functions are to get the measures for the first cell in the main table

    function getCellWidth(){
        var cellWidth = firstRow[0].offsetWidth;
        return cellWidth;
    }

    function getCellHeight(){
        var cellHeight = firstRow[0].offsetHeight;
        return cellHeight;
    }

    // In this part we call have a function to change the values of the second table for buttons
    // with this we can control the main table giving actions to the button.

    function addButtons(){

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

    // function $(selector){
    //     var element = document.querySelectorAll(selector)[0];
    //     return function(){
    //         this.css = function css(styleConfig){
    //             element.style.width = parseInt(styleConfig.width) + 'px';
    //             element.style.height = parseInt(styleConfig.height) + 'px';
    //         }

    //         this.hide = function hide(){
    //             element.style.display = 'none';
    //         }
    //     }
    // }

    function adjustMeasures(){
        var secondDiv = document.getElementById("tableCopy");
        var copyTable = secondDiv.getElementsByTagName("table");

        var getHeight = copyTable[0].offsetHeight;
        var getWidth  = copyTable[0].offsetWidth;

        document.getElementById('frameTable').style.height = getHeight + 'px';
        document.getElementById('frameTable').style.width = getWidth + 'px';

        // $('#frameTable').css({
        //     height: getHeight,
        //     width: getWidth
        // }).hide()

        // $('#tableCopy').css({
        //     height: 100,
        //     width: 50
        // }).hide()
    }

    addButtons();
    adjustMeasures()

    // The follow function make works the buttons in the table top to add more top-rows

    function topButtons(){
        var topHalf = Math.floor(rows / 2);

        for (var tb = 0; tb < topHalf; tb++) {
            var copyCell  = copyRow[tb].getElementsByTagName("td");

            for (var tbi = 0; tbi < copyCell.length; tbi++) {
                copyCell[tbi].getElementsByTagName('button')[0].addEventListener("click", topScroll);
            };
        };
    }

    topButtons();

    // The follow function make works the buttons in the table left to add more left-cols

    function leftButtons(){
        var leftHalf  = Math.floor(cols / 2);

            for (var lb = 0; lb < rows; lb++) {
                var allRows = copyRow[lb].getElementsByTagName('td');

                for (var lbi = 0; lbi < leftHalf; lbi++) {
                    allRows[lbi].getElementsByTagName('button')[0].addEventListener("click", leftScroll);
                };
            };
    }

    leftButtons();

    // The follow function make works the buttons in the table bottom to add more bottom-rows

    function bottomButtons(){
        var bottomHalf      = Math.ceil(rows / 2);
        var bottomTable     = getTable.offsetHeight + mainTableBox.offsetTop;
        var bottomCopyTable = copyTable[0].offsetHeight + copyTableBox.offsetTop;

        if (bottomTable == bottomCopyTable) {

            for (var bb = bottomHalf; bb >= bottomHalf && bb < rows; bb++) {
                var specificRows = copyRow[bb].getElementsByTagName('td');

                for (var bbi =0; bbi < specificRows.length; bbi++) {
                    specificRows[bbi].getElementsByTagName('button')[0].addEventListener("click", addBottomRow);
                    specificRows[bbi].getElementsByTagName('button')[0].addEventListener("click", function()
                        {document.getElementById("myTable").style.marginTop = getTable.offsetTop - (getCellHeight() + 2) + 'px'});
                };
            };  
        } else if (bottomTable > bottomCopyTable){
            mainTableBox.style.top = getTable.offsetTop - (getCellHeight() + 2) + 'px';
        } else {
            mainTableBox.style.top = copyTableBox.offsetTop + "px";
        };
    }

    bottomButtons();

    // The follow function make works the buttons in the table right to add more righ-cols

    function rightButtons(){
        var rightHalf      = Math.ceil(cols / 2);
        var rightTable     = getTable.offsetWidth + mainTableBox.offsetLeft;
        var rightCopyTable = copyTable[0].offsetWidth + copyTableBox.offsetLeft;

        if (rightTable == rightCopyTable) {
            
            for (var rb = 0; rb < copyRow.length; rb++) {
                var specificCols = copyRow[rb].getElementsByTagName('td');

                for (var rbi = rightHalf; rbi >= rightHalf && rbi < cols; rbi++) {
                    specificCols[rbi].getElementsByTagName('button')[0].addEventListener("click", addRightCol);
                    specificCols[rbi].getElementsByTagName('button')[0].addEventListener("click", function()
                        {document.getElementById("myTable").style.marginLeft = getTable.offsetLeft - (getCellWidth() + 2) + 'px'});
                };
            };
        } else if (rightTable > rightCopyTable){
            document.getElementById("myTable").style.marginRight = getTable.offsetLeft - (getCellWidth() + 2) + 'px'
        };

    }

    rightButtons();

    function topScroll(){
        var topTable = getTable.offsetTop + copyTableBox.offsetTop

        if (topTable == copyTableBox.offsetTop) {
            console.log(topTable);
            console.log(copyTableBox.offsetTop);
            addTopRow();
        } else if (topTable < copyTableBox.offsetTop){
            console.log(topTable);
            console.log(copyTableBox.offsetTop);
            getTable.style.marginTop = getTable.offsetTop + getCellHeight() + 'px';
        } else {
            console.log("reset marginTop");
            getTable.style.marginTop = 0 + "px";
        };
    }

    function leftScroll(){
        var leftTable = getTable.offsetLeft + copyTableBox.offsetLeft

        if (leftTable == copyTableBox.offsetLeft) {
            console.log(leftTable);
            console.log(copyTableBox.offsetLeft);
            addLeftCol();
        } else if (leftTable < copyTableBox.offsetLeft){
            console.log(leftTable);
            console.log(copyTableBox.offsetLeft);
            getTable.style.marginLeft = getTable.offsetLeft + getCellWidth() + 'px';
        };

    }

}


/////////////// The next functions add rows and cells top-bottom and right-left.

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