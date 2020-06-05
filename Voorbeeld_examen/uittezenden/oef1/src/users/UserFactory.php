<?php namespace users;
//naam: joos kesters


class UserFactory{
    public function makePerson($id, $name){
        $person = new Person($id, $name);
        return $person;
    }
    public function makeCompany($id, $businessId){
        $company = new Company($id, $businessId);
        return $company;
    }
}