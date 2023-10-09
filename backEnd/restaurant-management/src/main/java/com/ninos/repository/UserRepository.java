package com.ninos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ninos.model.entity.User;



public interface UserRepository extends JpaRepository<User, Long> {
}
