<?php
include 'dbConnection.php';
//$mysqli = new mysqli("localhost", "survey", "survey", "survey");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$insert_question_stmt = "";
$insert_survey_stmt = "INSERT INTO survey (user_id, title, description) VALUES (" . $data['userID'] . ",'" . $data['title'] . "','" . $data['description'] . "')";

if ($mysqli->query($insert_survey_stmt) === TRUE) {
    $survey_id = $mysqli->insert_id;
    
    if ($survey_id > 0) {
        $question_query = construct_query($data, $survey_id);

        if (strlen($question_query) > 0) {
            $insert_question_stmt = "INSERT INTO question (survey_id, name, subtext, type, subtype) VALUES" . $question_query;
        }
        
        if ($mysqli->query($insert_question_stmt) === TRUE) {
            echo "Successfully created new survey \"" . $data['title'] . "\".";
        } else {
            die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
        }
    }
} else {
    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

$mysqli->close();

function construct_query($data, $survey_id) {
    $query = '';
    
    foreach ($data['questions'] as $question) {
        if ($question['qtype'] == "Text") {
            $subtype = "";
        } else {
            $subtype = json_encode($question['qsubtype']);
        }
        
        $query .= "(" . $survey_id . ",'" . $question['name'] . "','" . $question['subtext'] . "','" . $question['qtype'] . "','" . $subtype . "'),";
    }
    
    $query = rtrim($query, ",");
    return $query;
}

?>