<?php
include("../db.php");

$title = $_POST['title'];
$price = $_POST['price'];
$desc = $_POST['description'];

$conn->query("INSERT INTO plans (title, price, description)
VALUES ('$title','$price','$desc')");

header("Location: ../admin/dashboard.php");
?>