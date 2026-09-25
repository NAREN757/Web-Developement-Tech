package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Employee {

    int empId;

    String empName;

    double empSalary;

    Department dep;

    public void work() {
        System.out.println("Employee is working...");
    }

    public void empDetails() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Employee Name: " + empName);
        System.out.println("Employee Salary: " + empSalary);
    }

    public Employee(
            @Value("${employee.id}") int empId,
            @Value("${employee.name}") String empName,
            @Value("${employee.empSalary}") double empSalary,
            Department dep) {

        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
        this.dep = dep;
    }
}