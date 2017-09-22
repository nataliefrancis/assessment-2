console.log("ready!");


document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "Escape" :
		console.log("Brown horse moves");
			//document.getElementsByClassName('brownHorse').style.left= "50px";//
			break;
	}
});

document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "ArrowRight" :
			console.log("Black horse moves");
			//document.getElementsByClassName('blackHorse').style.left= "50px";//
			break;
	}
});

//The click function works but the style.left doesn't and I haven't figured out why yet. //