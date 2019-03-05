package com.example.demo.service;

import java.util.List;

import com.example.demo.bean.Department;
import com.github.pagehelper.PageInfo;

public interface IDepartmentService {
    Department getDeptById(Integer id);
	List<Department> queryList();
	int saveDept(Department dept);
	int updateDept(Department dept);
	int deleteDept(Integer id);
	PageInfo<Department> queryListByAttr();
}