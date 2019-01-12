window.onload = function(){

    const input_forms = [...document.querySelectorAll('.form-group input')];
    const btn_register = document.querySelector('.btn-register')

    handleSubmitRegister = () => {
		btn_register.addEventListener('click', e => {
			input_forms.forEach(input => {
				let length = input.value.length;
				if(length < 6){
					e.preventDefault();
					input.classList.add('danger_input');
				}
			})
		});
    };
    
    handleSubmitRegister();
}