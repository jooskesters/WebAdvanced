<?php
require_once 'Point.php';
$point1 = new Point(1,2);
print($point1);
$point2 = new Point(5,11);
print($point2);
$distance=$point1->calculateDistance($point2);
print($distance);