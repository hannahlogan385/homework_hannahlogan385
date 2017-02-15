document.getElementById('makeSloth').onclick = goSloth;


function goSloth() {
	reset();
	console.log("I just made a sloth!");
    document.getElementById("circle").src = "./img/sloth.jpg";
}


function reset() {
    var color = "black";
}