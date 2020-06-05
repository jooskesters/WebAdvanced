<?php

$getal = $_POST["getal"];
if(is_numeric($getal) and (int)$getal>0){
    require_once('wiskunde.php');
    print(faculty($getal));
}
else{
    print_r("invalid input");
}
