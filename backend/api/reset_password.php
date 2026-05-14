<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "hosting");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "msg" => "DB connection failed"]);
    exit;
}

// 🔥 FORMDATA RECEIVE
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (!$email || !$password) {
    echo json_encode(["status" => "error", "msg" => "Missing data"]);
    exit;
}

// 🔥 MATCH LOGIN HASH
$password = md5($password);

$sql = "UPDATE admins SET password='$password' WHERE email='$email'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "msg" => $conn->error]);
}
?>