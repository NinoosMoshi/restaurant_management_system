package com.ninos.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ninos.model.entity.User;



public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByEmail(String email);
//    Optional<User> findFirstByEmail(String email);

}
