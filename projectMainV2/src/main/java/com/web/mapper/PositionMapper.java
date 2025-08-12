package com.web.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.web.entity.Position;

@Mapper
public interface PositionMapper {

	// 해당 유저의 게임프로필 1건 조회
	@Select("""
        SELECT position_idx, user_id,
               user_position1, user_position2,
               user_game_nick, available_days,
               available_start, available_end, updated_at
          FROM tb_position
         WHERE user_id = #{user_id}
         LIMIT 1
    """)
	Position selectByUserId(String user_id);

	// 생성
	@Insert("""
        INSERT INTO tb_position
        (user_id, user_position1, user_position2,
         user_game_nick, available_days, available_start, available_end,
         created_at, updated_at)
        VALUES
        (#{user_id}, #{user_position1}, #{user_position2},
         #{user_game_nick}, #{available_days}, #{available_start}, #{available_end},
         NOW(), NOW())
    """)
	int insertPosition(Position p);

    // 시간대만 부분 업데이트
    @Update("""
        UPDATE tb_position
           SET available_days  = #{available_days},
               available_start = #{available_start},
               available_end   = #{available_end},
               updated_at      = NOW()
         WHERE user_id = #{user_id}
    """)
    int updateAvailability(Position p);

	// 수정 (user_id 기준) - 동적 SQL로 null 아닌 필드만 업데이트
	@Update({
        "<script>",
        "UPDATE tb_position",
        "<set>",
        "  <if test=\"user_position1 != null\"> user_position1 = #{user_position1}, </if>",
        "  <if test=\"user_position2 != null\"> user_position2 = #{user_position2}, </if>",
        "  <if test=\"user_game_nick != null\"> user_game_nick = #{user_game_nick}, </if>",
        "  <if test=\"available_days != null\"> available_days = #{available_days}, </if>",
        "  <if test=\"available_start != null\"> available_start = #{available_start}, </if>",
        "  <if test=\"available_end != null\"> available_end = #{available_end}, </if>",
        "  updated_at = NOW()",
        "</set>",
        "WHERE user_id = #{user_id}",
        "</script>"
    })
	int updateByUserId(Position p);

    @Select("""
        SELECT EXISTS(
          SELECT 1 FROM tb_position WHERE user_id = #{user_id} LIMIT 1
        )
    """)
    boolean existsByUserId(String user_id);

	@Select("SELECT COUNT(*) FROM tb_position WHERE user_id = #{user_id}")
	int countByUserId(String user_id);
}