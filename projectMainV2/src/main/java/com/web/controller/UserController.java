package com.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.web.entity.Member;
import com.web.mapper.MemberMapper;

import jakarta.servlet.http.HttpSession;

@Controller
public class UserController {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private MemberMapper mapper;

    @PostMapping("/joinMember")
    public String joinMember(Member mem, Model model) {
        mapper.join(mem);
        model.addAttribute("email", mem.getUser_id());
        return "login";
    }

    @PostMapping("/loginMember")
    public String loginMember(
        @RequestParam String user_id,
        @RequestParam String user_pw,
        HttpSession session,
        Model model
    ) {
        logger.info("로그인 요청 >> id={}", user_id);

        Member param = new Member();
        param.setUser_id(user_id);
        param.setUser_pw(user_pw);

        Member member = mapper.login(param);
        logger.info("로그인 된 회원의 정보 >> {}", member);

        if (member == null) {
            model.addAttribute("errorMsg", "아이디 또는 비밀번호가 올바르지 않습니다.");
            return "login";
        }

        session.setAttribute("member", member);
        return "redirect:/main_origin";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        // 세션 무효화로 로그인 정보 제거
        session.invalidate();
        // 메인 페이지나 로그인 페이지로 리다이렉트
        return "redirect:/main_origin";
    }
}