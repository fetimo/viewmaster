<?php
header("Location: index.html");
if(isset($_POST['submit'])) {

	$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
	$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
	
	if(empty($name) || empty($message)) {
		header('Location: index.html');
		die();
	}

	$body = "From: $name\n Message:\n $message\n";
	mail('tim@fetimo.com', 'View-Master Enquiry', $body);
	$news = "Thank you $name, your message has been delivered to us! We'll do my best to get back to you ASAP.";
} else {
	$news = "Don't Panic. Something's happened. Call the police and check all vital organs, or check that you've filled in the form properly.";
}