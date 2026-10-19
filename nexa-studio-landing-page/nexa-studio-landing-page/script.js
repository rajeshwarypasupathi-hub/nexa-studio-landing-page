const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

function updateThemeButton() {
  const dark = root.classList.contains('dark');
  themeIcon.textContent = dark ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
}
updateThemeButton();

themeToggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  const theme = root.classList.contains('dark') ? 'dark' : 'light';
  try { localStorage.setItem('nexa-theme', theme); } catch (_) {}
  updateThemeButton();
});

function closeMenu() {
  navLinks.classList.add('hidden');
  navLinks.classList.remove('flex');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  menuIcon.textContent = '☰';
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  navLinks.classList.toggle('hidden', isOpen);
  navLinks.classList.toggle('flex', !isOpen);
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  menuIcon.textContent = isOpen ? '☰' : '×';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth >= 768) closeMenu(); });

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const fields = {
  name: { input: document.getElementById('name'), error: document.getElementById('name-error'), message: 'Please enter at least 2 characters for your name.' },
  email: { input: document.getElementById('email'), error: document.getElementById('email-error'), message: 'Please enter a valid email address.' },
  message: { input: document.getElementById('message'), error: document.getElementById('message-error'), message: 'Please enter at least 10 characters.' }
};
function validateField(key) {
  const field = fields[key];
  const input = field.input;
  let valid = input.checkValidity();
  if (key === 'name') valid = input.value.trim().length >= 2;
  if (key === 'message') valid = input.value.trim().length >= 10;
  if (key === 'email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  field.error.textContent = valid ? '' : field.message;
  field.error.classList.toggle('hidden', valid);
  input.setAttribute('aria-invalid', String(!valid));
  return valid;
}
Object.keys(fields).forEach(key => {
  fields[key].input.addEventListener('blur', () => validateField(key));
  fields[key].input.addEventListener('input', () => {
    if (fields[key].input.getAttribute('aria-invalid') === 'true') validateField(key);
    status.classList.add('hidden');
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  const valid = Object.keys(fields).map(validateField).every(Boolean) && document.getElementById('service').value !== '';
  if (!valid) {
    status.textContent = 'Please check the highlighted fields and choose a service.';
    status.className = 'rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700';
    status.classList.remove('hidden');
    const firstInvalid = form.querySelector('[aria-invalid="true"]') || document.getElementById('service');
    firstInvalid.focus();
    return;
  }
  status.textContent = 'Looks good! This demo validates your message locally, but it does not send or store it. Connect a backend to receive enquiries.';
  status.className = 'rounded-xl bg-[#e8f8cc] p-4 text-sm font-medium text-[#34451c]';
  status.classList.remove('hidden');
});
