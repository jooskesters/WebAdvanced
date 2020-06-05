<?php namespace assets;

use identifiable\Identifiable;
use users\Person;
use users\User;

class Item extends Identifiable implements HasBorrower {
    private $borrower;
    private $previousBorrowers;
    private $tempId;

    public function __construct($id, Person $borrower) { 
        parent::__construct($id);
        $this->tempId = $id;
        $this->borrower = $borrower;
        $this->previousBorrowers = [];
    }

    public function setBorrower(User $user)
    {
        $this->previousBorrowers[] = $this->borrower;
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

    public function __toString() {
        $resultString = $this->tempId . "#";
        $resultString .= $this->borrower->__toString() . "[";

        for($i = 0; $i < count($this->previousBorrowers) - 1; $i++) {
            $resultString .= $this->previousBorrowers[$i]->__toString();

            if ($i != count($this->previousBorrowers) - 1) {
                $resultString .= ",";
            }
        }

        $resultString .= "]";
        return $resultString;
    }
}
