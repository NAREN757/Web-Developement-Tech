package com.Naren;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        // Get employee details
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter name: ");
        String name = scan.next();

        System.out.print("Enter gender: ");
        String gender = scan.next();

        System.out.print("Enter salary: ");
        int salary = scan.nextInt();

        // Create Employee object
        Employee emp = new Employee(name, gender, salary);

        // Step 1: Load Hibernate configuration
        Configuration conf = new Configuration();
        conf.configure("hibernate.cfg.xml");

        // Step 2: Create SessionFactory
        SessionFactory factory = conf.buildSessionFactory();

        // Step 3: Open Session
        Session session = factory.openSession();

        // Step 4: Begin Transaction
        Transaction transaction = session.beginTransaction();

        // Step 5: Save Employee
        session.persist(emp);

        // Step 6: Commit Transaction
        transaction.commit();

        // Step 7: Close Session
        session.close();

        // Step 8: Close SessionFactory
        factory.close();

        scan.close();

        System.out.println("Employee saved successfully!");
    }
}