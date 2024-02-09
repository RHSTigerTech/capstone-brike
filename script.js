document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);

    // Create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php"); // Replace "send_email.php" with the path to your PHP script
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Email sent successfully!");
                // Optionally, you can display a success message to the user
            } else {
                console.error("Failed to send email:", xhr.statusText);
                // Optionally, you can display an error message to the user
            }
        }
    };
    xhr.send(formData);
});
