$(document).ready(function(){


	// generate score for guessing 
	// generate random points for crystal images
	// display guessing points
	// sum click points in display
	// display wins or losses
	// restore the game after each round
	var wins = 0;
	var losses = 0;

	var imageOne = 0;
	var imageTwo = 0;
	var imageThree = 0;
	var imageFour = 0;
	var imageFive = 0;

	// $("#target").text(targetNum)
	// $("#points").text(sum)

	var targetNum = 0;
	console.log(targetNum)
	var sum = 0;

	function startGame () {
		targetNum = Math.floor(Math.random() * (120 - 19)) + 19;
		$("#target").text(targetNum)

		imageOne = Math.floor(Math.random() * (12 - 1)) + 1
		// console.log(imageOne)
		imageTwo = Math.floor(Math.random() * (12 - 1)) + 1
		// console.log(imageTwo)
		imageThree = Math.floor(Math.random() * (12 - 1)) + 1
		// console.log(imageThree)
		imageFour = Math.floor(Math.random() * (12 - 1)) + 1
		// console.log(imageFour)
		imageFive = Math.floor(Math.random() * (12 - 1)) + 1
		// console.log(imageFive)
		return sum = 0;
	}

	startGame();

	function results () {
		if (sum === targetNum){
			wins += 1;
			alert("WINNER!!!!!")
			$("#wins").text(wins)
			startGame();
		}
		else if (sum > targetNum){
			losses += 1;
			alert("You Suck! Terrible!!")
			$("#losses").text(losses)
			startGame();
		}
	}

	$("#imageOne").on("click", function() {
		sum += imageOne
		results();
		$("#points").text(sum)
		console.log(imageOne)
	})

	$("#imageTwo").on("click", function() {
		sum += imageTwo
		results();
		$("#points").text(sum)
		console.log(imageTwo)
	})

	$("#imageThree").on("click", function() {
		sum += imageThree
		results();
		$("#points").text(sum)
		console.log(imageThree)
	})

	$("#imageFour").on("click", function() {
		sum += imageFour
		results();
		$("#points").text(sum)
		console.log(imageFour)
	})

	$("#imageFive").on("click", function() {
		sum += imageFive
		results();
		$("#points").text(sum)
		console.log(imageFive)
	})



	// console.log(typeof(sum))
	// console.log(typeof(targetNum))

})
// images - ids with values attr and then randomly assign number using jquery

// asign variables and crystals with math random
// create span space in placement of score to input values in via js
// function initiate to get the game set
// if else for wins and losses
// on click crystals 