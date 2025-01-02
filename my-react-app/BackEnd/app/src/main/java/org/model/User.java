package org.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long user_Id;

    private String password;
    private String username;
    private String email;
    private int privilege;

 

    public User(String username, String password, String email, int privilege) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.privilege = privilege;
    }

    //getters and setters

    public void setId(Long user_Id) {
        this.user_Id = user_Id;
    }

    public Long getId() {
        return user_Id;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPrivilege() {
        return privilege;
    }

    public void setPrivilege(int privilege) {
        this.privilege = privilege;
    }

   
}
