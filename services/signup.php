<?php
include 'dbConnection.php';

$id = 0;
   
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$name = (string)$data["name"];
$email = (string)$data["email"];
$password = (string)$data["password"];
$type = (string)$data["type"];

$stmt = $mysqli->prepare("
    SELECT 
        id
    FROM 
        user 
    WHERE 
        email = ?
");

$stmt->bind_param('s', $email);
$stmt->execute();
mysqli_stmt_bind_result($stmt, $id);
mysqli_stmt_fetch($stmt);
$stmt->close();

if ($id > 0) {
    http_response_code(500);
} else {
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
    ");

    $stmt->bind_param('ssss', $name, $email, $password, $type);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Successfully sign up with email " . $email . ".";
    } else {
        http_response_code(400);
    }
}
$stmt->close();
$mysqli->close();
?>