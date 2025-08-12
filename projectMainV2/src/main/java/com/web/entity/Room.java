package com.web.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Room {
    private Integer room_idx;
    private String  team_title;
    private String  room_info;
    private String  user_id;      // 방장
    private Integer top;          // 0/1
    private Integer jgl;
    private Integer mid;
    private Integer adc;
    private Integer sup;
    private String  room_status;  // 'OPEN'/'FULL' (없으면 생략)
}