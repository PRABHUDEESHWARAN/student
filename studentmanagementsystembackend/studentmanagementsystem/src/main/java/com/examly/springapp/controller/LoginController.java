package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.LoginModel;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class LoginController {

    @PostMapping("/login")
    public boolean checkUser(@RequestBody LoginModel login) {
        return true;
    }
}