package com.ninos.service.auth;


import lombok.AllArgsConstructor;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ninos.model.dto.SignupRequest;
import com.ninos.model.dto.UserDTO;
import com.ninos.model.entity.User;
import com.ninos.model.enums.UserRole;
import com.ninos.repository.UserRepository;

@AllArgsConstructor
@Service
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepository;


    @Override
    public UserDTO createUser(SignupRequest signupRequest) {
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setUserRole(UserRole.CUSTOMER);

        User savedUser = userRepository.save(user);

        UserDTO userDTO = new UserDTO();
        userDTO.setId(savedUser.getId());
        userDTO.setName(savedUser.getName());
        userDTO.setEmail(savedUser.getEmail());
        userDTO.setUserRole(savedUser.getUserRole());

        return userDTO;
    }





}
