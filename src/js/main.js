$(document).ready(function() {
	"use strict";

	var list = $(".cards_list");
	var visibleCards = [];
	var nbClicks = 0;

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
				cardsArray.push(this.title);
			});
		}
	});

	function createCards(quantity) {
		for(var i = 0 ; i < quantity; i++) {
			list.append($("<li class='cards_list-item'></li>"));
		}
	}

	createCards(_.size(cardsArray));

	var shuffledArray = _.shuffle(cardsArray);

	var counter = 0;
	$(".cards_list-item").each(function() {
		$(this).attr('data-image','src/img/cards/' + shuffledArray[counter] );
		counter++;
	});

	function matchCards(first, second) {
		var firstImage = first.data('image');
		var secondImage = second.data('image');

		if(firstImage == secondImage) {
			_.delay(function() {
				visibleCards= [];
				first.attr('style', 'background: rgba(0,0,0,.2');
				second.attr('style', 'background: rgba(0,0,0,.2');
				first.removeClass("visible").addClass('inactive');
				second.removeClass("visible").addClass('inactive');
				first.unbind('click');
				second.unbind('click');
			}, 500);
		} else {
			_.delay(function() {
				visibleCards= [];
				first.removeClass("visible");
				first.removeAttr('style');
				second.removeClass("visible");
				second.removeAttr('style');
			}, 500);
		}

	}

	$(".cards_list-item").on("click", function() {
		nbClicks++;
		$(".click-number").text(nbClicks);
		if(_.size(visibleCards) != 2) {
			if($(this).hasClass("visible")) {
				$(this).removeClass("visible");
				$(this).removeAttr('style');
				visibleCards = [];
			} else {
				$(this).addClass("visible");
				visibleCards.push($(this));
				$(this).attr('style', 'background: url( ' + $(this).data('image') + ' )');
			}
		}
		if(_.size(visibleCards) == 2) {
			matchCards(visibleCards[0],visibleCards[1]);
		}
	});


});