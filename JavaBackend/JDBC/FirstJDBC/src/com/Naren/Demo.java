package com.Naren;

import java.sql.*;

public class Demo {
    static void main(String[] args) {

        try {
            //Step 1 - Loading the Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Driver Loaded");

            //Step 2 - Establishing the Connection
            Connection con;
            con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/Kodnest","root","4028");
            System.out.println("Connection Established");

            //Step 3 - Creating a Medium
            Statement stmt = con.createStatement();
            System.out.println("Statement Medium Created");

            //Step 4 - Executing the Query
            String sql = "SELECT * FROM Student";
            ResultSet rs = stmt.executeQuery(sql);
            System.out.println("Query executed and received result set");

            while (rs.next()) {
                System.out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getInt(3) + " " + rs.getInt(4));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
