import '../sass/app.scss';

const contactForm = document.querySelector('.contact-form');
const emailInput = document.querySelector('#email');
const emailField = document.querySelector('.contact-form__field--email');

if (emailInput && emailField) {
  const validateEmail = () => {
    const hasValue = emailInput.value.trim() !== '';
    const isInvalid = hasValue && !emailInput.validity.valid;

    emailField.classList.toggle('is-error', isInvalid);
  };

  emailInput.addEventListener('blur', validateEmail);

  emailInput.addEventListener('input', () => {
    if (emailField.classList.contains('is-error')) {
      validateEmail();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInput && emailField) {
      const hasValue = emailInput.value.trim() !== '';
      const isInvalid = hasValue && !emailInput.validity.valid;

      emailField.classList.toggle('is-error', isInvalid);
    }
  });
}