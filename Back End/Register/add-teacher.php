<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Wisdomax";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from Front End
$data = json_decode(file_get_contents("php://input"));

$first_name = mysqli_real_escape_string($conn, trim($data->first_name));
$mid_name = mysqli_real_escape_string($conn, trim($data->mid_name));
$last_name = mysqli_real_escape_string($conn, trim($data->last_name));
$email = mysqli_real_escape_string($conn, trim($data->email));
$gender = mysqli_real_escape_string($conn, trim($data->gender));
$phone_number = mysqli_real_escape_string($conn, trim($data->phone_number));
$teacher_type = mysqli_real_escape_string($conn, trim($data->teacher_type));

$sql = "SELECT Email FROM TEACHER WHERE Email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows == 0) {
    $sql = "INSERT INTO `TEACHER`(`First_Name`,`Mid_Name`,`Last_Name`,`Email`,`Gender`,`Phone_Number`, `Teacher_Type`) 
    VALUES('$first_name','$mid_name','$last_name','$email','$gender','$phone_number','$teacher_type')";

    if ($conn->query($sql) === TRUE) {
        echo "User Added Successfully";
        http_response_code(200);
        
    }
    else {
        echo "Cannot add user";
        http_response_code(400);
    }
} 

else {
    echo "already exists";
    http_response_code(400);
}
$conn->close();















