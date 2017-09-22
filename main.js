console.log("ready!");

let horseOne = document.getElementById('brownHorse');
let horseTwo = document.getElementById('blackHorse');

document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "Escape" :
		console.log("Brown horse moves");
			horseOne.style.left= "50px";
	}
});

document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "ArrowRight" :
			console.log("Black horse moves");
			horseTwo.style.left= "50px";
			break;
	}
});

//The click function works but the style.left doesn't and I haven't figured out why yet. //