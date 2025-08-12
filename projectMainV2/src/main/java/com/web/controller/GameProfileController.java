package com.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.web.entity.Member;
import com.web.entity.Position;
import com.web.mapper.PositionMapper;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class GameProfileController {

    private final PositionMapper pmapper;

    // 생성: 폼 action="createPosition" 으로 POST
    @PostMapping("createPosition")
    public String createPosition(Position form, HttpSession session) {
        Member login = (Member) session.getAttribute("member");
        if (login == null) return "redirect:/login"; // 미로그인 방지

        // 세션의 user_id를 강제 주입 (신뢰성)
        form.setUser_id(login.getUser_id());

        // --- safety defaults for NOT NULL columns ---
        if (form.getUser_position1() == null) {
            // 기본값: 1(탑). 클라이언트에서 선택 못한 경우를 대비한 가드
            form.setUser_position1(1);
        }
        if (form.getAvailable_days() == null) {
            form.setAvailable_days(""); // 빈 문자열 허용 시
        }
        if (form.getAvailable_start() == null) {
            form.setAvailable_start(java.time.LocalTime.of(0, 0));
        }
        if (form.getAvailable_end() == null) {
            form.setAvailable_end(java.time.LocalTime.of(0, 0));
        }

        // 이미 있으면 업데이트로 전환 (중복 insert 방지)
        Position exists = pmapper.selectByUserId(login.getUser_id());
        if (exists == null) {
            pmapper.insertPosition(form);
        } else {
            // merge: if incoming fields are null, keep existing values
            if (form.getUser_position1() == null) form.setUser_position1(exists.getUser_position1());
            if (form.getUser_position2() == null) form.setUser_position2(exists.getUser_position2());
            if (form.getUser_game_nick() == null) form.setUser_game_nick(exists.getUser_game_nick());
            if (form.getAvailable_days() == null) form.setAvailable_days(exists.getAvailable_days());
            if (form.getAvailable_start() == null) form.setAvailable_start(exists.getAvailable_start());
            if (form.getAvailable_end() == null) form.setAvailable_end(exists.getAvailable_end());
            pmapper.updateByUserId(form);
        }
        return "redirect:/main_origin";
    }

    // 시간대만 별도 저장/수정
    @PostMapping("/updateAvailability")
    public String updateAvailability(Position form, HttpSession session) {
        Member login = (Member) session.getAttribute("member");
        if (login == null) return "redirect:/login";

        form.setUser_id(login.getUser_id());

        // 기본 프로필이 없으면 최소값으로 생성 (선택 사항: 요구사항에 맞게 조정)
        Position exists = pmapper.selectByUserId(login.getUser_id());
        if (exists == null) {
            Position init = Position.builder()
                    .user_id(login.getUser_id())
                    .user_position1(1) // 기본값 예시
                    .user_game_nick("temp") // 기본값 예시
                    .build();
            pmapper.insertPosition(init);
        }

        pmapper.updateAvailability(form);
        return "redirect:/main_origin";
    }

    // 수정: 별도 수정 버튼으로 POST 하고 싶을 때
    @PostMapping("/updatePosition")
    public String updatePosition(Position form, HttpSession session) {
        Member login = (Member) session.getAttribute("member");
        if (login == null) return "redirect:/login";

        form.setUser_id(login.getUser_id());
        pmapper.updateByUserId(form);
        return "redirect:/main_origin";
    }

    @GetMapping("/main_origin")
    public String guildPage(HttpSession session, Model model) {
        Member login = (Member) session.getAttribute("member");

        boolean hasPosition = false; // 기본값: 미로그인 또는 미등록
        if (login != null) {
            hasPosition = pmapper.existsByUserId(login.getUser_id());
        }

        // JSP에서 `${not hasPosition}`로 미등록 상태 표시
        model.addAttribute("hasPosition", hasPosition);
        return "main_origin"; // main.jsp
    }
}