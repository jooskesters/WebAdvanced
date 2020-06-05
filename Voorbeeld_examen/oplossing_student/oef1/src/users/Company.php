<?php namespace users;
//naam: Maarten Warson

class Company extends User {
    private $businessId;
    private $tempId;

    public function __construct($id, $businessId) {
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

        if(!is_string($businessId)) {
            throw new \http\Exception\InvalidArgumentException("BusinessId has to be a string!");
        }

        if(!strlen($businessId) == 6) {
            throw new \http\Exception\InvalidArgumentException("BusinessId has to exist of 6 characters!");
        }

        $this->businessId = $businessId;
    }

    public function __toString() {
        return $this->tempId . "_" . $this->businessId;
    }
}