"use strict"; // Современный стандарт

// Это комментарий
alert( 'Это внешний скрипт' );

/* Переменные */
var user = 'Sima', age = 20, message = 'Lalala';
alert(message);
// Кстати, одинаковые и двойные кавычки равноправны
message = "I am a message";
alert(message);
// И ещё типа "символ" не существует, есть только тип "строка"
// А + делает конкатенацию строк
var str1 = "first ", str2 = 'second';
alert(str1 + str2);
// Если хотя бы один аргумент является строкой, то второй будет преобразован к строке
alert("строка" + 1);
// Остальные арифметические операторы всегда приводят аргументы к числу!!!

// Преобразование строки в число
var apples = "2", oranges = "3";
alert(+apples + +oranges);

// Типизация? Какая типизация?
message = 2;
alert(message);

var ideas;
alert(ideas); // Должно вывестись undefined
ideas = null;
alert(ideas);

alert(typeof message); // Можно ещё alert(typeof(message));

// Логический тип
var workIsDone = false;
alert(typeof workIsDone);
workIsDone = true;


/*Ещё про математические операторы*/

// Взятие остатка
alert("Остаток от деления 5 на 2: " + 5 % 2); // 1

// Есть i++, ++i, i-- и --i
var num = 5;
alert(--num);

// *=, += и т.п. тоже есть


/*Побитовые операторы*/
var t = true, f = false;
alert(t & f); // AND
alert(t | f); // OR
alert(t ^ f); // XOR
alert(~t); // NOT

alert(str1 & str2); // 0
alert(str1 | str2); // 0


/*Операторы сравнения*/
alert(5 > 2); // true
alert(5 < 2); // false
alert(5 != 2); // true
alert(5 == 2); // false

// Строки сравниваются побуквенно
alert('Б' > 'A'); // true

// Лексикографическое сравнение
alert('Вася' < 'Петя'); // true

// При сравнении значений различных типов используется числовое преобразование
alert("Сравнение значений различных типов");
alert("01" == 1); // true
alert("Вася" == 1); // false
alert(true == 1); // true
alert(false == 0); // true
alert('' == false); // true

// Строгое равенство (тройное равенство)
// Если тип разный, всегда возвращают false
alert("Тройное равенство");
alert(false === ''); // false
alert(false !== ''); // true

alert("И ещё");
alert(5 >= 3); // true


/*Взаимодействие с пользователем*/
alert("Сейчас будем учиться взаимодействовать с пользователем");
alert("Эта функция выводит модальное окно. Выполнение не продолжится, пока пользователь не нажмёт ОК");

var userAge = prompt("Сколько вам лет", 150); // param1 - title, param2 - default, выводится в окне для ввода
// Можно нажать OK или cancel(или нажать Esc)
// default по умолчанию undefined

alert("Вам " + userAge + " лет");

var answer = confirm("Принять лицензионное соглашение?"); // Можно ответить OK или cancel
// Возвращает true или false
alert(answer);


// Разработчик не может влиять на внешний вид и местоположение модального окна


/*Условные операторы*/
var myAgeIdea = prompt("Угадаете, сколько мне лет?", 150);
if (myAgeIdea != 20) {
	alert("Не угадали!");
} else {
	alert("Ничего себе, да вы просто волшебник!");
}

/*Логические операторы*/
if (myAgeIdea >= 18 && myAgeIdea <= 22 && myAgeIdea != 20) {
	alert("Но вы всё же почти угадали");
}
if (myAgeIdea < 18 || myAgeIdea > 22) {
	alert("Вы прям вообще не попали");
}
alert(!20); // НЕ 


/*Цикл while*/
var a = 5, b = 10
while (a < b) {
	alert("a < b" + ", a = " + a++);
	//a++;
}

//while(true) {
while (false) {
	confirm("Это бесконечный цикл! Здорово, правда?");
}


/*Цикл for*/
for (var i = 0; i < 10; i++) {
	alert("Через забор перепрыгнуло " + i + " овец");
}

outer: for (var i = 0; i < 3; i++) {
	
	for (var j = 0; j < 3; j++) {
		var input = prompt("Введите значение в координатах (" + i + ", " + j + ")", '');
		
		// если отмена ввода или пустая строка - завершить оба цикла
		if (!input) break outer;
	}
}
alert("Всё посчитали!");


