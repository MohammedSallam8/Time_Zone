
alert("hello fuckers");

var myButton = document.getElementById('goup');

window.onscroll = function () {

	'use strict';

	if (window.pageYOffset >= 800) {

		myButton.style.display = 'block';
	}
	else{
		myButton.style.display = 'none';
	}
};

	myButton.onclick = function () {

		'use strict';

		window.scrollto(0. 0);
	};