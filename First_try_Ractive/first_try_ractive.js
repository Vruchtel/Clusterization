"use strict";

var films = [
	{name: 'Форрест Гамп', year: 1994, country: 'США', rating: 9.002},
	{name: 'Начало', year: 2010, country: 'США', rating: 8.769},
	{name: '1 + 1', year: 2011, country: 'Франция', rating: 8.816},
	{name: 'Иван Васильевич меняет профессию', year: 1973, country: 'СССР', rating: 8.789}
];

var ractive = new Ractive({
	//el: output, // относится к полю в левом нижнем углу
	el: '#container',
	//template: template 
	template: '#template',
			
	data: {greeting: 'Здравствуй', 
		name: 'Мир',
		color: 'purple',
		size: 4,
		font: 'Georgia',
		counter: 0,
		
		// Nested properties
		student: {
			name: 'Миша',
			education: {
				primary: 'да',
				secondary: 'да',
				master: 'нет'
			},
			age: 20,
			parents: {
				mother: 'Анна',
				father:	'Александр'
			},
			
			// Expressions
			worked_time: 60,  // in minutess
			
		},
		format_time: function (minutes) {
			if (minutes > 60) return (minutes / 60) + ' часов ' + (minutes % 60) + ' минут';
			if (minutes > 60 * 24) {
				var res = (minutes / (60 * 24)) + ' дней ' + ((minutes % (60 * 24)) / 60);
				res += ' часов ' + ((minutes % (60 * 24)) % 60) + ' минут ';
				return res;
			}
			return minutes + ' минут';
		},
		
		// Conditionals
		signedIn: false,
		
		// Lists
		table_of_films: films,
		sort_column: 'rating',
		
		sort: function(array, column) {
			array = array.slice();
			
			return array.sort(function(a, b) {
				return a[column] < b[column] ? -1 : 1;
			});
		}
	}
});

ractive.set('greeting', 'Привет'); // Изменили значение, теперь будет выводиться "Привет"
ractive.set('color', 'blue'); // Теперь цвет текста будет не фиолетовым, а синим
		
document.getElementById("count").addEventListener("click", function() {
	ractive.set('counter', ractive.get('counter') + 1);});
	

// Nested properties
ractive.set('student', {
	name: 'Саша',
	age: 21,
	parents: {mother: 'Ирина', 
		father: 'Павел'}
});
// Изменится только это значение, остальные останутся нетронутыми
ractive.set('student.age', 25);


// Expressions
ractive.set('student.worked_time', 60);


// Events

ractive.on('push_wonderful_button', function(event) {
	alert("Нажата великолепная кнопка!");
});

var listener = ractive.on({
	push_bad_button: function() {
		alert("Нажата такая себе кнопка");
	},
	push_good_button: function() {
		alert("Нажата очень даже миленькая кнопка");
	},
	push_silence_button: function() {
		alert("Это последний раз, честно");
		listener.cancel();
	}
});


// Conditionals

ractive.on('signIn_button', function() {
	var newStudentName = prompt('Введите Ваше имя для регистрации', 'Иван');	
	
	ractive.set('student.name', newStudentName);
	ractive.set('signedIn', true);
});


// Lists

var new_film = {
	name: 'Зелёная миля',
	year: 1999,
	country: 'США',
	rating: 9.066
};
films[films.length] = new_film;
ractive.update('table_of_films');

ractive.on('sort', function(event, column) {
	this.set('sort_column', column);
});

