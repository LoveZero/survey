<?php
include 'dbConnection.php';
//$mysqli = new mysqli("localhost", "survey", "survey", "survey");

$survey_id = $_GET["surveyID"];
$answers = array();
$output['answers'] = array();
$select_question_stmt = "SELECT id,name FROM question WHERE survey_id = " . $survey_id;

$result = $mysqli->query($select_question_stmt);

$question_id = "";

while($value = $result->fetch_array()){ 
    $question_id .= $value['id'] . ",";
    $output['questions'][] = $value['name'];
}

$question_num = count($output['questions']);
mysqli_free_result($result);

if (strlen($question_id) > 0) {
    $question_id = rtrim($question_id, ",");
}

$select_answer_stmt = "SELECT description FROM answer WHERE question_id IN ($question_id)";

if ($result = mysqli_query($mysqli, $select_answer_stmt)) {
    $index = 0;
    $cur_index = 0;
    /* fetch associative array */
    while ($row = mysqli_fetch_row($result)) {

        if ($cur_index < $question_num) {
            $answers[$index][] = empty($row[0]) ? "" : $row[0];
            $cur_index++;
        } else {   
            $index++;
            $answers[$index][] = empty($row[0]) ? "" : $row[0];
            $cur_index = 1;
        }
               
    }

    /* free result set */
    mysqli_free_result($result);
}

$output['answers'] = $answers;

echo json_encode($output);

mysqli_close($mysqli);

?>