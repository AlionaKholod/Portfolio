 	

/*Скролл*/

$(document).ready(function () {
	$("button.scrollto").click(function () {
		var elementClick = '#' + $(this).attr("data-target").split("#")[1];
			var destination = $(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
			return false;
		});
	});

