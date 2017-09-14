// Nice job putting all of your code in a document ready block 👌
$(document).ready(function(){


	// generate score for guessing 
	// generate random points for crystal images
	// display guessing points
	// sum click points in display
	// display wins or losses
	// restore the game after each round
	var wins = 0;
	var losses = 0;

	// See my note below all of your listeners to see why 
	// I've moved these variables into an object.
	//
	var crystalValues = {
		imageOne: 0,
		imageTwo: 0,
		imageThree: 0,
		imageFour: 0,
		imageFive: 0
	}

	// $("#target").text(targetNum)
	// $("#points").text(sum)

	var targetNum = 0;

	// console.log's are awesome for validating your work when developing a program
	// but it's generally best practice to remove them from production code.
	// console.log(targetNum)
	var sum = 0;

	// I really like how you split up your game logic into functions.
	// It's a much easier style to understand 🤓
	function startGame () {
		// Since the string of code for generating random numbers
		// is rather unwieldy I'd suggest placing it in a utility function
		targetNum = getRandomNum(120, 19)
		$("#target").text(targetNum)

		crystalValues['imageOne'] = getRandomNum(12, 1)
		// console.log(imageOne)
		crystalValues['imageTwo'] = getRandomNum(12, 1)
		// console.log(imageTwo)
		crystalValues['imageThree'] = getRandomNum(12, 1)
		// console.log(imageThree)
		crystalValues['imageFour'] = getRandomNum(12, 1)
		// console.log(imageFour)
		crystalValues['imageFive'] = getRandomNum(12, 1)
		// console.log(imageFive)
		// it's not really necessary to use a return statement here since
		// you're not actually using the return value from this function.
		return sum = 0;
	}

	function getRandomNum (max, min) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	startGame();

	function results () {
		// nice job using triple equals for equality checking 🙌
		if (sum === targetNum){
			// So it's totally fine to end code statements with semi-colons or to leave them off
			// just do your best to be consistent one way or the other 😬
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


	// Your  event listener code was pretty repetitive, so in an effort to DRY it up I'd suggest combining
	// them all into 1 and then determining the value of the clicked crystal by checking its id.
	// I moved all of the crystal values into an object for this so I could leverage bracket notation
	// which will try to access the property that the expression inside of the brackets evaluates to.
	// Take the following object:
	// 
	// var obj = { name: 'Katie' }
	// 
	// You could do the following to access the name property:
	// 
	// var firstHalf = 'na'
	// var secondHalf = 'me'
	// 
	// obj[ firstHalf + secondHalf ] // would return 'Katie'
	// 

	$('.jewels').on('click', function() {

		// grab the elements id
		var crystalId = $(this).attr('id') 

		// access the corresponding value using the id and add it to the sum
		sum += crystalValues[ crystalId ]

		results();

		$("#points").text(sum)

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