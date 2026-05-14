<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "hosting");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$otp = $data['otp'];

$result = $conn->query("SELECT * FROM password_resets WHERE email='$email' AND otp='$otp'");

if ($result->num_rows > 0) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error"]);
}
?>