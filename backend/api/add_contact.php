<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// DB CONNECTION
$conn = new mysqli("localhost", "root", "", "hosting");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "msg" => "DB connection failed"]);
    exit;
}

// GET JSON DATA
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

if (!$name || !$email || !$message) {
    echo json_encode(["status" => "error", "msg" => "Empty data"]);
    exit;
}

// INSERT QUERY
$sql = "INSERT INTO contacts (name, email, message) 
        VALUES ('$name', '$email', '$message')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "msg" => $conn->error]);
}
?>