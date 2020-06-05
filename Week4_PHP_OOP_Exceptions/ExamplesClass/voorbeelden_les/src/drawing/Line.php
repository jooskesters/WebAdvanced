<?php namespace drawing;

class Line{

    private $startPoint, $endPoint;

    public function __construct(Point $startPoint,Point $endPoint){
        $this->startPoint=$startPoint;
        $this->endPoint=$endPoint;

    }

    public function __toString():string{
        return $this->startPoint->__toString(). " - " . $this->endPoint->__toString();
    }

}

