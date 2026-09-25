package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringValueDemoApplication {

    public static void main(String[] args) {

        ApplicationContext ac =
                SpringApplication.run(SpringValueDemoApplication.class, args);

        Employee emp = ac.getBean(Employee.class);

        emp.work();
        emp.empDetails();

        Department dp = ac.getBean(Department.class);

        dp.depDetails();
    }
}