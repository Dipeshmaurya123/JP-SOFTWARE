<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// DB CONNECT
$conn = new mysqli("localhost", "root", "", "hosting");

if ($conn->connect_error) {
  echo json_encode(["status" => "error", "msg" => "DB failed"]);
  exit;
}

// GET JSON DATA
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  echo json_encode(["status" => "error", "msg" => "No data"]);
  exit;
}

$username = $data['username'] ?? '';
$password = md5($data['password'] ?? '');

// QUERY
$sql = "SELECT * FROM admins WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error"]);
}
?>