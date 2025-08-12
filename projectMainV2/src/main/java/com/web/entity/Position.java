package com.web.entity;

import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Position {

    // PK가 필요하면 사용 (select/update는 user_id로 처리)
    private Integer position_idx;

    // 로그인한 유저의 아이디 (세션에서 주입)
    private String user_id;

    // 주/부 포지션: 정수 코드 (예: 1=탑, 2=정글, 3=미드, 4=원딜, 5=서포터, 6=올라운더)
    private Integer user_position1;
    private Integer user_position2;  // 선택 안 하면 null 가능

    // 소환사 닉네임
    private String user_game_nick;

    // 요일: "월,화,수" 형태 문자열 (MySQL SET 칼럼과 호환)
    private String available_days;

    // 시간
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime available_start;

    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime available_end;
}