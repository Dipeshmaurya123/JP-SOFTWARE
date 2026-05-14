<?php
include("../db.php");

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM plans WHERE id = $id");
$row = $result->fetch_assoc();
?>

<h2>Edit Plan</h2>

<form action="../api/update_plan.php" method="POST">
  <input type="hidden" name="id" value="<?php echo $row['id']; ?>">

  <input name="title" value="<?php echo $row['title']; ?>"><br><br>

  <input name="price" value="<?php echo $row['price']; ?>"><br><br>

  <textarea name="description"><?php echo $row['description']; ?></textarea><br><br>

  <button>Update Plan</button>
</form>