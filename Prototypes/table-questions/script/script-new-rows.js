
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
	console.log(rowsLenght);
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