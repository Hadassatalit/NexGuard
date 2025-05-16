
document.addEventListener("DOMContentLoaded", () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginBtn = document.querySelector(".login-btn");
  const togglePassword = document.getElementById("togglePassword");

  // Criar aviso de erro
  const createError = (message) => {
    let errorBox = document.querySelector(".error-msg");
    if (!errorBox) {
      errorBox = document.createElement("div");
      errorBox.className = "error-msg";
      errorBox.style.color = "#e74c3c";
      errorBox.style.fontSize = "13px";
      errorBox.style.marginTop = "10px";
      errorBox.style.textAlign = "center";
      loginBtn.insertAdjacentElement("beforebegin", errorBox);
    }
    errorBox.textContent = message;
  };

  // Remover aviso de erro
  const removeError = () => {
    const errorBox = document.querySelector(".error-msg");
    if (errorBox) errorBox.remove();
  };

  // Alternar visibilidade da senha
  togglePassword.addEventListener("click", () => {
    const isPassword = password.type === "password";
    password.type = isPassword ? "text" : "password";
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });

  // Habilitar botão se ambos os campos forem preenchidos
  const validateFields = () => {
    if (username.value.trim() !== "" && password.value.trim() !== "") {
      loginBtn.disabled = false;
      loginBtn.style.cursor = "pointer";
      loginBtn.style.backgroundColor = "#333";
    } else {
      loginBtn.disabled = true;
      loginBtn.style.cursor = "not-allowed";
      loginBtn.style.backgroundColor = "#ccc";
    }
  };

  username.addEventListener("input", () => {
    validateFields();
    removeError();
  });

  password.addEventListener("input", () => {
    validateFields();
    removeError();
  });

  // Simulação de login
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (username.value.trim() === "") {
      createError("O campo de nome de usuário não foi preenchido.");
      return;
    }

    if (password.value.trim() === "") {
      createError("O campo de senha não foi preenchido.");
      return;
    }

    // Aqui você pode conectar com o backend, mas vamos simular um login errado
    const isLoginCorrect = false;

    if (!isLoginCorrect) {
      createError("Nome de usuário ou senha incorretos.");
    }
  });
});

  




   