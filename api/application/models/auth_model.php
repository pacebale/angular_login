<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth_model extends CI_Model 
{
	public function __construct()
	{
		parent::__construct();
	}

	public function login($email, $password)
	{
		$this->db->select('id, email');
		$this->db->from('accounts');
		$this->db->where('email', $email);
		$this->db->where('password', $password);
		$user = $this->db->get()->row();
	
		if(!empty($user))
		{
			return $user;
		}
		return false;
	}

	public function checkUser($id, $email)
	{
		$query = $this->db->limit(1)->get_where("accounts", array("id" => $id, "email" => $email));
		return $query->num_rows() === 1;
	}
}

/* End of file auth_model.php */
/* Location: ./application/models/auth_model.php */