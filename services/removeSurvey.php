<?php
include 'dbConnection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$survey_id = $data['id'];
$survey_title = $data['title'];
$success_flag = false;
mysqli_autocommit($mysqli,FALSE);

$delete_answer_stmt = "DELETE from answer WHERE question_id IN (SELECT id FROM question WHERE survey_id = " . $survey_id . ")";
$delete_question_stmt = "DELETE from question WHERE survey_id = " . $survey_id;
$delete_survey_student_stmt = "DELETE from survey_student WHERE survey_id = " . $survey_id;
$delete_survey_stmt = "DELETE from survey WHERE id = " . $survey_id;

if ($mysqli->query($delete_answer_stmt) === TRUE) {
    if ($mysqli->query($delete_question_stmt) === TRUE) {
        if ($mysqli->query($delete_survey_student_stmt) === TRUE) {
            if ($mysqli->query($delete_survey_stmt) === TRUE) {
                echo "Successfully removed " . $survey_title . ".";
                $success_flag = true;
                mysqli_commit($mysqli);
            }
        }
    }
}

if (!$success_flag) {
    http_response_code(500);
    die("Failed to remove " . $survey_title . ". Please try again.");
}

mysqli_close($mysqli);

?>