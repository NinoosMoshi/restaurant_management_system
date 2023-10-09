package com.ninos.service.auth;

import com.ninos.model.dto.SignupRequest;
import com.ninos.model.dto.UserDTO;

public interface AuthService {

    UserDTO createUser(SignupRequest signupRequest);

}
