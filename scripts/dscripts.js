
// VARIABLES

document.addEventListener('DOMContentLoaded', function () {
  const myform = document.getElementById('myForm');
  const firstname = document.getElementsByName('firstname')[0];
  const lastname = document.getElementsByName('lastname')[0];
  const email = document.getElementsByName('email')[0];
  const phonenumber = document.getElementsByName('phonenumber')[0];
  const date = document.getElementsByName('date')[0];
  const time = document.getElementsByName('time')[0];
  const checkbox = document.getElementsByName('checkbox')[0];
  const address = document.getElementsByName('address')[0];
  const submitButton = document.getElementById('submitButton');

  // TO MAKE SURE THE DATE IS ALLOWED FROM THE DAY THE USER OPENS THE WEBSITE
  if (date) {
    date.min = new Date().toISOString().split("T")[0];
  }

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const formname = myForm.getAttribute('name');

    // USED TO CHECK WHAT PAGE THE USER IS IN AND USE THE FUNCTIONS FROM ITS PERSPECTIVE FORM
    if (formname === 'contact') {
      validateContactInputs();
    } else {
      validateOrderInputs();
    }

  });

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    console.log(errorDisplay, "inpuy", inputControl);
    errorDisplay.innerText = message;
    errorDisplay.style.color = 'red';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };

  // REGEX TO VALIDATE THE EMAIL FORMAT
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // FUNCTIONS FOR THE BOOK A TABLE PAGE'S FORM
  const validateContactInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email && email.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();

    // REGEX TO VALIDATE FIRST NAME FORMAT
    const String = new RegExp(/^([a-zA-Z]{3,})$/);

    // CHECKS IF THE NAMES WERE INSERTED AND WITH A PROPER FORMAT
    if (firstnameValue === '' || !String.test(firstnameValue)) {
      setError(firstname, 'First name is required');
    } else {
      setSuccess(firstname);
    }

    if (lastnameValue === '') {
      setError(lastname, 'Last name is required');
    } else {
      setSuccess(lastname);
    }

    // REGEX TO VALIDATE NUMBER FORMAT
    const Number = new RegExp(/^\d{8,}$/);

    // CHECKS IF THE PHONE NUMBER WAS INSERTED AND WITH A PROPER FORMAT
    if (phonenumberValue === '' || !Number.test(phonenumberValue)) {
      setError(phonenumber, 'Phone number is required');
    } else {
      setSuccess(phonenumber);
    }

    // CHECKS IF THE EMAIL WAS INSERTED AND WITH A PROPER FORMAT
    if (emailValue === '' || !isValidEmail(emailValue)) {
      setError(email, 'Email is required');
    } else {
      setSuccess(email);
    }

    // CHECKS IF THE DATE WAS INSERTED OR IF IT'S NULL
    if (dateValue === '' || dateValue === 'DD-MM-YYYY') {
      setError(date, 'Date is required');
    } else {
      setSuccess(date);
    }

    // CHECKS IF CHECKBOX IS TRUE OR FALSE
    if (!checkbox.checked) {
      setError(checkbox, 'Please mark the checkbox');
    } else {
      setSuccess(checkbox);
    }

    // CHECKS IF EVERYTHING WAS PROPERLY FILLED BEFORE SUBMITING THE ORDER
    if (firstnameValue !== '' && lastnameValue !== '' && emailValue !== '' && phonenumberValue !== '' && dateValue !== '' && timeValue !== '' && checkbox.checked !== false) {
      alert('Your booking was placed. See you soon!');

      //AFTER BEING SUBMITTED, RESET THE FORM
      myform.reset();
    }

  };

  //SAME IDEA AS THE PREVIOUS FORM, BUT WITH A FEW DIFFERENTE DATA INPUT
  const validateOrderInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const addressValue = address.value.trim();
    const phonenumberValue = phonenumber.value.trim();

    const String = new RegExp(/^([a-zA-Z]{3,})$/);

    if (firstnameValue === '' || !String.test(firstnameValue)) {
      setError(firstname, 'First name is required');
    } else {
      setSuccess(firstname);
    }

    if (lastnameValue === '') {
      setError(lastname, 'Last name is required');
    } else {
      setSuccess(lastname);
    }

    const Number = new RegExp(/^\d{8,}$/);

    if (phonenumberValue === '' || !Number.test(phonenumberValue)) {
      setError(phonenumber, 'Phone number is required');
    } else {
      setSuccess(phonenumber);
    }

    const Addr = new RegExp(/^\d+\s[A-Za-z]+\s?[A-Za-z\s]+$/);

    if (addressValue === '' || !Addr.test(addressValue)) {
      setError(address, 'Address is required');
    } else {
      setSuccess(address);
    }

    if (!checkbox.checked) {
      setError(checkbox, 'Please mark the checkbox');
    } else {
      setSuccess(checkbox);
    }

    if (firstnameValue !== '' && lastnameValue !== '' && addressValue !== '' && checkbox.checked !== false) {
      alert('Your order was placed. See you soon!');

      myform.reset();
    }
  };
});
