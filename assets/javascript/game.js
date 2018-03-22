$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var randomNumber = '';
	var playerTotal = 0;
		
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function showRandomNumber () {
		randomNumber = getRandomInt(19, 120)
		$('.targetnum').html(randomNumber)

	}
	function randomizeCrystals () {
		$(".red, .blue, .yellow, .green").each(function(){
			var random = getRandomInt(1, 12)
			$(this).attr("value", random)	
		})
	}
	function resetGame () {
		showRandomNumber()
		randomizeCrystals();
		playerTotal = 0;
		$('.playernum').html(playerTotal)
	}

	// Run main program
	showRandomNumber();
	randomizeCrystals();
	

	// Onclick Events
	$('.red, .blue, .yellow, .green').on("click", function() {

		// Add numbers and display result
		playerTotal = playerTotal + parseInt($(this).attr('value'))
		$('.playernum').html(playerTotal)

		// Check for win condition
		if(playerTotal === randomNumber) {
			wins++
			$('.wins').html(wins)
			$('.result').html("You won!!")
			resetGame();
		}; 

		// Check for loss condition
		if(playerTotal > randomNumber) {
			losses++
			$('.losses').html(losses)
			$('.result').html("You lost!!")
			resetGame();
		};
	});
	
//document ready
});	
