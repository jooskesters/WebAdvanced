<?php
//naam: joos kesters
$userId = $_GET['id'];
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
    #make database connection
    $pdo = new PDO($dsn, $user, $password, $options);
    $result = $pdo->query("SELECT * FROM book WHERE ". " author_id LIKE $userId");
    while ($row = $result->fetch()){
        $title = $row["title"];
        $id = $row["id"];

        print("<form action='updatetitle.php' method='get'>");
        print("$id<input type='hidden' name='id' value='$id'> ");
        print("<input type='text' name='title' value='$title'> ");
        ?><input type="submit" value="Submit">
        <?php print("</form>");
    }
} catch(PDOException $e){
    print 'Exception: ' . $e->getMessage();
}


