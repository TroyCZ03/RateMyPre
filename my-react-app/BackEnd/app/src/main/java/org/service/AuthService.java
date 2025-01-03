package org.service;

import org.dto.LoginRequest;
import org.dto.RegisterRequest;
import org.dto.UserResponse;
import org.model.User;
import org.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

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


    
    public UserResponse loginUser(LoginRequest request) {
            // Check if the email exists
         User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("No account associated with this Email"));

        // Validate password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // Return UserResponse on successful login
        return new UserResponse(user.getId(), user.getUsername(), user.getEmail());
    }
}
