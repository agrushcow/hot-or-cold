var magicNumber;
var count;
var track = [];

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Add number to #guessList---*/
  	$('#guessButton').click(function() {
  		var value = $('#userGuess').val();
     	var container = $("<div/>", {class:"container"});
        $( container ).appendTo("#guessList");
        var number = $("<div/>", {class:"number", text:value});
        $( number ).appendTo( container );

        userGuess();

        $('#userGuess').val('');
  	});

  	/*--- Runs a new game and calls  ---*/
  	$('.new').click(newGame);
  	newGame();
  	
});


/*--- Set magicNumber ---*/
function newGame() {
	magicNumber = getMagicNumber();
	count = 0;
	track = [];
	$('#guessList').empty();
	$('#feedback').text("Make your Guess!");
	$('#count').text("0");
}

/*--- Generate magic number ---*/
function getMagicNumber() {
	return Math.floor((Math.random() * 100) + 1);
}

/*--- Check that input meets criteria  ---*/
function check () {
	var userGuess = $('#userGuess').val();

		/*--- Checks if input is a number ---*/
		var isNumber = true;
			for (i=0; i<userGuess.length; i++) {
				var c = userGuess[i];
				isNumber = isNumber && (c >= '0' && c <= '9' );
			} 

	if (isNumber = true) {
		if ((+userGuess < 1) && (+userGuess > 100)) {
			alert("Please input a number between 1 and 100");
			return false;		
		} 
	} else {
		alert("Please enter a number!");
		return false;
	}
	return true;
}

/*--- Give user feedback ---*/
function userGuess() {
	if (check()) {
		var userGuess = +($('#userGuess').val());
		count++;
		$('#count').text(count);
		track.push(userGuess);

		if (magicNumber == userGuess) {
			$('#feedback').text("You win!");
		} else if (Math.abs(magicNumber - userGuess) <= 10) {
			$('#feedback').text("So hot right now!");
		} else if (Math.abs(magicNumber - userGuess) <= 20) {
			$('#feedback').text("Warm");
		} else if (Math.abs(magicNumber - userGuess) <= 40) {
			$('#feedback').text("Cool");	
		} else {
			$('#feedback').text("Ice cooold!");
		}
	}
}

/*--- Count attempts ---*/
function count() {
	count++;
}

/*--- Find repeats ---*/
