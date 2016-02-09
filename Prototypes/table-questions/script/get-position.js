
var currentPosition = "0,0";
console.log(currentPosition);

function goUp() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]);
    var positionY          = parseInt(independentVelues[1]) + 1;

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "0";
    document.getElementById("yAxis").innerHTML    = "+1";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function goDown() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]);
    var positionY          = parseInt(independentVelues[1]) - 1;

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "0";
    document.getElementById("yAxis").innerHTML    = "-1";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function goLeft() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) - 1;
    var positionY          = parseInt(independentVelues[1]);

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "-1";
    document.getElementById("yAxis").innerHTML    = "0";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function goRight() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) + 1;
    var positionY          = parseInt(independentVelues[1]);

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "+1";
    document.getElementById("yAxis").innerHTML    = "0";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

// Starts the diagonal part

function goRightUp() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) + 1;
    var positionY          = parseInt(independentVelues[1]) + 1;

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "+1";
    document.getElementById("yAxis").innerHTML    = "+1";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function goRightDown() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) + 1;
    var positionY          = parseInt(independentVelues[1]) - 1;

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "+1";
    document.getElementById("yAxis").innerHTML    = "-1";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function goLeftUp() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) - 1;
    var positionY          = parseInt(independentVelues[1]) + 1;

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "-1";
    document.getElementById("yAxis").innerHTML    = "+1";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}

function goLeftDown() {
    var independentVelues  = currentPosition.split(",");
    var positionX          = parseInt(independentVelues[0]) - 1;
    var positionY          = parseInt(independentVelues[1]) - 1;

    document.getElementById("position").innerHTML = positionX + "," + positionY;
    document.getElementById("xAxis").innerHTML    = "-1";
    document.getElementById("yAxis").innerHTML    = "-1";

    currentPosition = positionX + "," + positionY;
    console.log(currentPosition);
}
