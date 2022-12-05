package com.pascualteam.javaproject.service;

import com.pascualteam.javaproject.model.User;

import java.util.List;

public interface UserServiceAPI {

    public User save(User user);

    public User getById(Integer id);
    public List<User> getAllUsers();
}
