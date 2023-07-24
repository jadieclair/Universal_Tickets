// Define the LoginForm class
class LoginForm {
  constructor() {
    // Selecting form elements
    this.form = document.querySelector("form");
    this.nameInput = document.querySelector('input[type="text"]');
    this.emailInput = document.querySelector('input[type="email"]');
    this.passwordInput = document.querySelector('input[type="password"]');
    this.rememberCheckbox = document.querySelector('input[type="checkbox"]');
    this.button = document.querySelector(".con-button-style"); // Updated button class name

    // Registering the submitForm method as the form's submit event handler
    this.form.addEventListener("submit", this.submitForm.bind(this));
  }

  // Method to validate the form inputs
  validateForm() {
    const name = this.nameInput.value.trim();
    const email = this.emailInput.value.trim();
    const password = this.passwordInput.value.trim();

    if (!name || !email || !password) {
      throw new Error("Please fill in all fields.");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    if (!/\d/.test(password)) {
      throw new Error("Password must contain at least 1 number.");
    }
  }

  // Method to handle form submission
  submitForm(event) {
    event.preventDefault(); // Prevent form submission to avoid page refresh

    try {
      this.validateForm();
      // If all fields are filled and password is valid, show an alert with a success message.
      alert("Login successful!");
      this.clearForm();
      // Redirect to the "about.html" page
      window.location.href = "about.html";
    } catch (error) {
      // If any error occurs during validation, show an alert with the error message.
      alert(error.message);
    }
  }

  // Method to clear the form inputs
  clearForm() {
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.rememberCheckbox.checked = false;
  }
}

// Create an instance of the LoginForm class
const loginForm = new LoginForm();
