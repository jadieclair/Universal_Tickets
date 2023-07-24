// Select all input elements with class "input"
const inputs = document.querySelectorAll(".input");

// Function to add the "focus" class when an input element gets focus
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

// Function to remove the "focus" class when an input element loses focus
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// Add event listeners for focus and blur events to all input elements
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// ContactForm class definition
class ContactForm {
  constructor() {
    // Get references to form and input elements
    this.form = document.querySelector("form");
    this.nameInput = document.querySelector('input[name="name"]');
    this.emailInput = document.querySelector('input[name="email"]');
    this.phoneInput = document.querySelector('input[name="phone"]');
    this.messageInput = document.querySelector('textarea[name="message"]');
    this.submitBtn = document.querySelector('input[type="submit"]');

    // Add a click event listener to the submit button and bind it to the handleSubmit method
    this.submitBtn.addEventListener("click", this.handleSubmit.bind(this));
  }

  // Handle form submission
  handleSubmit(event) {
    event.preventDefault();
    try {
      this.validateFields();
      this.clearForm();
      alert("Form submitted successfully!");
    } catch (error) {
      alert(error.message);
    }
  }

  // Validate input fields before form submission
  validateFields() {
    const name = this.nameInput.value.trim();
    const email = this.emailInput.value.trim();
    const phone = this.phoneInput.value.trim();
    const message = this.messageInput.value.trim();

    // Check if any field is empty
    if (name === "" || email === "" || phone === "" || message === "") {
      throw new Error("Please fill in all fields.");
    }

    // Check if the email is valid
    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email address.");
    }

    // Check if the phone number is valid
    if (!this.isValidPhone(phone)) {
      throw new Error("Invalid phone number.");
    }
  }

  // Validate email format using regular expression
  isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Validate phone number format using regular expression
  isValidPhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  }

  // Clear the form after successful submission
  clearForm() {
    this.form.reset();
  }
}

// Create an instance of the ContactForm class
const contactForm = new ContactForm();
