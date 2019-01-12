window.onload = function(){

	const form_inputs = [...document.querySelectorAll('.form-group input')];
	const btn_login = document.querySelector('.container_form .btn-login');
	
	(handleSubmitLogin = () => {
		btn_login.addEventListener('click', e => {
			form_inputs.forEach(input => {
				let length = input.value.length;
				if(length < 6){
					e.preventDefault();
					input.classList.add('danger_input');
				}
			})
		});
	})();

}
