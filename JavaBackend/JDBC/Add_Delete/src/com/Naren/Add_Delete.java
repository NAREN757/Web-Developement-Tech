package com.Naren;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class Add_Delete {
    static void main(String[] args) {
        Connection con = null;
        PreparedStatement ps = null;
        Scanner scan = new Scanner(System.in);

        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest?user=root&password=4028";

        System.out.println("Enter action Add or Delete: ");
        String action = scan.next();
        switch (action) {
            case "Add": {
                String sql = "insert into Employee values(?,?,?,?)";
                try {
                    Class.forName(dpath);
                    con = DriverManager.getConnection(url);
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
                    System.out.println(nora + " row(s) inserted");
                } catch (Exception e) {
                    e.printStackTrace();
                }
                finally {
                    try {
                        if(con!=null) con.close();
                        if(ps!=null) ps.close();
                        if(scan!=null) scan.close();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                break;
            }

            case "Delete": {
                String sql = "delete from Employee where id=?";
                try {
                    Class.forName(dpath);
                    con = DriverManager.getConnection(url);
                    ps = con.prepareStatement(sql);
                    System.out.println("Enter id to delete the Record");
                    int id = scan.nextInt();
                    ps.setInt(1,id);
                    int nora = ps.executeUpdate();
                    System.out.println(nora + " row(s) deleted");
                } catch (Exception e) {
                    e.printStackTrace();
                }

                finally {
                    try {
                        if(con!=null) con.close();
                        if(ps!=null) ps.close();
                        if(scan!=null) scan.close();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                break;
            }
        }


    }
}
