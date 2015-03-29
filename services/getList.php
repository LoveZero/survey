<?php
$mysqli = new mysqli("localhost", "survey", "survey", "survey");

// check connection
if (mysqli_connect_errno()) {
    exit();
}

$user_id = $_GET["user"];

$stmt = $mysqli->prepare("
    SELECT 
        id,
        title,
        description,
        response_number
    FROM 
        survey 
    WHERE 
        user_id = ?;
");

$stmt->bind_param('i', $user_id);
$stmt->execute();
mysqli_stmt_bind_result($stmt, $id, $title, $description, $response_number);
mysqli_stmt_fetch($stmt);

$result = array();

while ($stmt->fetch()) {
    $result[] = array(
		'id' => $id, 
		'title' => $title,
		'description' => $description,
		'response_number' => $response_number,
    ); 
}

$result = json_encode($result);

echo $result;
?>