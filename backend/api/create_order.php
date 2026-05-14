<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "hosting");

if ($conn->connect_error) {
  die(json_encode([
    "status" => "error",
    "msg" => "DB connection failed"
  ]));
}

// 🔥 JSON DATA
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$plan = $data['plan'] ?? '';

if (!$name || !$email || !$phone || !$plan) {
  echo json_encode([
    "status" => "error",
    "msg" => "Missing data"
  ]);
  exit;
}

/* 🔥 AUTO PRICE */

$price = 0;

if ($plan == "Basic Hosting") {
  $price = 299;
}

elseif ($plan == "Pro Hosting") {
  $price = 999;
}

elseif ($plan == "Business Hosting") {
  $price = 1999;
}

/* 🔥 INSERT */

$stmt = $conn->prepare(
  "INSERT INTO orders (name, email, phone, plan, price, status)
   VALUES (?, ?, ?, ?, ?, ?)"
);

$status = "Start";

$stmt->bind_param(
  "ssssis",
  $name,
  $email,
  $phone,
  $plan,
  $price,
  $status
);

if ($stmt->execute()) {

  echo json_encode([
    "status" => "success"
  ]);

} else {

  echo json_encode([
    "status" => "error",
    "msg" => $conn->error
  ]);

}

$conn->close();

?>