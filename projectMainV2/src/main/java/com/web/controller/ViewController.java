package com.web.controller;


import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.web.mapper.MemberMapper;



@Controller
public class ViewController {

	@Autowired
	private MemberMapper mapper;

	@GetMapping("/")
	public String gohome() {
		return "main_origin";
	}

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@GetMapping("/signUpBtn")
	public String signUp() {
		return "join";
	}

	


	@GetMapping("/gameProfile")
	public String gameProfile() {
		return "gameProfile";
	}


	
	@GetMapping("/loginToMain")
	public String loginToMain() {
		return "main_origin";
	}
	
	@GetMapping("/joinToLogin")
	public String joinToLogin() {
		return "login";
	}
	
	
//	테스트용 ----------------------------------------------------------------------
	@GetMapping("/test")
	public String test() {
		return "test";
	}

	@GetMapping("/ptest")
	public String ptest() {
		return "gameProfileTest";
	}
	
	@GetMapping("/test3")
	public String test3() {
		return "gameProfileTest";
	}

	@GetMapping("/Room")
	public String testRoom() {
		return "Room";
	}
//	테스트용 끝 --------------------------------------------------------------------
}