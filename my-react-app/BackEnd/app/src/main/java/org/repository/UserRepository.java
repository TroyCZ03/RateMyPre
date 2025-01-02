package org.repository;
import java.util.Optional;

import org.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUsername(String username);
    boolean existsByEmail(String email); 
    Optional<User> findByEmail(String email);  
}
