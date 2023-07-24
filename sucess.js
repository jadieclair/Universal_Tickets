// Function to get URL parameters
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Function to display ticket information
  function displayTicketInfo() {
    const data = JSON.parse(localStorage.getItem("ticket"))

    document.getElementById('ticket-name').innerText = data.name;
    document.getElementById('ticket-email').innerText =data.email;
    document.getElementById('ticket-price').innerText = data.price;
    document.getElementById('ticket-quantity').innerText = data.quantity;
    document.getElementById('ticket-total').innerText = data.totalAmount;
  }
  
  // Function to print the ticket
  function printTicket() {
    window.print();
  }
  
  // Function to send the ticket via email (placeholder function)
  function sendEmail() {
    alert('Sending ticket via email...');
  }
  
  // Display ticket information when the page loads
  displayTicketInfo();