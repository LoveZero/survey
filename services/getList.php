<?php
include 'dbConnection.php';

if (isset($_GET['user'])) {
	$user_id = $_GET["user"];
} else {
	$user_id = 0;
}

if (isset($_GET['userType'])) {
	$user_type = $_GET["userType"];
} else {
	$user_type = 0;
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

if ($user_type > 0) {
	$stmt .= 
	"WHERE 
	user_id = ?;";
}
$stmt = $mysqli->prepare($stmt);

if ($user_type > 0) {
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

if ($user_type == 0) {
    $select_survey_student_stmt = "SELECT survey_id FROM survey_student WHERE student_id = " . $user_id . " AND status = '1'";
    $survey_status = $mysqli->query($select_survey_student_stmt);
    foreach ($result as &$survey) {
        foreach ($survey_status as $value) {
            if ($survey['id'] == $value['survey_id']) {
                $survey['status'] = "Done";
                break 1;
            } else {
                $survey['status'] = "";
            }
        }
    }
}
$result = json_encode($result);

echo $result;
?>
