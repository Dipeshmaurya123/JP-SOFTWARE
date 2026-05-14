<?php
include("../db.php");

$title = $_POST['title'];
$price = $_POST['price'];
$description = $_POST['description'];

$conn->query("INSERT INTO plans (title, price, description)
VALUES ('$title','$price','$description')");

header("Location: dashboard.php");