package com.Naren;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sid;

    @Column
    private String sname;

    @Column
    private int smarks;

    @Column
    private int sage;

    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    // Default constructor required by Hibernate
    public Student() {
    }

    // Constructor
    public Student(String sname, int smarks, int sage, Address address) {
        this.sname = sname;
        this.smarks = smarks;
        this.sage = sage;
        this.address = address;
    }

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public int getSmarks() {
        return smarks;
    }

    public void setSmarks(int smarks) {
        this.smarks = smarks;
    }

    public int getSage() {
        return sage;
    }

    public void setSage(int sage) {
        this.sage = sage;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sid=" + sid +
                ", sname='" + sname + '\'' +
                ", smarks=" + smarks +
                ", sage=" + sage +
                ", address=" + address +
                '}';
    }
}