package com.example.demo;

import org.springframework.stereotype.Component;

@Component
public class Student {

    ElectronicDevice ref;

    void study() {
        System.out.println("Student is Studying");
    }

    void workingWithDevice() {
        ref.useDevice();
    }

    Student(ElectronicDevice ref) {
        this.ref = ref;
    }
}