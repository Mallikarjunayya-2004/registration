<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$address = $_POST['address'];

echo "<h3 style='color:green;'>Registration Successful!</h3>";
echo "<p><b>Name:</b> $name</p>";
echo "<p><b>Email:</b> $email</p>";
echo "<p><b>Phone:</b> $phone</p>";
echo "<p><b>Course:</b> $course</p>";
echo "<p><b>Address:</b> $address</p>";
?>
