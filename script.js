$(document).ready(function() {

	var size = 8
	createGrid(size);

	$('#grid-wrapper').on('mouseenter', '.grid-element', function() {
		$(this).css('background-color', 'blue');
		console.log('clicked!');



	});

	$('#reset').on('click', function() {
		size = prompt('How many squares per side?');
		createGrid(size);

	});

	console.log('got here!');




});

var createGrid = function(sideLength) {

	$('.grid-element').remove();
	for (var i = 0; i < (sideLength * sideLength); i += 1) {

	$('<div></div>').addClass('grid-element').appendTo('#grid-wrapper');
	};

	$('.grid-element').css({'width': Math.floor(512/sideLength), 'height': 512/sideLength});

	console.log('Hi');

}