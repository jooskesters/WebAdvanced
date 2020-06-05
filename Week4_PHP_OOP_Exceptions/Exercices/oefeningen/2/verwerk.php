<?php

/*
 * we can use this when we have a small program so we don't have to make autoloader
 * require_once "src/Util/Date.php";
 * use \Util\Date;
 *
 * NOTE that the hierarchy is important, if the verwerk.php is not outside the src
 * this won't work
 * */

require_once "vendor/autoload.php";
use \Util\Date;

$day = $_GET['day'];
$month = $_GET['month'];
$year = $_GET['year'];



$date = new Date($day, $month, $year);

$date->printMonth();