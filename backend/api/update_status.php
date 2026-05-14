<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "hosting");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "msg" => "DB failed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$id = intval($data['id'] ?? 0);
$status = $data['status'] ?? '';

if (!$id || !$status) {
    echo json_encode(["status" => "error", "msg" => "Missing data"]);
    exit;
}

$stmt = $conn->prepare("UPDATE orders SET status=? WHERE id=?");
$stmt->bind_param("si", $status, $id);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>