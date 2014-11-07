var Card = function(game) {
	"use strict";
	this.nbClicks = 0;
	this.game = game;
};

Card.prototype.init = function() {

	var that = this;

	$(".cards_list-item").on("click", function() {
		that.nbClicks++;
		$(".click-number").text(that.nbClicks);
		if(_.size(that.game.visibleCards) != 2) {
			if($(this).hasClass("visible")) {
				$(this).removeClass("visible");
				$(this).removeAttr('style');
				that.game.emptyArray();
			} else {
				$(this).addClass("visible");
				that.game.pushArray(that.game.visibleCards, $(this));
				$(this).attr('style', 'background: url( ' + $(this).data('image') + ' )');
			}
		}
		if(_.size(that.game.visibleCards) == 2) {
			that.game.matchCards(that.game.visibleCards[0],that.game.visibleCards[1]);
		}
	});

};