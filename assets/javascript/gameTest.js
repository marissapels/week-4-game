$(window).load(function(event){
	restart();
});

var wins=0;
var losses=0;
$("#wins").html(wins);
$("#losses").html(losses);

function restart(){
	var userScore=0;
	var button1=0;
	var button2=0;
	var button3=0;
	var button4=0;
	var crystalValue=0;
	$("#userScore").html(userScore);

	var randomNumber=Math.floor(Math.random()*(120-19+1))+19;
	$("#randomNumber").html(randomNumber);

	console.log("random: " + randomNumber);

	button1=Math.floor(Math.random()*12+1);
	button2=Math.floor(Math.random()*12+1);
	button3=Math.floor(Math.random()*12+1);
	button4=Math.floor(Math.random()*12+1);

	var crystalImage1 = $("<img>");
	crystalImage1.addClass("crystal-image");
	crystalImage1.attr("src", "assets/images/gem1.jpg");
	crystalImage1.attr("value", button1);
	$("#crystal1").html(crystalImage1);

	var crystalImage2 = $("<img>");
	crystalImage2.addClass("crystal-image");
	crystalImage2.attr("src", "assets/images/gem2.jpg");
	crystalImage2.attr("value", button2);
	$("#crystal2").html(crystalImage2);

	var crystalImage3 = $("<img>");
	crystalImage3.addClass("crystal-image");
	crystalImage3.attr("src", "assets/images/gem3.jpg");
	crystalImage3.attr("value", button3);
	$("#crystal3").html(crystalImage3);

	var crystalImage4 = $("<img>");
	crystalImage4.addClass("crystal-image");
	crystalImage4.attr("src", "assets/images/gem4.jpg");
	crystalImage4.attr("value", button4);
	$("#crystal4").html(crystalImage4);

	$(document).ready(function(){


		$(".crystal-image").on("click",function(){
			crystalValue=($(this).attr("value"));
			crystalValue=parseInt(crystalValue);
			console.log("clicked: "+crystalValue);

			userScore+=crystalValue;
			$("#userScore").html(userScore);

			if(userScore===randomNumber){
				wins++;
				$("#wins").html(wins);
				restart();
				return;
			}

			else if(userScore>randomNumber){
				losses++;
				$("#losses").html(losses);
				restart();
				return;
			}
		});

	});
}


