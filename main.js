console.log("ready!");

let horseOne = document.getElementById('brownHorse');
let oneMove = 0;
let horseTwo = document.getElementById('blackHorse');
let twoMove = 0;


document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "Escape" :
			console.log("Brown horse moves");
			oneMove += 5;
			horseOne.style.paddingLeft = oneMove + "%";	
			break;

		case "ArrowRight" :
			console.log("Black horse moves");
			twoMove += 5;
			horseTwo.style.paddingLeft = twoMove + "%";
			break;
	}
});


//So now I have it "moving" but not really. Still working on it//