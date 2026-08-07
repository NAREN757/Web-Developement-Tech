package com.Naren;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class UpdateRecord {
    static void main(String[] args) {

        Connection con = null;
        PreparedStatement ps = null;
        Scanner scan = new Scanner(System.in);

        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest?user=root&password=4028";
        String sql = "update Employee set name = ? where id = ?";

        try {
            Class.forName(dpath);
            con = DriverManager.getConnection(url);
            ps = con.prepareStatement(sql);

            System.out.println("Enter id to update name of the Employee");
            int id = scan.nextInt();
            System.out.println("Enter the new name: ");
            String newName = scan.next();

            ps.setInt(2,id);
            ps.setString(1,newName);

            int nora = ps.executeUpdate();
            System.out.println(nora + "row(s) Updated");

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
    }
}
