<?php
namespace map;

class Point{
    private $x;
    private $y;


    public function __construct($x, $y)
    {
        if (!is_numeric($x) || !is_numeric($y))
            Throw new \InvalidArgumentException("x or y is not numeric");
        else
            if (!(0 < $x and $x < 101) || !(0 < $y and $y < 101))
                Throw new \InvalidArgumentException("x or y is out of bounds");
        else{
            $this->x = $x;
            $this->y = $y;
        }
    }

    public static function make($x,$y){
        return new self($x,$y);
    }

    public function manhattanDistance(Point $p){
        return ( abs($this->x - $p->x) + ($this->y - $p->y) );
    }


}
