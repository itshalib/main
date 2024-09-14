<?php
// Define the path to the text file where information will be stored
$file = 'device_info.txt';

// Collect device information
$ipAddress = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$dateTime = date('Y-m-d H:i:s');

// Prepare the information to be written
$data = "Date/Time: $dateTime\n";
$data .= "IP Address: $ipAddress\n";
$data .= "User Agent: $userAgent\n";
$data .= "---------------------------------\n";

// Write the information to the file
file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

// Optionally, you can output a confirmation message or redirect the user
echo "Device information stored successfully.";
?>
