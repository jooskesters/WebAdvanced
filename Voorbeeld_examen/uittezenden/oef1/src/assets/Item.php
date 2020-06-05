<?php namespace assets;
//naam: joos kesters

use identifiable\Identifiable;
use users\User;

class Item extends Identifiable implements HasBorrower {
    private $tempId;
    private $borrower;
    private $previousBorrowers;

    public function __construct($id, $borrower)
    {
        $this->tempId = $id;
        $this->borrower = $borrower;
        $this->previousBorrowers = array();
        parent::__construct($id);
    }


    public function setBorrower(User $user)
    {
        array_push($this->previousBorrowers,$this->borrower);
        $this->borrower = $user;
    }

    public function getBorrower()
    {
        return $this->borrower;
    }

    public function getPreviousBorrowers()
    {
        return $this->previousBorrowers;
    }








    public function __toString()
    {
        $result = $this->tempId . '#';
        $result .= $this->borrower->__toString(). '[';

        #append the toString of the user to the current string
        for ($i = 0; $i < sizeof($this->previousBorrowers); $i++){
            $result .= $this->previousBorrowers[$i]->__toString();
            #check if it is the last person so we don't add a , to much
            if ($i != count($this->previousBorrowers) - 1) {
                $result .= ",";
            }
        }
        $result .= "]";
        return $result;
    }
}