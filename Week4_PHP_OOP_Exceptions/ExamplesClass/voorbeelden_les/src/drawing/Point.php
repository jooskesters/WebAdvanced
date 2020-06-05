<?php namespace drawing;
class Point{

    private $x, $y;
    private static $count=0;

    public function __construct(int $x,int $y){
        $this->validateXY($x);
        $this->validateXY($y);
        $this->x=$x;
        $this->y=$y;
        self::$count++;
    }

    public function __destruct(){
        self::$count--;
    }

    private function validateXY(int $value){
        if($value<0 || $value>=100){
            throw new \Exception("$value is not between 0 and 100");
        }
    }

    public function getX():int{
        return $this->x;
    }
    
    public function getY():int{
        return $this->y;
    }

    public function setX(int $x):void{
        $this->validateXY($x);
        $this->x=$x;
    }

    public function setY(int $y):void{
        $this->validateXY($y);
        $this->y=$y;
    }

    public static function getCount():int{
        return self::$count;
    }
    
    public static function makeOrigin(){
        return new Self(0,0);
    }

    public function __toString():string{
        return "($this->x, $this->y)";
    }

}

