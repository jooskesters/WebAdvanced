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

try {
    $pdo = new PDO($dsn, $user, $password, $options);
    $query = "SELECT * FROM author";

    $statement = $pdo->query($query);
    $results = $statement->fetchAll();
    ?>

    <form action="showbooks.php" method="get">
    <select name="id">
        <?php
        foreach ($results as $result) {
            print("<option value=\"" . $result['id'] . "\">" . $result['name'] . "</option>");
        }
        ?>
    </select>
    <input type="submit" value="Submit">
    <?php
} catch(\PDOException $exception) {
    print("PDOException...");
}
    $pdo = null;
?>
