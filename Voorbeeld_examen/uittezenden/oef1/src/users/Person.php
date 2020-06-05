<?php namespace users;
//naam: joos kesters

class Person extends User
{
    private $name;
    private $tempId;

    public function __construct($id, $name)
    {
        #check for the id
        if (is_int($id) and (int)$id > 0){
            $this->tempId = $id;
        }

        #pass the id to the parent constructor
        parent::__construct($id);

        #check if the name is a string and if the length of the string is valid
        if (is_string($name) and strlen($name) > 2 and strlen($name) < 21) {
            $name = trim($name);
            $this->name = $name;
        }
        else{
            throw new \InvalidArgumentException("The name was not a string or has an invalid length");
        }
    }

    public function __toString()
    {
        return $this->tempId.'_'.$this->name;
    }
}