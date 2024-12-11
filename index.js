

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

      // Validate Name
      if (name === "") {
        alert("Please enter your name.");
        return false; // Prevent form submission
      }
  
    
  
      // Validate Subject
      if (subject === "") {
        alert("Please enter a subject.");
        return false;
      }
  
      // Validate Message
      if (message === "") {
        alert("Please enter your message.");
        return false;
      }
  

    alert("Form submitted successfully!");
    return true;
  }
