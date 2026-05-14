<?php
include("../db.php");

$id = $_POST['id'];
$title = $_POST['title'];
$price = $_POST['price'];
$desc = $_POST['description'];

$sql = "UPDATE plans SET 
        title='$title',
        price='$price',
        description='$desc'
        WHERE id=$id";

if ($conn->query($sql)) {
    header("Location: ../admin/dashboard.php");
} else {
    echo "Error updating plan";
}
?>