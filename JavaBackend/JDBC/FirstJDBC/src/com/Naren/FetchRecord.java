package com.Naren;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Scanner;

public class FetchRecord {
    static void main(String[] args) {

        Connection con = null;
        PreparedStatement ps = null;
        Scanner scan = new Scanner(System.in);
        ResultSet rs = null;

        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest";
        String user = "root";
        String password = "4028";

        String sql = "select * from Student where S_ID = ?";

        try {
             Class.forName(dpath);
             con = DriverManager.getConnection(url,user,password);
             ps = con.prepareStatement(sql);

            System.out.println("Enter S_ID to fetch the Data: ");

            int uid = scan.nextInt();

            ps.setInt(1,uid);

            rs = ps.executeQuery();

            if(rs.next()) {
                System.out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getInt(3) + " " + rs.getInt(4));
            } else {
                System.out.println("Invalid S_ID : " + uid);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        finally {
            try {
                if(con != null)con.close();
                if(ps != null)ps.close();
                if(rs != null)rs.close();
                if(scan != null)scan.close();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

    }
}
