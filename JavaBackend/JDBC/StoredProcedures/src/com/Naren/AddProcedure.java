package com.Naren;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.util.Scanner;

public class AddProcedure {
    static void main(String[] args) {

        Connection con = null;
        ResultSet rs = null;
        CallableStatement cs = null;
        Scanner scan = new Scanner(System.in);

        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest?user=root&password=4028";
        String sql = "call addStudent(?,?,?,?)";
        try
        {
            Class.forName(dpath);
            con = DriverManager.getConnection(url);
            cs = con.prepareCall(sql);

            System.out.println("Enter id,name marks and age :");
            int id = scan.nextInt();
            String name = scan.next();
            int marks = scan.nextInt();
            int age = scan.nextInt();

            cs.setInt(1, id);
            cs.setString(2, name);
            cs.setInt(3, marks);
            cs.setInt(4, age);
            boolean res = cs.execute();

            if(res == true)
            {
                rs = cs.getResultSet();
                while(rs.next())
                {
                    System.out.println(rs.getInt(1)
                            + " " + rs.getString(2) + " " + rs.getInt(3) + " " + rs.getInt(4) );
                }
            }
            else
            {
                int nora = cs.getUpdateCount();
                System.out.println(nora + "rows(S) affected");
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

        finally
        {
            try
            {
                if(con != null) con.close();
                if(cs != null) cs.close();
                if(scan != null) scan.close();
                if(rs != null) rs.close();
            }
            catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }
}

