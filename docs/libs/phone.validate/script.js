//валидация поле телефона 
$(".phone").mask("+7(999)999-99-99");
//ф-ция для позиции курсора
$.fn.setCursorPosition = function (pos) {
	if ($(this).get(0).setSelectionRange) {
		$(this).get(0).setSelectionRange(pos, pos);
	} else if ($(this).get(0).createTextRange) {
		var range = $(this).get(0).createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};
//ф-ция для позиции курсора для нашего поля phone
$('.phone').click(function () {
	$(this).setCursorPosition(3); // set position number
});