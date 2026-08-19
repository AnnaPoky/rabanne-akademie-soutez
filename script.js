const form = document.querySelector('#signup-form');
const note = document.querySelector('#form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  note.textContent = `Děkujeme. Na adresu ${email} pošleme další informace.`;
  form.reset();
});
