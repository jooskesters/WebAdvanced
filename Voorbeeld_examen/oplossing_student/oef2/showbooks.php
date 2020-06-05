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
$authorId = $_GET['id'];

try {
    $pdo = new PDO($dsn, $user, $password, $options);
    $query = "SELECT * FROM book WHERE author_id=$authorId";

    $statement = $pdo->query($query);
    $results = $statement->fetchAll();

    foreach ($results as $result) {
        print("<form action=\"updatetitle.php\" method=\"get\">");
        print($result['id'] . " <input type=\"hidden\" name=\"id\" value=\"" . $result['id'] . "\"/>");
        print("<input type=\"text\" name=\"title\" value=\"" . $result['title'] . "\"/>");
        print("&nbsp;");
        print("<input type=\"submit\" value=\"Submit\"");
        print("</form>");
        print("<br/><br/>");
    }
} catch(\PDOException $exception) {
    print("PDOException...");
}
$pdo = null;
