function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    guests: document.querySelector("#guests").value,
    date: document.querySelector("#date").value,
    time: document.querySelector("#time").value,
  };

  emailjs
    .send("service_21cqpgr", "template_rxj4nsl", templateParams)
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    });
}

  