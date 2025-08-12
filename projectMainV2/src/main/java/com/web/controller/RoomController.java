package com.web.controller;


import com.web.entity.Member;
import com.web.entity.Room;
import com.web.mapper.RoomMapper;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
public class RoomController {

    private final RoomMapper roomMapper;

    @PostMapping("/rooms")
    public String createRoom(
            @RequestParam String team_title,
            @RequestParam(required=false, defaultValue = "") String room_info,
            // 체크박스는 없으면 null이므로 0으로
            @RequestParam(required=false, defaultValue = "0") Integer top,
            @RequestParam(required=false, defaultValue = "0") Integer jgl,
            @RequestParam(required=false, defaultValue = "0") Integer mid,
            @RequestParam(required=false, defaultValue = "0") Integer adc,
            @RequestParam(required=false, defaultValue = "0") Integer sup,
            HttpSession session
    ) {
        Member login = (Member) session.getAttribute("member");
        if (login == null) return "redirect:/login";

        // 최소 검증: 제목, 모집 포지션 1개 이상
        int needCnt = top + jgl + mid + adc + sup;
        if (team_title == null || team_title.isBlank() || needCnt == 0) {
            // TODO: 에러 메시지 플래시로 넘기고 모달 다시 열기
            return "redirect:/main_origin";
        }

        Room room = Room.builder()
                .team_title(team_title.trim())
                .room_info(room_info)
                .user_id(login.getUser_id())
                .top(top).jgl(jgl).mid(mid).adc(adc).sup(sup)
                //.room_status("OPEN")
                .build();

        roomMapper.insertRoom(room);

        // 방 생성 직후 상세 페이지나 목록으로
        return "redirect:/main_origin"; // 필요하면 ?roomId=" + room.getRoom_idx()
    }
}