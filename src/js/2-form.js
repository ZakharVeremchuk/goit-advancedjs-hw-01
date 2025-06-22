const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  const data = JSON.parse(saved);
  formData.email = data.email || "";
  formData.message = data.message || "";
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
} else {
  form.elements.email.value = "";
  form.elements.message.value = "";
}

form.addEventListener('input', e => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
});