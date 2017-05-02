

$(document).ready(function(){
	var wins=0;
	var losses=0;

	

	function restartGame(){
		var userScore=0;
		var randomNumber=Math.floor(Math.random()*(120-19+1))+19;

		if (userScore<randomNumber){
			$("#randomNumber").html(randomNumber);
			$("#wins").html(wins);
			$("#losses").html(losses);
			$("#userScore").html(userScore);

			var button1= Math.floor(Math.random()*12)+1;
			var button2= Math.floor(Math.random()*12)+1;
			var button3= Math.floor(Math.random()*12)+1;
			var button4= Math.floor(Math.random()*12)+1;

			$("#button1").val(button1);
			$("#button2").val(button2);
			$("#button3").val(button3);
			$("#button4").val(button4);

			console.log(button1);
			console.log(button2);
			console.log(button3);
			console.log(button4);

			$(".button").on("click", function(){
				var clickedButton= this.value;
				userScore= parseInt(userScore)+parseInt(clickedButton);
				console.log(userScore);
				$("#userScore").html(userScore);
			})

		}

		if (userScore===randomNumber){
			wins++;
			restartGame();
			return;
		}

		if (userScore>randomNumber){
			losses++;
			$("#losses").html(losses);
			restartGame();
			return;
		}

		$("#randomNumber").html(randomNumber);
		$("#wins").html(wins);
		$("#losses").html(losses);
		$("#userScore").html(userScore);

	}

	restartGame();


})

