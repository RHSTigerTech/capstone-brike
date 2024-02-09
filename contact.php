<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set up email parameters
$to = "supertek2021@gmail.com"; // Replace with the recipient's email address
$subject = "Contact Form Submission";
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email";

// Send email
if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo "Email sent successfully!";
} else {
    // Failed to send email
    echo "Failed to send email.";
}
?>