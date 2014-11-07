$(document).ready(function() {
	"use strict";
	var game = new Game();
	game.init();
	var card = new Card(game);
	card.init();
});