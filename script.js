const scriptURL = 'https://script.google.com/macros/s/AKfycbyJLsghENJk8-YIVTOZZ2UYwovnO3HQWYYVhWLLoqHLACEK4t7fDE7aKc7WUH39L9uP_A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
