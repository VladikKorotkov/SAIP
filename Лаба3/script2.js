for (let i = 0; i < localStorage.length; i++) {
	let tabBodyRef = document
		.getElementById("table")
		.getElementsByTagName("tbody")[0];
	let newRow = tabBodyRef.insertRow();
	let keyName = "answers" + String(i);
	let answers = JSON.parse(localStorage.getItem(keyName));
	j = 0;
	let flag = true;
	for (let a in answers) {
		if (flag) {
			let list = document.getElementById('datalist');
			var option = document.createElement('option');
			option.value = answers[a];
			list.appendChild(option);
			flag = false;
		}
		newRow.insertCell(j).appendChild(document.createTextNode(answers[a]));
		j++;
	}
}



const formElement = document.querySelector('button'); // извлекаем элемент формы
formElement.addEventListener('click', () => {
	localStorage.clear();
	location.reload();
})

