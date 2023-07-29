const scriptURL = 'https://script.google.com/macros/s/AKfycbypui9y5uNtDj7e45aDwD9kpRIY-f1JPbWmxKMs4erfIrhx4JYZDg2-oRQ0t_NdNQS3VQ/exec'

const form = document.forms['contact-form']

form.addEventListener('wantmep', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
