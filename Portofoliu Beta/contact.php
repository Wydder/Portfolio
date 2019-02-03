<?php

if (isset($_POST['submit'])) {

    $name = trim(urldecode(html_entity_decode(strip_tags($_POST['name']))));
    $email = trim(urldecode(html_entity_decode(strip_tags($_POST['email']))));
    $message = trim(urldecode(html_entity_decode(strip_tags($_POST['message']))));

    $from = 'Contact Form';
	$to = 'andrei.mosica@gmail.com';
	$subject = 'Message from Contact Form ';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    mail($to, $subject, $body, $from);

    header('Location:index.php');
}

?>
