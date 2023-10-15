package com.ninos.service.admin;

import lombok.AllArgsConstructor;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.ninos.model.dto.CategoryDTO;
import com.ninos.model.entity.Category;
import com.ninos.repository.CategoryRepository;

@AllArgsConstructor
@Service
public class AdminServiceImpl implements AdminService{

    private final CategoryRepository categoryRepository;


    @Override
    public CategoryDTO postCategory(CategoryDTO categoryDTO) throws IOException {
        Category category = new Category();
        category.setName(categoryDTO.getName());
        category.setDescription(categoryDTO.getDescription());
        category.setImg(categoryDTO.getImg().getBytes());
        Category savedCategory = categoryRepository.save(category);

        CategoryDTO createdCategoryDto = new CategoryDTO();
        createdCategoryDto.setId(savedCategory.getId());
        return createdCategoryDto;
    }
}
