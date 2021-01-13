let loginCorrect = 'Админ';
let passCorrect = 'Я главный';

let login = prompt('Введите логин..', '');

if (login == loginCorrect){
	let	password = prompt('Введите пароль..', '');
	
	if (password == passCorrect) {
		alert('Здравствуйте!')
	} else if ( password == '' || password == null){
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
} else if (login == '' || login == null) {
	alert('Отменено');
} else {
	alert('Я вас не знаю!');
}