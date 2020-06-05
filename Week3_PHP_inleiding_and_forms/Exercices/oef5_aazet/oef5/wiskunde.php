<?php
function faculty($getal){
    if ($getal < 2) {
        return 1;
    }
    else{
        return ($getal * faculty($getal-1));
    }
}?>


