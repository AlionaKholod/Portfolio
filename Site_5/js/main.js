
// Модальное окно//

$('.contacts__btn,.footer__btn').click(function(e) {
	e.preventDefault(); 
	$('.call__form').arcticmodal();
	/*$('.call-form__btn').click(function(e) {
	 e.preventDefault();
	$('.order__massage').arcticmodal('close');
	});*/
});

	/* Отправка заявки */
$(".call__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/post.php",
			data: $(this).serialize()
		})

		.done(function() {
			$(this).find("input").val("");  
			setTimeout(function (){
				$('.call-form__massage').fadeIn();
				$('.call__form').trigger('reset');
			},1100);
			$('.call-form__massage').on('click', function(e) {
				$('.call-form__massage').fadeOut();
		});
	});
		return false;
	});

$('.call-form__cls').click(function (e) {
    e.preventDefault();
    $.arcticmodal('close');
}); 


/*Бургер меню*/

	$('.burger').click(function () {
		$('.burger-menu').toggleClass('visible');
		return false;
	});



/*Скролл*/

$(document).ready(function () {
	$("button.scrollto").click(function () {
		var elementClick = '#' + $(this).attr("data-target").split("#")[1];
			var destination = $(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
			return false;
		});
});

/*Слайдер*/


 $('.feedback__block').slick({
			dots: true,
			infinite: false,
			arrows: true,
			slidesToShow: 1,
			adaptiveHeight: false,
			edgeFriction: 0.25,
			responsive: [
				{
				breakpoint: 860,
					settings: {
						arrows: false,
					}
				},
				{
				breakpoint: 480,
					settings: {
						arrows: false,
					}
				}
			],
			prevArrow: '<i class="fa feedback__arrows fa-angle-left" aria-hidden="true"></i>',
			nextArrow: '<i class="fa feedback__arrows fa-angle-right" aria-hidden="true"></i>'
});


 /*Форма*/

$(function() {

	/* Отправка заявки */
	$("#order__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/post.php",
			data: $(this).serialize()
		})

		/*.done(function() { //Если все хорошо, показываем сообщение об отправки и очищаем поля
			$(".order__massage").addClass("active").css('display', 'flex').hide().fadeIn(); 
			setTimeout(function(){ 
				jQuery("#order__form").trigger("reset"); 
				$(".order__massage").removeClass('active').fadeOut(); 
			}, 3000); 
		});*/
		.done(function() {  
			setTimeout(function (){
				$('.order__massage').fadeIn();
				 $('#order__form').trigger('reset');
			},1100);
				$('.order__massage').on('click', function(e) {
				$('.order__massage').fadeOut();
				});
			});
		return false;
	});
});

