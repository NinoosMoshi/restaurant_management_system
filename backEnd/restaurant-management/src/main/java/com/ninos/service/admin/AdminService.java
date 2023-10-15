package com.ninos.service.admin;

import java.io.IOException;

import com.ninos.model.dto.CategoryDTO;

public interface AdminService {
    CategoryDTO postCategory(CategoryDTO categoryDTO) throws IOException;
}
