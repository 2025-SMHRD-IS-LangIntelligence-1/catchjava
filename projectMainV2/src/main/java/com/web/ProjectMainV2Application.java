package com.web;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.web.mapper")
public class ProjectMainV2Application {

	public static void main(String[] args) {
		SpringApplication.run(ProjectMainV2Application.class, args);
	}

}
