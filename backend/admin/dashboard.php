<?php
session_start();
include("../db.php");

if (!isset($_SESSION['admin'])) {
  header("Location: login.php");
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Admin Panel</title>
<style>
body{background:#0f172a;color:white;font-family:sans-serif;}
.container{padding:30px;}
.card{background:#1e293b;padding:20px;border-radius:10px;margin-bottom:20px;}
table{width:100%;border-collapse:collapse;}
td,th{padding:10px;border-bottom:1px solid #333;}
h2{color:#facc15;}
</style>
</head>
<body>

<div class="container">

<h2>📊 Orders</h2>

<div class="card">
<table>
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Plan</th>
</tr>

<?php
$result = $conn->query("SELECT * FROM orders ORDER BY id DESC");

while ($row = $result->fetch_assoc()) {
  echo "<tr>
  <td>{$row['name']}</td>
  <td>{$row['email']}</td>
  <td>{$row['phone']}</td>
  <td>{$row['plan']}</td>
  </tr>";
}
?>

</table>
</div>

<h2>➕ Add Plan</h2>

<div class="card">
<form method="POST" action="add_plan.php">
<input type="text" name="title" placeholder="Title"><br><br>
<input type="text" name="price" placeholder="Price"><br><br>
<textarea name="description" placeholder="Description"></textarea><br><br>
<button>Add Plan</button>
</form>
</div>

</div>

</body>
</html>