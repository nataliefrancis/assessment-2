console.log("ready!");

let horseOne = document.getElementById('brownHorse');
let oneMove = 0;
let horseTwo = document.getElementById('blackHorse');
let twoMove = 0;


document.addEventListener("keydown", function(event) { //set event listener
	switch (event.key) { 
		case "Escape" :                                //Player one uses escape key
			console.log("Brown horse moves");
			oneMove += 5;								//every click adds to their move counter
			horseOne.style.left = oneMove + "%";		//for every click it'll move a % to the right
			checkWin("Brown horse");	
			break;

		case "ArrowRight" :                             //Player two uses right arrow
			console.log("Black horse moves");
			twoMove += 5;
			horseTwo.style.left = twoMove + "%";
			checkWin("Black horse");
			break;
	}

	function checkWin(name) {					//once a player's move counter reaches 90, they win
		if (oneMove === 90) {
			alert(name + " wins!");
		} else if (twoMove === 90) {
			alert(name + " wins!");
		}
	}
});


