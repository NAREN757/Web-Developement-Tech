package com.Naren;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addrid;

    @Column
    private int streetno;

    @Column
    private String streetname;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    private String country;

    @Column
    private int pincode;

    // Default constructor required by Hibernate
    public Address() {
    }

    // Constructor
    public Address(int streetno, String streetname, String city,
                   String state, String country, int pincode) {

        this.streetno = streetno;
        this.streetname = streetname;
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
    }

    public int getAddrid() {
        return addrid;
    }

    public void setAddrid(int addrid) {
        this.addrid = addrid;
    }

    public int getStreetno() {
        return streetno;
    }

    public void setStreetno(int streetno) {
        this.streetno = streetno;
    }

    public String getStreetname() {
        return streetname;
    }

    public void setStreetname(String streetname) {
        this.streetname = streetname;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    @Override
    public String toString() {
        return "Address{" +
                "addrid=" + addrid +
                ", streetno=" + streetno +
                ", streetname='" + streetname + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", pincode=" + pincode +
                '}';
    }
}