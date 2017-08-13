<?php 
 
	$sendto   = "oshka@ukr.net"; 
	$usermail = $_POST['email']; 
	 
	
	$subject  = "subscribe to SoftGray";
	$headers  = "From: " . strip_tags($usermail) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	 
	
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Please, send me news</h2>\r\n";
	$msg .= "<p><strong>to</strong> ".$usermail."</p>\r\n";
	$msg .= "</body></html>";
	 
	
	if(@mail($sendto, $subject, $msg, $headers)) {
	    echo "<center>thanks</center>";
	} else {
	    echo "<center>error</center>";
	}
 
?> 