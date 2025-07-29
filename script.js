// Show/hide password toggle
function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

// Save user data
function handleSignUp(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = {
    email,
    password,
    name: document.getElementById("name").value,
    gender: document.getElementById("gender").value,
    state: document.getElementById("state").value,
    lga: document.getElementById("lga").value,
    ward: document.getElementById("ward").value,
    education: document.getElementById("education").value,
    country: document.getElementById("country").value,
    phone: document.getElementById("phone").value
  };

  localStorage.setItem("studentUser", JSON.stringify(user));
  alert("Account created! Please login.");
  window.location.href = "login.html";
}

// Handle login
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("studentUser"));

  if (!user) {
    alert("No account found. Please sign up.");
    return;
  }

  if (email === user.email && password === user.password) {
    alert("Login successful!");
    window.location.href = "main.html";
  } else {
    alert("Wrong email or password!");
  }
}