package org.controller;

import org.dto.LoginRequest;
import org.dto.RegisterRequest;
import org.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

   private final AuthService authService;

     public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
         try {
            authService.registerUser(registerRequest);
            return ResponseEntity.ok("User Registered Succesfully");
         } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
         }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
         try {
            authService.loginUser(loginRequest);
            return ResponseEntity.ok("Login Successful");
         } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
         }
    }
}
