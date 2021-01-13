let age = +prompt('Сколько вам лет?', '')

function checkAge(age) {
   (age > 18) ?  true : confirm('Родители разрешили?') ;
}

function checkAge2(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

checkAge(age);

checkAge2(age);

function getMin(a, b ){
	return ( a > b) ? b : a;
}

console.log(getMin(110, 33));

let x = +prompt('Введите число которое хотите возвести в степень..', '');
let n = +prompt('Введите степень..', '');

function pow(x, n){
	return x ** n;
}

if (n < 1){
	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
	alert('Результат: ' + pow(x,n));
}



