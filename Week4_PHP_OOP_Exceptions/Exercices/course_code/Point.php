<?php

final class Point
{
    private $x,$y;
    private static $countInitialisations=0;

    public function __construct($x,$y)
    {
        $this->x = $x;
        $this->y = $y;
        self::$countInitialisations++;
    }

    public function __destruct(){
        self::$countInitialisations--;
    }

    public static function getCountInitialisations(){
        return self::$countInitialisations;
    }

    function __toString()
    {
        return "($this->x, $this->y)";
    }

    public function calculateDistance (Point $p){
        return sqrt(  pow(($this->x-$p->x), 2) + pow(($this->y-$p->y), 2) );
    }

}