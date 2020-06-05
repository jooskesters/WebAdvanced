<?php namespace identifiable;
//naam: joos kesters

abstract class Identifiable{
    private $id;
    private static $usedIds = [];

    public function __construct($id)
    {
        if (is_int($id) and (int)$id > 0){
            if (in_array($id,Identifiable::$usedIds)){
                throw new \InvalidArgumentException("The id is already occupied");
            }
            else{
                $this->id = $id;
                array_push(Identifiable::$usedIds, $id);
            }
        }
    }
}