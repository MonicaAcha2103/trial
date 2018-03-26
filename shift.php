<?php
$servername = "localhost";
$username = "root";
$password = "welcome@123";
$dbname = "ex2";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$eid= $_GET['eid'];
$from= $_GET['from'];
$to= $_GET['to'];
$sql="SELECT scode FROM  hub_temp_shift WHERE eid =".$eid ." AND shiftdate >'" .$from."' AND shiftdate<'".$to."'";
$result = $conn->query($sql);
//echo $sql;
 $response=array();


if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
 array_push($response,$row['scode']);
    }
} else {
    echo "0 results";
}
echo json_encode($response);
$conn->close();


?> 


