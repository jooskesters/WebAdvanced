<?php namespace users;
//naam: joos kesters

class Company extends User{
    private $businessId;
    private $tempId;

    public function __construct($id, $businessId)
    {
        if (is_int($id) and (int)$id > 0){
            $this->tempId = $id;
            parent::__construct($id);
        }
        else
            throw new \InvalidArgumentException("wrong id passed in the Company constructor");

        if (is_string($businessId) and strlen($businessId) == 6)
            $this->businessId = $businessId;
        else
            throw new \InvalidArgumentException("the size of the businessId was not correct or was not a string");
    }

    public function __toString()
    {
        return $this->tempId.'_'.$this->businessId;
    }

}