package com.example.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.bean.Department;
import com.example.demo.mapper.DepartmentMapper;
import com.example.demo.service.IDepartmentService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service("iDepartmentService")
public class DepartmentServiceImpl implements IDepartmentService {
    @Autowired
    private DepartmentMapper departmentMapper;

    public Department getDeptById(Integer id) {
        return departmentMapper.getDeptById(id);
    }

	@Override
	public List<Department> queryList() {
		// TODO Auto-generated method stub
		return departmentMapper.queryList();
	}

	@Override
	public int saveDept(Department dept) {
		// TODO Auto-generated method stub
		return departmentMapper.saveDept(dept);
	}

	@Override
	public int updateDept(Department dept) {
		// TODO Auto-generated method stub
		return departmentMapper.updateDept(dept);
	}

	@Override
	public int deleteDept(Integer id) {
		// TODO Auto-generated method stub
		return departmentMapper.deleteDept(id);
	}

	@Override
	public PageInfo<Department> queryListByAttr() {
		// TODO Auto-generated method stub
		PageHelper.startPage(2, 1);
		return new PageInfo<>(departmentMapper.queryList());
	}
}