package com.ninos.service.jwt;

import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ninos.model.entity.User;
import com.ninos.repository.UserRepository;

@AllArgsConstructor
@Service
public class UserDetailsServiceImpl  { // implements UserDetailsService

//    private final UserRepository userRepository;
//
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//
//        Optional<User> user = userRepository.findUserByEmail(email);
//        if (user.isEmpty()) throw new UsernameNotFoundException("User not found", null);
//        return new org.springframework.security.core.userdetails.User(user.get().getEmail(),
//                                                                      user.get().getPassword(),
//                                                                      new ArrayList<>());
//    }


}
