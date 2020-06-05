<?php

use PHPUnit\Framework\TestCase;
use users\Person;

class PersonTest extends TestCase
{
    public function providerValidParams() {
        return [
            ['id' => 1, 'name' => "geert"]
        ];
    }

    public function providerInvalidParams() {
        return [
            ['id' => "mis", 'name' => "geert"]
        ];
    }

    /**
     * @dataProvider providerInvalidParams
     * @expectedException \InvalidArgumentException
     **/
    public function testConstructor_inValidId_Exception($id, $name)
    {
        $person = new Person($id, $name);
        $this->assertInstanceOf(Person::class, $person);
    }

    /**
     * @dataProvider providerValidParams
     **/
    public function testConstructor_validParams_personObject($id, $name)
    {
        $person = new Person($id, $name);
        $this->assertInstanceOf(Person::class, $person);
    }

    /**
     * @dataProvider providerValidParams
     **/
    public function testToString_validParams_correctString($id, $name) {
        $person = new Person($id, $name);
        $expectedResult = "1_geert";
        $this->expectOutputString($expectedResult);
    }
}