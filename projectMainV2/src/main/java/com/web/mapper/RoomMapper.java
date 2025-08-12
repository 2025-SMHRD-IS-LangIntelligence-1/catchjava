package com.web.mapper;

import com.web.entity.Room;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface RoomMapper {

    @Insert("""
        INSERT INTO tb_room
        (team_title, room_info, user_id,
         top, jgl, mid, adc, sup, created_at /*, room_status*/)
        VALUES
        (#{team_title}, #{room_info}, #{user_id},
         #{top}, #{jgl}, #{mid}, #{adc}, #{sup}, NOW() /*, 'OPEN'*/)
    """)
    @Options(useGeneratedKeys = true, keyProperty = "room_idx")
    int insertRoom(Room room);

    @Update("""
        UPDATE tb_room
           SET room_status = #{room_status},
               closed_at   = CASE WHEN #{room_status}='FULL' THEN NOW() ELSE NULL END
         WHERE room_idx = #{room_idx}
    """)
    int updateStatus(Room room);
}