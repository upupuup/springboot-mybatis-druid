package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.bean.Department;
import com.example.demo.service.IDepartmentService;
import com.github.pagehelper.PageInfo;

@RequestMapping("/dept")
@Controller
public class DepartmentController {

    @Autowired
    private IDepartmentService iDepartmentService;
    
    /**
     *	 查询部门
     * @return
     */
    @RequestMapping("/queryList")
    public ModelAndView getDeptById() { 
    	List<Department> deptList = iDepartmentService.queryList();
    	ModelAndView modelAndView = new ModelAndView("dept/dept_list");
    	modelAndView.addObject("deptList", deptList);
    	return modelAndView;
    }
    
     @RequestMapping("/queryListByAttr")
     @ResponseBody
    public PageInfo<Department> getDeptByAttr() { 
    	return iDepartmentService.queryListByAttr();
    }
    
    /**跳转修改部门
     * @param id
     * @return
     */
    @RequestMapping("/toUpdate")
    public ModelAndView toUpdateById(@RequestParam("id") Integer id) { 
    	Department dept = iDepartmentService.getDeptById(id);
    	ModelAndView modelAndView = new ModelAndView("dept/dept_update");
    	modelAndView.addObject("dept", dept);
    	return modelAndView;
    } 
    
    /**
     * *跳转修改部门
     * @param id
     * @param departName
     * @param deptNo
     */
    @RequestMapping("/update")
    public void updateDept(@RequestParam("id") Integer id, @RequestParam("departName") String departName, @RequestParam("deptNo") String deptNo) {
    	Department dept = new Department();
    	dept.setId(id);
    	dept.setDepartName(departName);
    	dept.setDeptNo(deptNo);
    	int result = iDepartmentService.updateDept(dept);
    	System.out.println(result);
    }
    
    /**
     *  * 跳转新增页面
     * @return
     */
    @RequestMapping("/toSave")
    public String toSave() { 
    	return "dept/dept_save";
    }
    
    /**
     *  * 保存新增
     * @return
     */
    @RequestMapping("/save")
    public void saveDept(Department dept) {
    	iDepartmentService.saveDept(dept);
    }
    
    /**
     *  * 删除
     * @return
     */
    @RequestMapping("/delete")
    public void deleteDept(@RequestParam("id") Integer id) {
    	iDepartmentService.deleteDept(id);
    }
}