const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstValue = first.value.trim();
    const lastValue = last.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();

    if(firstValue === '') {
        setError(first, 'FirstName is required');
    } else {
        setSuccess(first);
    }

    if(lastValue === '') {
        setError(last, 'Lastname is required');
    } else {
        setSuccess(last);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(mobileValue === '') {
        setError(mobile, 'mobile number is required');
    } else if (mobileValue.length > 10 ) {
        setError(mobile, 'Enter 10 digit number');
    } else {
        setSuccess(mobile);
    }
};
    
   