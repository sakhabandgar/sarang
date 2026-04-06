<!-- ===================== PHP (OPTIONAL BACKEND) ===================== -->
<?php
$conn = new mysqli("localhost", "root", "", "ecommerce");

$result = $conn->query("SELECT * FROM products");
while($row = $result->fetch_assoc()) {
  echo json_encode($row);
}
?>