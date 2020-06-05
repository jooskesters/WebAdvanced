<?php namespace identifiable;
//naam: Maarten Warson

abstract class Identifiable {
    private $id;
    private static $usedIds = [];

    public function __construct($id) {
        if (!is_int($id) || $id <= 0) {
            throw new \http\Exception\InvalidArgumentException("Id has to be an integer that is greater than 0!");
        }

        if (in_array($id, self::$usedIds)) {
            throw new \http\Exception\InvalidArgumentException("Id already exists!");
        }

        $this->id = $id;
        self::$usedIds[] = $id;
    }
}