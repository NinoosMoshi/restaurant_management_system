package com.ninos.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CategoryDTO {

    private Long id;
    private String name;
    private String description;

    private MultipartFile img;
    private byte[] returnedImg;


}
