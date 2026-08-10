package com.Naren;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class App {
    public static void main( String[] args ) {

        Connection con = null;
        PreparedStatement ps = null;
        Scanner scan = new Scanner(System.in);

        String dpath = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://127.0.0.1:3306/Kodnest?user=root&password=4028";
        String sql = "insert into department values(?,?,?,?)";

        try
        {
            Class.forName(dpath);
            con = DriverManager.getConnection(url);
            ps = con.prepareStatement(sql);

            raj : while(true)
            {
                System.out.println("Enter 1 to insert or 2 to exit");
                int choice = scan.nextInt();
                switch(choice)
                {
                    case 1 : {
                        System.out.println("Enter did,dname,dloc and noe");
                        int id = scan.nextInt();
                        String name = scan.next();
                        String loc = scan.next();
                        int noe = scan.nextInt();

                        ps.setInt(1, id);
                        ps.setString(2, name);
                        ps.setString(3, loc);
                        ps.setInt(4, noe);

                        ps.addBatch();

                        break;
                    }
                    case 2 : {
                        break raj;
                    }
                    default : System.out.println("Invalid choice");
                }
            }

            int res[] = ps.executeBatch();
            for(int i : res)
            {
                System.out.println(i + " ");
            }
            System.out.println();
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
                if(ps != null) ps.close();
                if(scan != null) scan.close();
            }
            catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }
}
