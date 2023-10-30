/**
 * TODO: 8.4 Register new user
 *       - Handle registration form submission
 *       - Prevent registration when password and passwordConfirmation do not match
 *       - Use createNotification() function from utils.js to show user messages of
 *       - error conditions and successful registration
 *       - Reset the form back to empty after successful registration
 *       - Use postOrPutJSON() function from utils.js to send your data back to server
 */
const registrationForm = document.querySelector('#register-form');

registrationForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const passwordConfirmation = document.querySelector('#passwordConfirmation').value;

  if (password !== passwordConfirmation) {
    createNotification('Password and password confirmation do not match', 'error');
    return;
  }

  try {
    const response = await postOrPutJSON('/api/register', 'POST', { email, password });
    if (response.status === 201 || response.status === 200) {
      registrationForm.reset();
      createNotification('Registration successful', 'success');
    }
    else
    {
      createNotification('Error registering user', 'error');
    }
  } catch (error) {
    createNotification('Error registering user', 'error');
  }
});