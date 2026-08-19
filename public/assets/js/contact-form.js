/**
 * Contact form submit — posts JSON to /api/contact and expects plain text "OK".
 */
(function () {
  'use strict';

  const forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const action = form.getAttribute('action');
      if (!action) {
        displayError(form, 'The form action property is not set!');
        return;
      }

      form.querySelector('.loading').classList.add('d-block');
      form.querySelector('.error-message').classList.remove('d-block');
      form.querySelector('.sent-message').classList.remove('d-block');

      const formData = new FormData(form);
      const payload = {
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        subject: String(formData.get('subject') || '').trim(),
        message: String(formData.get('message') || '').trim(),
      };

      fetch(action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.text().then(function (text) {
            if (response.ok) {
              return text;
            }
            throw new Error(text || response.status + ' ' + response.statusText);
          });
        })
        .then(function (data) {
          form.querySelector('.loading').classList.remove('d-block');
          if (data.trim() === 'OK') {
            form.querySelector('.sent-message').classList.add('d-block');
            form.reset();
          } else {
            throw new Error(data || 'Form submission failed.');
          }
        })
        .catch(function (error) {
          displayError(form, error);
        });
    });
  });

  function displayError(form, error) {
    form.querySelector('.loading').classList.remove('d-block');
    form.querySelector('.error-message').innerHTML = error;
    form.querySelector('.error-message').classList.add('d-block');
  }
})();
