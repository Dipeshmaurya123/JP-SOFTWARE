<?php
$conn = new mysqli("localhost", "root", "", "hosting");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>