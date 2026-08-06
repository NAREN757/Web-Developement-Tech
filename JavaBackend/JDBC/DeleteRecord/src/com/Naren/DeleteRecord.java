package com.Naren;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import java.util.Scanner;

public class DeleteRecord {
    static void main(String[] args) {

        Connection con = null;
        PreparedStatement ps = null;
        String sql = "delete from Employee where id=?";
        Scanner scan = new Scanner(System.in);
        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest?user=root&password=4028";

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
    }
}
