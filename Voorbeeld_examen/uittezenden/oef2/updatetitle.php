<?php
//naam: joos kesters


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

$newTitle = $_GET["title"];
$bookId = $_GET["id"];

try {
    #make database connection
    $pdo = new PDO($dsn, $user, $password, $options);

    //example named parameters
    $statement = $pdo->prepare("UPDATE book SET title = :title WHERE id = :id");
    $statement->bindParam(':id', $bookId, PDO::PARAM_INT);
    $statement->bindParam(':title', $newTitle, PDO::PARAM_STR);
    $statement->execute();

    //example unnamed parameters
    /*$query = "UPDATE book SET title = ? WHERE id = ?";
    $statement = $pdo->prepare($query);
    $statement->bindParam(1, $newTitle, PDO::PARAM_STR);
    $statement->bindParam(2, $bookId, PDO::PARAM_INT);
    $statement->execute();
    */

    print("<label>" . $newTitle . "</label>");
} catch(PDOException $e){
    print 'Exception: ' . $e->getMessage();
}