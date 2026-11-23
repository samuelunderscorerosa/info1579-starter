const contactNameInput = document.getElementById("contactName");
const contactEmailInput = document.getElementById("contactEmail");
const contactMessageInput = document.getElementById("contactMessage");
const sendButton = document.getElementById("sendButton");
const clearButton = document.getElementById("clearButton");
const contactOutput = document.getElementById("output");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const sendMessage = () => {
  const name = contactNameInput.value.trim();
  const email = contactEmailInput.value.trim();
  const message = contactMessageInput.value.trim();
  const errors = [];

  if (name === "") {
    errors.push("Name is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("A valid email address is required.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  if (errors.length > 0) {
    contactOutput.innerHTML = `
      <div class="dashboard-card">
        <h2>Error</h2>
        <ul>${errors.map((error) => `<li>${error}</li>`).join("")}</ul>
      </div>`;
    contactOutput.style.backgroundColor = "#f8d7da";
    return;
  }

  console.log("Contact Name: ", name);
  console.log("Contact Email: ", email);
  console.log("Contact Message: ", message);

  contactOutput.innerHTML = `
    <div class="dashboard-card">
      <h2>Thank you, ${escapeHtml(name)}!</h2>
      <p>Your message was received. A reply will be sent to ${escapeHtml(email)}.</p>
      <p><strong>Your message:</strong> ${escapeHtml(message)}</p>
    </div>`;
  contactOutput.style.backgroundColor = "#d4edda";
};

const clearForm = () => {
  contactNameInput.value = "";
  contactEmailInput.value = "";
  contactMessageInput.value = "";
  contactOutput.innerHTML = "";
  contactOutput.style.backgroundColor = "";
};

sendButton.addEventListener("click", sendMessage);
clearButton.addEventListener("click", clearForm);
