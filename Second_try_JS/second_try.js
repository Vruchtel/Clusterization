"use strict";

// input
var form = document.forms.first_form;
var elem = form.elements[0];
alert("Значение в первой форме: " + elem.value); // 1
elem.value = "15";
alert("Новое значение в первой форме: " + elem.value); // 15


// textarea
var textarea_form = document.forms.textarea_form;
var send_elem = textarea_form.elements.send;
send_elem.onclick = function() {
	alert("Ваше имя: " + textarea_form.elements.first_textarea.value);
}


// select, option
var form = document.forms.selection_form;
var preferences = form.elements.genre;
var choose_button = form.elements[1];
		
function showPref() {
	for (var i = 0; i < preferences.options.length; i++) {
		var option = preferences.options[i];
		if(option.selected) {
			alert("Вы выбрали жанр: " +  option.value);
		}
	}
}
choose_button.addEventListener("click", showPref);				


// Коды клавиш
		
/* Получение символа в keypress */
// event.type должен быть keypress
function getChar(event) {
	if (event.which == null) { // IE
		if (event.keyCode < 32) return null; // спец. символ
		return String.fromCharCode(event.keyCode)
	}

	if (event.which != 0 && event.charCode != 0) { // все кроме IE
		if (event.which < 32) return null; // спец. символ
		return String.fromCharCode(event.which); // остальные
	}
	return null; // спец. символ
}
		
/* Перевод символов в верхний регистр */
var form = document.forms.surname_form;
form.area_for_surname.onkeypress = function(elem) {
	// спец. сочетание - не обрабатываем
	if (elem.ctrlKey || elem.altKey || elem.metaKey) return;
			
	var curChar = getChar(elem);
			
	if (!curChar) return; // спец. символ - не обрабатываем
			
	this.value += curChar.toUpperCase();
			
	return false;
}
