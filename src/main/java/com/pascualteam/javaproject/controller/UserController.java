package com.pascualteam.javaproject.controller;

import com.pascualteam.javaproject.model.User;
import com.pascualteam.javaproject.service.UserServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserServiceAPI userServiceAPI;

    @PostMapping("/add")
    public void save(@RequestBody User user) {
        userServiceAPI.save(user);
    }

    @GetMapping("/get/{id}")
    public User getById(@PathVariable String id) {
        Integer myId = Integer.parseInt(id);
        return userServiceAPI.getById(myId);
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userServiceAPI.getAllUsers();
    }

}
