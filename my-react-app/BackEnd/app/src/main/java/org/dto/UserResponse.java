package org.dto;

public class UserResponse {

    private Long userId;
    private String username;
    private String email;

    public UserResponse(Long userId, String email, String username) {
        this.userId = userId;
        this.email = email;
        this.username = username;
    }

    public Long getUserId() { return userId; }
    public String getUsername() { return username; }
    public String getEmail() { return email; }
}
