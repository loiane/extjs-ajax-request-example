<?php

require("db/db.php");

// username and password sent from form 
$userName = $_POST['user']; 
$pass = $_POST['password']; 

$userName = $mysqli->real_escape_string($userName);
$pass = $mysqli->real_escape_string($pass);
$sql = "SELECT * FROM USER WHERE userName='$userName' and password='$pass'";

$success = false;
$msg = ' ';

if ($resultdb = $mysqli->query($sql)) {

        // determine number of rows result set
        $count = $resultdb->num_rows;

        // If result matched $userName and $pass, table row must be 1 row
        if($count==1){ 
                
                $success = true;
                $msg = utf8_encode('Usuário Autenticado!');

        } else {
		
                $success = false;
                $msg = utf8_encode('Usuário ou Senha Incorretos.');
        }

        /* close result set */
        $resultdb->close();
}

/* close connection */
$mysqli->close();

//JSON encoding
echo json_encode(array(
        "success" => $success,
        "msg" => $msg
)); 
?>