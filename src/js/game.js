var Game = function() {
	"use strict";
	this.list = $(".cards_list");
	this.visibleCards = [];

};

Game.prototype.init = function() {

		var that = this;

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
					that.pushArray(cardsArray, this.title);
					that.pushArray(cardsArray, this.title);
				});
			}
		});

		this.createCards(_.size(cardsArray));

		var shuffledArray = _.shuffle(cardsArray);

		var counter = 0;
		$(".cards_list-item").each(function() {
			$(this).attr('data-image','src/img/cards/' + shuffledArray[counter] );
			counter++;
		});

};

Game.prototype.createCards = function(quantity) {
	for(var i = 0 ; i < quantity; i++) {
		this.list.append($("<li class='cards_list-item'></li>"));
	}
};

Game.prototype.matchCards = function(first, second) {
	var firstImage = first.data('image');
	var secondImage = second.data('image');

	var that= this;

	if(firstImage == secondImage) {
		_.delay(function() {
			that.emptyArray();
			first.attr('style', 'background: rgba(0,0,0,.2');
			second.attr('style', 'background: rgba(0,0,0,.2');
			first.removeClass("visible").addClass('inactive');
			second.removeClass("visible").addClass('inactive');
			first.unbind('click');
			second.unbind('click');
		}, 500);
	} else {
		_.delay(function() {
			that.emptyArray();
			first.removeClass("visible");
			first.removeAttr('style');
			second.removeClass("visible");
			second.removeAttr('style');
		}, 500);
	}

};

Game.prototype.emptyArray = function() {
	while(!(_.isEmpty(this.visibleCards))) {
		this.visibleCards.pop();
	}
};

Game.prototype.pushArray = function(array, element) {
	array.push(element);
};