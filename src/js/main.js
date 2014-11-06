$(document).ready(function() {
	"use strict";

	var list = $(".cards_list");

	function createCards(quantity) {
		for(var i = 0 ; i < quantity; i++) {
			list.append($("<li class='cards_list-item'></li>"));
		}
	};

	var dir = "src/img/cards";
	var fileextension=".png";
	var cardsArray = [];
	$.ajax({
		//This will retrieve the contents of the folder if the folder is configured as ‘browsable’
		url: dir,
		async: false,
		success: function (data) {
			//Lsit all png file names in the page
			$(data).find("a:contains(" + fileextension + ")").each(function () {
				cardsArray.push(this.title);
			});
		}
	});

	createCards((cardsArray.length)*2);

	console.log(_.shuffle(cardsArray));

});