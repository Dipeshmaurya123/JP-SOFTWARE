<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "hosting");

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';

if (!$email) {
  echo json_encode(["status" => "error", "msg" => "Email required"]);
  exit;
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$otp = rand(100000, 999999);

$conn->query("INSERT INTO password_resets (email, otp) VALUES ('$email', '$otp')");

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;

  // 🔥 CHANGE THIS
  $mail->Username = 'your_email@gmail.com';
  $mail->Password = 'your_app_password';

  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  $mail->setFrom('your_email@gmail.com', 'JP Software');
  $mail->addAddress($email);

  $mail->Subject = 'Reset Password OTP';
  $mail->Body = "Your OTP is: $otp";

  $mail->send();

  echo json_encode(["status" => "success"]);

} catch (Exception $e) {
  echo json_encode(["status" => "error", "msg" => $mail->ErrorInfo]);
}
?>