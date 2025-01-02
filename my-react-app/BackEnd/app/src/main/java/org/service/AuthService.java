package org.service;

import org.dto.RegisterRequest;
import org.dto.UserResponse;
import org.model.User;
import org.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserResponse registerUser(RegisterRequest request) {
        if(userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email is already in use");
        }
        
        User user = new User(
            request.getUsername(),
            passwordEncoder.encode(request.getPassword()),
            request.getEmail(),
            request.getPrivilege()
        );
        userRepository.save(user);

        return new UserResponse(user.getId(), user.getUsername(), user.getEmail());
    }
}
