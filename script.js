// Toggle menu
const toggleBtn = document.getElementById('toggle-menu');
const navbar = document.getElementById('navbar').querySelector('ul');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
// Form validation
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      e.preventDefault();
    }
  });
}
