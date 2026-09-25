package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Department {

    int depId;

    String depName;

    public Department(
            @Value("${department.id}") int depId,
            @Value("${department.depName}") String depName) {

        this.depId = depId;
        this.depName = depName;
    }

    public void depDetails() {

        System.out.println("Department ID: " + depId);
        System.out.println("Department Name: " + depName);
    }
}