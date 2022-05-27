<?php
	$name = $_POST['name'];
	$sender_email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$email_body = "Name: $name.\n".
					"Email: $sender_email.\n".
						"Subject: $subject.\n".
							"Message: $message.\n";

	$to = "crisjunlamoste16@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $sender_email \r\n";

	mail($to, $subject, $email_body, $headers);

	header("Location: index.html");

?>

