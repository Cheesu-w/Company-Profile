<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit();
}

$conn = new mysqli("localhost", "root", "", "contact_db");

if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "Database connection failed"]);
  exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$message = $data["message"] ?? "";

if (!$name || !$email || !$message) {
  http_response_code(400);
  echo json_encode(["error" => "Missing fields"]);
  exit();
}

$sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
  echo json_encode(["success" => true]);
} else {
  http_response_code(500);
  echo json_encode(["error" => "Failed to save"]);
}

$conn->close();
