<?php
include 'dbConnection.php';

$survey_id = $_GET["survey"];

$stmt = $mysqli->prepare("
    SELECT 
        id,
        name,
        subtext,
        type,
		subtype
    FROM 
        question 
    WHERE 
        survey_id = ?;
");

$stmt->bind_param('i', $survey_id);
$stmt->execute();
mysqli_stmt_bind_result($stmt, $id, $name, $subtext, $type, $subtype);

$result = array();

while ($stmt->fetch()) {
    $result[] = array(
		'id' => $id, 
		'name' => $name,
		'subtext' => $subtext,
		'type' => $type,
		'subtype' => $subtype,
    ); 
}

$result = json_encode($result);

echo $result;

?>