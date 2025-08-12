package com.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.entity.Member;
import com.web.mapper.MemberMapper;

@RestController
public class UserRestController {

    @Autowired
    private MemberMapper mapper;

    @GetMapping("/checkEmail")
    public String checkEmail(@RequestParam("email") String email) {
        Member user = mapper.selectByEmail(email);
        return (user == null) ? "true" : "false";
    }
}
