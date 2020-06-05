<!--joos kesters-->
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

try{
    #make database connection
    $pdo = new PDO($dsn, $user, $password, $options);
    $result = $pdo->query("SELECT * FROM author");
    $thePeople = $result->fetchAll();

    print("<form action='showbooks.php' method='get'>");
    print("<select name='id'>");
    foreach ($thePeople as $row){
        $id = $row['id'];
        $name = $row['name'];
        print("<option value='$id'>$name</option>");
    }
    ?><input type="submit" value="Submit">
    <?php print("</form>");
} catch(PDOException $e){
    print 'Exception: ' . $e->getMessage();

}
?>

<?php

function cleanPeople($var){
    $people = array();
    foreach ($var as $row){
        array_push($people, $row['name']);
    }
    return $people;
}


