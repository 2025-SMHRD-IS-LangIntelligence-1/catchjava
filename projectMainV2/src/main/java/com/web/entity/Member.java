package com.web.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Member {

	    private String user_id;
	    private String user_pw;
	    private String user_nick;
	    private java.sql.Timestamp joined_at;
	    private String rrn_front;    
	    private String rrn_back_first; 
	    
	
}