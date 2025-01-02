package org.dto;

// User requests to register account 

public class RegisterRequest {

    private String username;
    private String email;
    private String password;
    private int privilege;

    public RegisterRequest() { }

    public RegisterRequest(String username, String password, String email, int privilege) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.privilege = privilege;
    }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public int getPrivilege() {return privilege;}
    public void setPrivelege(int privilege) { this.privilege = privilege; }
}
