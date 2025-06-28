function switchForm(formType) {
      const registerForm = document.getElementById("registerForm");
      const loginForm = document.getElementById("loginForm");

      if (formType === "login") {
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
      } else {
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
      }
    }