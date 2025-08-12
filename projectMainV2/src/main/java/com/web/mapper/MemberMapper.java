package com.web.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.web.entity.Member;

@Mapper
public interface MemberMapper {
	
	@Select("select * from tb_user where user_id=#{email}")
	Member selectByEmail(String email);

	@Insert("INSERT INTO tb_user(user_id, user_pw, user_nick, rrn_front, rrn_back_first, joined_at) VALUES (#{user_id}, #{user_pw}, #{user_nick}, #{rrn_front}, #{rrn_back_first}, NOW())")
	void join(Member mem);

	@Select("SELECT * FROM tb_user WHERE user_id = #{user_id} AND user_pw = #{user_pw}")
	Member login(Member mem);
	

	
}