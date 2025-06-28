  function showForm(formId) {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const title = document.getElementById("form-title");

    const isLogin = formId === 'login';
    const showFormEl = isLogin ? loginForm : registerForm;
    const hideFormEl = isLogin ? registerForm : loginForm;

    // Toggle link highlight
    document.querySelectorAll('.toggle-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`[onclick="showForm('${formId}')"]`).classList.add('active');

    // Change title
    title.textContent = isLogin ? 'Welcome Back' : 'Create Account';

    // Slide animation
    hideFormEl.classList.remove('slide-in');
    hideFormEl.classList.add('slide-out');
    setTimeout(() => {
      hideFormEl.classList.remove('active-form', 'slide-out');
      showFormEl.classList.add('active-form', 'slide-in');
    }, 300);
  }