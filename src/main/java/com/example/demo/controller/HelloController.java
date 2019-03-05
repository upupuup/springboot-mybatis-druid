package com.example.demo.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.bean.Employee;
import com.example.demo.service.IEmployeeService;

@Controller
public class HelloController {
	@Autowired
	private IEmployeeService iEmployeeService;
	
	@RequestMapping("/hello")
	public String sayHello() {
		return "hello";
	}
	
	/*
	 * @RequestMapping("/index") public String index(HttpServletRequest request,
	 * HashMap<String, Object> map, Model model) { Integer id =
	 * Integer.valueOf(request.getParameter("id")); map.put("hello", "欢迎进入HTML页面");
	 * Employee empById = iEmployeeService.getEmpById(id);
	 * model.addAttribute("say",empById); return "index/index"; }
	 */
	
	@RequestMapping("/index1")
	public String index1() {
		return "index1";
	}
	
	@RequestMapping("/index2")
	public String index2(@RequestParam(value="id", required=false) Integer id, HashMap<String, Object> map, Model model) {
        map.put("hello", "欢迎进入HTML页面");
        Employee empById = iEmployeeService.getEmpById(id);
        model.addAttribute("say",empById);
		return "index/index";
	}
	
}
