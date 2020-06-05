<?php
require_once 'Point.php';
$point1 = new Point(1, 2);
$point2 = new Point(5, 11);
print(Point::getCountInitialisations(). "\n");
unset($point2);
print(Point::getCountInitialisations());