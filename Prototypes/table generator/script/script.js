

function createTable() {

    var rows = document.getElementById("setRows").value;
    var cols = document.getElementById("setCols").value;
    var table;


    table = "<table>";
    table += "<tbody>";

    for (var i = 0; i < rows; i++) {
         table += "<tr>";

         for (var j = 0; j < cols; j++) {
            table += "<td></td>";
         };
         table += "</tr>";
     }; 

    table += "</table>";
    table += "</tbody>";

    document.getElementById("tableHolder").innerHTML= table;
}


