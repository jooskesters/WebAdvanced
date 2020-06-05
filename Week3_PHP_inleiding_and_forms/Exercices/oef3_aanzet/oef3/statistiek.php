<?php
$getallen = $_POST['getallen'];
$louche = array();
$length = sizeof($getallen);
$total = 0;
foreach ($getallen as $getal){
    if (is_numeric($getal)){
        $total += $getal;
    }
    else{
        #push de louche waarden naar de array louche
        array_push($louche, $getal);

        #omdat we niet op value kunnen deleten zoeken we naar de key van dit value en verwijderen we deze key
        $key = array_search($getal, $getallen);
        unset($getallen[$key]);
    }

}
$max = max($getallen);
$min = min($getallen);
$stats = $total/$length;
echo "the stats are: ", $stats, "<br>";
echo "the minimum is: ", $min, "<br>";
echo "the maximum is: ", $max, "<br>";
echo "if there are any weird values they will appear here: ", var_dump($louche);