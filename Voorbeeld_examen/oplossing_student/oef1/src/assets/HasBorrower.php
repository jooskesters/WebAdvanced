<?php namespace assets;
use users\User;

interface HasBorrower{
	public function setBorrower(User $user);
	public function getBorrower();
	public function getPreviousBorrowers();
}
