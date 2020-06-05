<?php namespace users;
//naam: Maarten Warson

class UserFactory {
    public static function makePerson($id, $name) {
        $person = new Person($id, $name);
        return $person;
    }

    public static function makeCompany($id, $bussinessId) {
        $company = new Company($id, $bussinessId);
        return $company;
    }
}