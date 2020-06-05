<?php
namespace map;

class Road{
    private $points;

    public function __construct()
    {
        $this->points = array();
    }

    public function addPoint(Point $p){
        array_push($this->points, $p);
    }

    public static function make(){

        return new self();
    }

    public function manhattanDistance(){
        #som opeenvolgende nodes interpreteren we als de distance
        #tussen de huidige node en de volgende in de lijst
        $tot = 0;
        $threshold=$this->points[0];
        for ($i = 1; $i < sizeof($this->points); $i++){
            if ($this->points[$i] != $threshold){
                $tot += $threshold->manhattanDistance($this->points[$i]);
            }
            $threshold = $this->points[$i];
        }
        return $tot;
    }
}
