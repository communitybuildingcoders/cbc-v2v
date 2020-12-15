<?php 
if($_POST['email']){
    $to = "communitybuildingcoders@gmail.com"; // this is the Email address to send the form
    $from = $_POST['email'];

    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "Return-Path: $from\r\n";
    $headers .= "CC: $to\r\n";
    $headers .= "BCC: $to\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
    
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $sponsor = $_POST['sponsor'];
    $volunteer = $_POST['volunteer'];
    $content = $_POST['message'];


    $message = "From: $name\r\n";
    $message .= "Company: $company\r\n";
    $message .= "Email: $email\r\n";
    $message .= "Telephone: $telephone\r\n";
    $message .= "Sponsor: $sponsor\r\n";
    $message .= "Volunteer: $volunteer\r\n";
    $message .= "Message: $content\r\n";
    
    
    
    $subject = "Form submission for Vet to Vet";


    mail($to,$subject,$message,$headers);
    header("Location: https://communitybuildingcoders.com");
    // Redirect to vet2vet website after deployment
} else {
    echo "Error";
}
?>