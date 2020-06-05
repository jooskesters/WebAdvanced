<?php namespace users;
//naam: Maarten Warson

class Person extends User {
    private $name;
    private $tempId;

    public function __construct($id, $name) {
        if (!is_int($id) || $id <= 0) {
            throw new \http\Exception\InvalidArgumentException("Id has to be an integer that is greater than 0!");
        }

        parent::__construct($id);
        $this->tempId = $id;

        // Onderstaande controle zou uitgevoerd moeten worden om dezelfde regels voor $id toe te passen als in Identifiable.
        // Omdat de array $usedIds private is (zoals opgegeven in de opgave), kan deze hier niet gebruikt worden (deze zou 'protected' moeten zijn)
        /*if (in_array($id, parent::$usedIds)) {
            throw new \http\Exception\InvalidArgumentException("Id already exists!");
        }*/

        if (!is_string($name)) {
            throw new \http\Exception\InvalidArgumentException("Name-parameter has to be a string!");
        }

        // Ervan uitgaande dat lengte 3 en 20 inclusief zijn!
        if (strlen($name) < 3 || strlen($name) > 20) {
            throw new \http\Exception\InvalidArgumentException("Length of name can only be between 3 and 20!");
        }

        $this->name = trim($name);
    }

    public function __toString() {
        return $this->tempId . "_" . $this->name;
    }
}