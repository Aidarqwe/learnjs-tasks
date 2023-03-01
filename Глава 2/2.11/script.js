// alert( null || 2 || undefined ); // 2

// alert( alert(1) || 2 || alert(3) ); // null

// alert( alert(1) && alert(2) ); // 1

// alert( null || 2 && 3 || 4 ); // 3


// if(age >= 14 && age <= 90);


// if(!(age >= 14 && age <= 90));
// if(age < 14 || age > 90);


// if (-1 || 0) alert( 'first' ); // true = -1
// if (-1 && 0) alert( 'second' ); // false
// if (null || -1 && 1) alert( 'third' ); // true 1



// let inputElem = prompt("Это кто? ", "");
// if (inputElem === "Админ"){
// 	let passInput = prompt("Введите пароль: ", "");
// 	if(passInput === "Я главный"){
// 		alert("Здравствуйте");
// 	}else if(inputElem === null || inputElem === ""){
// 		alert("Отменено");
// 	}else {
// 		alert("Неверный пароль");
// 	}
// }else if(inputElem === null || inputElem === ""){
// 	alert("Отменено");
// }else {
// 	alert("Я вас не знаю");
// }