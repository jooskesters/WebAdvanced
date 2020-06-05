<?php

class Rectangle extends Shape
{
    private $width, $heigth;
    public function __construct(Point $point, $width, $heigth)
    {
        parent::__construct($point);
        $this->width = $width;
        $this->heigth = $heigth;
    }

    public function calculatePerimiter()
    {
        return 2*$this->width+2*$this->heigth;
    }

    public function __toString()
    {
        return "Rectangle, Point= ". parent::__toString() ." width= $this->width height= $this->heigth";
    }

    public function draw()
    {
        print($this->__toString());
    }
}