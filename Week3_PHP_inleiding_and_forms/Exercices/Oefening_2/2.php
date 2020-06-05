<?php
$myarr = maakRij(0,10,2);
$myarrrev = maakRij(10,0,-2);
print_r($myarr);
print_r($myarrrev);
function maakRij($start, $end, $interval){
    $arr = array();
    if ($start < $end and $interval > 0){
        while($start < $end+1){
            array_push($arr, $start);
            $start += $interval;
        }
        return($arr);
    }
    else{
        while($start >= $end){
            array_push($arr, $start);
            $start += $interval;
        }
        return($arr);
    }

}