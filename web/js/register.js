window.onload = function () {

	const input_forms = [...document.querySelectorAll('.form-group input')];
	const btn_register = document.querySelector('.btn-register');

	handleSubmitRegister = () => {
		btn_register.addEventListener('click', e => {
			input_forms.forEach(input => {
				let length = input.value.length;
				if (length == 0 || length < 6) {
					e.preventDefault();
					input.classList.add('danger_input');
					const span_error = document.createElement('span');
					span_error.classList.add('error_field');
					span_error.innerHTML = 'This field is required or must be at least 6 characters';
					input.parentNode.appendChild(span_error);
				}
				// else if (length < 6 && length > 0) {
				// 	e.preventDefault();
				// 	input.classList.add('danger_input');
				// 	const span_error = document.createElement('span');
				// 	span_error.classList.add('error_field');
				// 	span_error.innerHTML = 'This field must be at least 6 characters';
				// 	input.parentNode.appendChild(span_error);
				// }
			})
		});
	};

	handleSubmitRegister();
}