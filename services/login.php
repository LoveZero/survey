<?php
include 'dbConnection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$email = (string)$data["email"];
$password = (string)$data["password"];

$stmt = $mysqli->prepare("
    SELECT 
        id,
        name,
        type
    FROM 
        user 
    WHERE 
        email = ? AND 
        password = ?;
");

$stmt->bind_param('ss', $email, $password);
$stmt->execute();
mysqli_stmt_bind_result($stmt, $id, $name, $type);
mysqli_stmt_fetch($stmt);
$result = array(
	'id' => $id, 
	'name' => $name, 
	'type' => $type
);
$json_response = json_encode($result);
echo $json_response;
?>