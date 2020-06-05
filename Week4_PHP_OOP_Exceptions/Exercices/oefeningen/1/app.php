<?php

use workers\Handyman;
use tools\Broom;

require_once "vendor/autoload.php";

$broom = new Broom();
$henry = new Handyman($broom);
$henry->work();