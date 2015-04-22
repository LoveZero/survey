<?php
include 'dbConnection.php';
//$mysqli = new mysqli("localhost", "survey", "survey", "survey");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$survey_id = $data['surveyID'];
$user_id = $data['userID'];
$answer = $data['answer'];
mysqli_autocommit($mysqli,FALSE);

$answer_query = construct_query($answer, $user_id);
$insert_answer_stmt = "";
$success_flag = false;

if (strlen($answer_query) > 0) {
    $insert_answer_stmt = "INSERT INTO answer (question_id, user_id, description) VALUES" . $answer_query;
}

$insert_survey_student_stmt = "INSERT INTO survey_student (survey_id, student_id, status) VALUES(" . $survey_id . "," . $user_id . ",'1')";
$update_survey_stmt = "UPDATE survey SET response_number = response_number + 1 WHERE id = " . $survey_id;

if ($mysqli->query($insert_answer_stmt) === TRUE) {
    if ($mysqli->query($insert_survey_student_stmt) === TRUE) {
        if ($mysqli->query($update_survey_stmt) === TRUE) {
            $success_flag = true;
            mysqli_commit($mysqli);
            echo "Successfully submit survey!";
        }
    }
}

if (!$success_flag) {
    http_response_code(500);
    die("Failed to submit. Please try again!");
}

function construct_query($data, $user_id) {
    $query = '';
    
    foreach ($data as $question) {       
        $query .= "(" . $question['id'] . "," . $user_id . ",'" . $question['description'] . "'),";
    }
    
    $query = rtrim($query, ",");
    return $query;
}
?>