/*Функция*/
function showGreeting() {
	var message = "Привет всем присутствующим";
	alert(message);
}

showGreeting();
showGreeting();

var x = prompt("Введите первое число", '');
var y = prompt("Введите второе число", '');

// аргумент функции может быть не передан, тогда он считается undefined
function sum(a, b) {
	if (a === undefined) {
		alert("Ни одно из чисел не получено, считаем их = 0");
		a = 0;
		b = 0;
	}
	if (b === undefined && a !== undefined) {
		alert("Второе число не получено, считаем его = 0");
		b = 0;
	}
	alert("Результат суммирования: " + (+a + +b));
}

sum(x, y);
sum(x); 
sum();

function printTextInTwoLines(line1, line2) {
	line1 = line1 || "Текст не передан";
	line2 = line2 || "";
	 
	alert(line1 + line2);
}

printTextInTwoLines("Это", "текст");
printTextInTwoLines("Да");
printTextInTwoLines();

function mult(a, b) {
	return a * b;
}

function nothing() {
	
}

alert(nothing() === undefined);


/*Словари*/
alert("Научимся пользоваться словарями");

// Создание
var dict1 = new Object();
var dict2 = {};

// Изменение и использование
var person = {};
person.name = "Вася";
person.age = 23;
alert(person.name + ": " + person.age);

// Удаление
delete person.age;

// Проверка, есть ли в объекте свойство с определённым ключом
if ("name" in person) {
	alert("В словаре person есть свойство name");
}
// Другой способ - сравнение значения с undefined
if (person.age === undefined) {
	alert("В словаре person нет свойства age");
}

// Создавать словари ещё можно так
var frequencyDict = {
	Hello: 15,
	summer: 43,
	blabla: "нет такого слова"
};

// Есть также доступ через квадратные скобки
person["Любимый стиль музыки"] = "Джаз";

// Итерирование по словарям
alert("Итерирование по словарю person");
var counter = 0;
for (var key in person) {
	alert(key + ": " + person[key]);
	counter++;
}
alert("Количество свойств в словаре person равно: " + counter);


/*Массивы*/

// Создание
var arr = [];
var fruits = ["Яблоко", "Апельсин", "Груша"];
alert("Сейчас выведем элементы массива fruits");
alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);

// Изменение элемента
fruits[2] = "Мандарин";

// Добавление элемента
fruits[3] = "Слива";

// Получение количества элементов массива
alert("Количество элементов в массиве fruits теперь: " + fruits.length);

// Вывод всего массива целиком
alert(fruits);

// В массиве может храниться любое число элементов любого типа
var arr1 = [1, "Маша", {name: "Алексей"}, false];


// Методы для работы с массивом, как с очередью и стеком

// pop - удаляет ПОСЛЕДНИЙ элемент из массива и возвращает его
alert("Удалим последний элемент из массива fruits");
alert(fruits.pop());
alert("Теперь массив fruits выглядит так: " + fruits);
//alert(fruits);

// push - добавляет элемент В КОНЕЦ массива
fruits.push("Лимон");
alert("А теперь - так: " + fruits);

// shift - УДАЛЯЕТ из массива ПЕРВЫЙ элемент и возвращает его
alert("Теперь удалим первый элемент из массива fruits");
alert(fruits.shift());
alert("Теперь массив fruits выглядит так: " + fruits);

// unshift - ДОБАВЛЯЕТ элемент в НАЧАЛО массива
fruits.unshift("Банан");
alert("Новый вид массива fruits: " + fruits);

// Методы push и unshift могут добавлять сразу по несколько элементов
alert("Добавим в конец массива fruits ещё несколько элементов");
fruits.push("Персик", "Ананас", "Киви");
alert(fruits);

// Итерирование по массивам
alert("Выведем поочерёдно все элементы массива fruits");
for (var i = 0; i < fruits.length; i++) {
	alert(fruits[i]);
}

// Можно ещё создавать массивы с помощью new Array
var arr2 = new Array("пятнашки", "шахматы", "шашки"); // будет создан массив из трех заданных элементов
var arr3 = new Array(2, 3); // будет создан массив из двух заданных элементов
var arr4 = new Array(5); // будет создан массив длины 5, все значения в котором - undefined
