<?php

$mysqli = new mysqli("localhost", "survey", "survey", "survey");

// check connection
if (mysqli_connect_errno()) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
   
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$name = (string)$data["name"];
$email = (string)$data["email"];
$password = (string)$data["password"];
$type = (string)$data["type"];

$stmt = $mysqli->prepare("
    INSERT INTO user (
        name,
        email,
        password,
        type
    )
    VALUES ( 
        ?,
        ?,
        ?,
        ?
    )
    WHERE NOT EXISTS (
        SELECT 
            *
        FROM 
            user 
        WHERE 
            email = ?;
    );
");

$stmt->bind_param('sssss', $name, $email, $password, $type, $email);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Successfully sign up with email ";
} else {
    http_response_code(404);
}

?>