<?php
include 'dbConnection.php';

if (isset($_GET['user'])) {
	$user_id = $_GET["user"];
} else {
	$user_id = 0;
}

$stmt = "
    SELECT 
        id,
        title,
        description,
        response_number
    FROM 
        survey 
";

if ($user_id > 0) {
	$stmt .= 
	"WHERE 
	user_id = ?;";
}
$stmt = $mysqli->prepare($stmt);

if ($user_id > 0) {
	$stmt->bind_param('i', $user_id);
}

$stmt->execute();
mysqli_stmt_bind_result($stmt, $id, $title, $description, $response_number);

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
