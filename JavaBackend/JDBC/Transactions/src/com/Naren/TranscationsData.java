package com.Naren;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class TranscationsData {
    static void main(String[] args) {

        Connection con = null;
        PreparedStatement ps1 = null;
        PreparedStatement ps2 = null;

        Scanner scan = new Scanner(System.in);
        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest?user=root&password=4028";

        String sql1 = "update Bank set balance = balance-? where accnum = ? and password = ?";
        String sql2 = "update Bank set balance = balance+? where accnum = ?";

        try {
            Class.forName(dpath);
            con = DriverManager.getConnection(url);
            ps1 = con.prepareStatement(sql1);
            ps2 = con.prepareStatement(sql2);

            System.out.println("Enter from Acc num:");
            int facno = scan.nextInt();
            String pwd = scan.next();

            System.out.println("Enter to Acc num:");
            int toAccno = scan.nextInt();

            System.out.println("Enter the amount to transfer:");
            int amount = scan.nextInt();

            ps1.setInt(1,amount);
            ps1.setInt(2,facno);
            ps1.setString(3,pwd);

            ps2.setInt(1,amount);
            ps2.setInt(2,toAccno);

            int nora1 = ps1.executeUpdate();
            System.out.println(nora1 + "row(s) Affected");

            int nora2 = ps2.executeUpdate();
            System.out.println(nora2 + "row(s) Affected");

        } catch (Exception e) {
            e.printStackTrace();
        }

        finally {
            try {
                if(con!=null) con.close();
                if(ps1!=null) ps1.close();
                if(ps2!=null) ps2.close();
                if(scan!=null) scan.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
