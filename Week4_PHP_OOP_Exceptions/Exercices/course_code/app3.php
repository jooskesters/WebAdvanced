<?php
require_once 'Point.php';
require_once 'Drawable.php';
require_once 'Shape.php';
require_once 'Rectangle.php';
$point = new Point(1,2);
$rectangle=new Rectangle($point,12,2);
$rectangle->draw();