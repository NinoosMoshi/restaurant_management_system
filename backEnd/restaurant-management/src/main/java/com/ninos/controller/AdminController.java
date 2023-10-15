package com.ninos.controller;

import lombok.AllArgsConstructor;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ninos.model.dto.CategoryDTO;
import com.ninos.service.admin.AdminService;

@AllArgsConstructor
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/category")
    public ResponseEntity<CategoryDTO> postCategory(@ModelAttribute CategoryDTO categoryDTO) throws IOException {
        CategoryDTO createdCategoryDto = adminService.postCategory(categoryDTO);
        if (createdCategoryDto == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(createdCategoryDto);
    }



}
