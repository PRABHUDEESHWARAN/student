package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.service.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    Services service;

    @PostMapping
    public User addStudent(@RequestBody User user) {
        return service.saveUser(user);
    }
}