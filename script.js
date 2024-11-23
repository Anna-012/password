function validateEmail() {
    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
      emailMessage.textContent = 'Email looks good!';
      emailMessage.className = 'success';
    } else {
      emailMessage.textContent = 'Email must be more than 3 characters and include "@" and "."';
      emailMessage.className = 'error';
    }
  }
  
  function validatePassword() {
    const passwordValue = passwordInput.value;
    if (passwordValue.length > 8) {
      passwordMessage.textContent = 'Password is strong!';
      passwordMessage.className = 'success';
    } else {
      passwordMessage.textContent = 'Password must be more than 8 characters!';
      passwordMessage.className = 'error';
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const isEmailValid = emailMessage.className === 'success';
    const isPasswordValid = passwordMessage.className === 'success';
  
    if (isEmailValid && isPasswordValid) {
      const confirmation = confirm('Are you sure you want to sign up?');
      if (confirmation) {
        alert('Successful signup!');
      } else {
        resetForm();
      }
    } else {
      alert('Please fix the errors before submitting!');
    }
  }
  
  function resetForm() {
    emailInput.value = '';
    passwordInput.value = '';
    emailMessage.textContent = '';
    passwordMessage.textContent = '';
  }
  