package com.Naren;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class InsertRecord {
    static void main(String[] args) {
        Connection con = null;
        PreparedStatement ps = null;
        String sql = "insert into Employee values(?,?,?,?)";
        Scanner scan = new Scanner(System.in);

        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest";
        String user = "root";
        String password = "4028";

        try {
            Class.forName(dpath);
            con = DriverManager.getConnection(url,user,password);
            ps = con.prepareStatement(sql);

            System.out.println("Enter id,name,gender,salary");

            int id = scan.nextInt();
            String name = scan.next();
            String gender = scan.next();
            int salary = scan.nextInt();

            ps.setInt(1,id);
            ps.setString(2,name);
            ps.setString(3,gender);
            ps.setInt(4,salary);

            int nora = ps.executeUpdate();
            System.out.println(nora + "row(s) inserted");
        } catch (Exception e) {
            e.printStackTrace();
        }

        finally {
            try {
                if(con!=null) con.close();
                if(ps!=null) ps.close();
                if(scan!=null) scan.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
