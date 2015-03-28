<?php
$mysqli = new mysqli("localhost", "survey", "survey", "survey");

// check connection
if (mysqli_connect_errno()) {
    exit();
}

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$email = $data["email"];
$password = $data["password"];

?>