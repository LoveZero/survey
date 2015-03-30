<?php
$mysqli = new mysqli("localhost", "survey", "survey", "survey");
// $mysqli = new mysqli("110.4.46.121", "survey", "survey", "survey");

// check connection
if (mysqli_connect_errno()) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
?>