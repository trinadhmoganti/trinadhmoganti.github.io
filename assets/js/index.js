$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip();

	$('body').scrollspy({
		target : ".navbar",
		offset : 50
	});

	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop : $(hash).offset().top
			}, 1000, function() {
				window.location.hash = hash;
			});
		} // End if
	});

});