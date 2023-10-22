package com.ninos.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ninos.model.entity.User;
import com.ninos.model.enums.UserRole;


public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByEmail(String email);
    User findUserByUserRole(UserRole userRole);

}
