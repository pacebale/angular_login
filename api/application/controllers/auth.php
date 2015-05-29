<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function login()
	{
		if($this->input->is_ajax_request())
		{
			if(!$this->input->post("email") || !$this->input->post("password"))
			{
				echo json_encode(array("code" => 2, "response" => "Datos insuficientes"));
			}
			$email = $this->input->post("email");
			$password = sha1($this->input->post("password"));
			$this->load->model("auth_model");
			//$user = $this->auth_model->login($email, $password);
			$this->db->select('id, email');
			$this->db->from('accounts');
			$this->db->where('email', $email);
			$this->db->where('password', $password);
			$user = $this->db->get()->row();
			
			if($user){	
				$user->iat = time();
				$user->exp = time() + 20;
				$jwt = JWT::encode($user, 'appTokenKey');
				echo json_encode(
					array(
						"code" => 0, 
						"response" => array(
							"token" => $jwt
						)
					)
				);
			}else{
				echo json_encode(
					array(
						"response" => array(
							"errorLogin" => 'Usuario o contrasena incorrectos.'
						)
					)
				);
			
					
			
			}
		}
		else
		{
			show_404();
		}	
	}
}

/* End of file auth.php */
/* Location: ./application/controllers/auth.php */