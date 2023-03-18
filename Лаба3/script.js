

const form = document.getElementById('form'); // извлекаем элемент формы
form.addEventListener('submit', (e) => {
	e.preventDefault();
	// const form = document.querySelector('form');
	var answers = new Object();

	answers.name = form.elements.fio.value;
	answers.phone = form.elements.phone.value;
	answers.nameTour = form.elements.name_tour.value;
	answers.numberForm = form.elements.number_form.value;
	answers.like = ""
	let like = form.elements.feedback;
	let flag = true;
	for (let i = 0; i < like.length; i++) {
		if (like[i].checked == true) {
			if (!flag)
				answers.like += ', '
			answers.like += like[i].value;
			flag = false;
		}
	}
	if (flag)
		answers.like = "Не выбрано"


	answers.colorForm = form.elements.color_form.value;
	answers.check = ''
	let check = form.elements.mark;
	for (let i = 0; i < check.length; i++) {
		if (check[i].checked == true) {
			answers.check += check[i].value;
		}
	}

	var counter = localStorage.length;
	var keyName = "answers" + String(counter);
	localStorage.setItem(keyName, JSON.stringify(answers));

	form.reset();

});


var a = document.getElementById('a');

//вешаем на него событие
a.onclick = function () {
	var w = window.open('E:\\учеба\\САиПИС2\\Лаба3\\html\\index2.html', '', 'scrollbars=1');
	w.onload = function () {
		var z = this.document.getElementById("target");
		z.innerHTML = "Заголовок поменяли!!!!";
		z.style.color = "red";
	}
}

