<?php


$user = 'root';
$password = 'root';
$database = 'examenwa2019';
$host = '192.168.33.22';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$database;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];
$bookId = $_GET['id'];
$title = $_GET['title'];

try {
    $pdo = new PDO($dsn, $user, $password, $options);
    $query = "UPDATE book SET title = ? WHERE id = ?";
    $statement = $pdo->prepare($query);
    $statement->bindParam(1, $title, PDO::PARAM_STR);
    $statement->bindParam(2, $bookId, PDO::PARAM_INT);
    $statement->execute();

    print("<label>" . $title . "</label>");
} catch(PDOException $exception) {
    print("Exception: " . $exception->getMessage());
}

$pdo = null;
?>
