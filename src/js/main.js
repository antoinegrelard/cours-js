$(document).ready(function() {
	"use strict";

	var list = $(".cards_list");

	function createCards(quantity) {
		for(var i = 0 ; i < quantity; i++) {
			list.append($("<li class='cards_list-item'></li>"));
		}
	};

	createCards(12);

});