'use strict'

const submitButton = document.querySelector('.main-container__button')

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('.container-form__input-email')
    const emailError = document.querySelector('.container-form__span-email')
    const passwordInput = document.querySelector('.container-form__input-password')
    const passwordError = document.querySelector('.container-form__span-password')
    const passConfirmInput = document.querySelector('.container-form__input-passconfirm')
    const passConfirmError = document.querySelector('.container-form__span-passconfirm')
    let sex
    let formValid = true

    function validateEmail(email) {    
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
        return re.test(String(email).toLowerCase());
    }
    
    const email = emailInput.value

    if (emailInput.value === '') {
        emailError.innerText = 'Поле обязательно для заполнения';
        emailInput.style.borderColor = 'rgba(238, 36, 36, 1)';
        formValid = false;
    } else if (!validateEmail(email)) {
        emailError.innerText = 'Емейл введён некорректно';
        emailInput.style.borderColor = 'rgba(238, 36, 36, 1)';
        formValid = false;
    } else {
        emailError.innerText = '';
        emailInput.style.borderColor = 'rgba(120, 120, 120, 1)';
    }

    if (passwordInput.value === '') {
        passwordError.innerText = 'Поле обязательно для заполнения';
        passwordInput.style.borderColor = 'rgba(238, 36, 36, 1)';
        formValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.innerText = 'Пароль должен содержать не менее 8 символов';
        passwordInput.style.borderColor = 'rgba(238, 36, 36, 1)';
        formValid = false;
    } else {
        passwordError.innerText = '';
        passwordInput.style.borderColor = 'rgba(120, 120, 120, 1)';
    }

    if (passConfirmInput === '' || passConfirmInput.value !== passwordInput.value) {
        passConfirmError.innerText = 'Пароли не совпадают';
        passConfirmInput.style.borderColor = 'rgba(238, 36, 36, 1)';
        formValid = false;
    } else {
        passConfirmError.innerText = '';
        passConfirmInput.style.borderColor = 'rgba(120, 120, 120, 1)';
    }
    if (formValid === true) {
        
        getSex();
        
        createUser ();
    
        function getSex() {
            const male = document.getElementById('male');
            const female = document.getElementById('female');

            if (male.checked) {
                sex = 'male';
            } else if (female.checked) {
                sex = 'female';
            }
        }    

        function createUser() {
            const aboutUser = document.getElementById('about').value
            const agreement = document.getElementById('subscription').checked
            let user = new Object ();

            user.email = emailInput.value;
            user.password = passwordInput.value;
            user.sex = sex; 
            user.about = aboutUser;
            user.agreement = agreement;
    
        return console.log(user);
        }
    }
})
