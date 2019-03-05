package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(value = "com.example.demo.mapper")
@SpringBootApplication
public class SpringbootMybatis2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootMybatis2Application.class, args);
	}
}
