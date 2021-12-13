<?php
if (isset($_POST['email'])) {

    // Email information
    $admin_email = "127.0.0.1:5500"
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // send email
    mail($admin_email, "New Form Submission", $message .'-' . $phone, "from:" . $email);

    header('Location: https//127.0.0.1:5500/success.html');
}