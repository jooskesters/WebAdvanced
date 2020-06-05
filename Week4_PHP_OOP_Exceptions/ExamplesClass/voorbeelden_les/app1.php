<?php
require_once 'src/drawing/Point.php';
require_once 'src/drawing/Line.php';
use \drawing\Line;
use \drawing\Point;
$p=Point::makeOrigin();
print($p);
print(Point::getCount());
$p=null;
print(Point::getCount());
$p2=new Point(1,2);
$line=new Line(new Point(1,2),new Point(3,4));
print($line);
