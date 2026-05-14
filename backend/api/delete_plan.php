<?php
include("../db.php");

$id = $_GET['id'];

$sql = "DELETE FROM plans WHERE id = $id";

if ($conn->query($sql)) {
    header("Location: ../admin/dashboard.php");
} else {
    echo "Error deleting plan";
}
?>