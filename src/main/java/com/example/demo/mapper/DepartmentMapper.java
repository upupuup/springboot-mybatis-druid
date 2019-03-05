package com.example.demo.mapper;

import java.util.List;

import com.example.demo.bean.Department;

public interface DepartmentMapper {
    public Department getDeptById(Integer id);

	public List<Department> queryList();

	public int updateDept(Department dept);

	public int saveDept(Department dept);

	public int deleteDept(Integer id);
}