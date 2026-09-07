package com.Naren;

import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class App {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        // Step 1: Get Address details
        System.out.println("Enter streetno, streetname, city, state, country and pincode:");

        Address address = new Address(
                scan.nextInt(),
                scan.next(),
                scan.next(),
                scan.next(),
                scan.next(),
                scan.nextInt()
        );

        // Step 2: Get Student details
        System.out.println("Enter student name, marks and age:");

        Student student = new Student(
                scan.next(),
                scan.nextInt(),
                scan.nextInt(),
                address
        );

        // Step 3: Load Hibernate configuration
        Configuration configuration =
                new Configuration().configure("hibernate.cfg.xml");

        // Step 4: Create SessionFactory
        SessionFactory factory =
                configuration.buildSessionFactory();

        // Step 5: Open Session
        Session session = factory.openSession();

        // Step 6: Begin Transaction
        Transaction transaction =
                session.beginTransaction();

        // Step 7: Save Student
        session.persist(student);

        // Step 8: Commit Transaction
        transaction.commit();

        // Step 9: Close Session
        session.close();

        // Step 10: Close SessionFactory
        factory.close();

        // Step 11: Close Scanner
        scan.close();

        System.out.println("Student and Address saved successfully!");
    }
}