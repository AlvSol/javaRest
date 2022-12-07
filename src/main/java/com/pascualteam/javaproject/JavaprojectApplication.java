package com.pascualteam.javaproject;

import com.pascualteam.javaproject.model.User;
import com.pascualteam.javaproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@EnableJpaRepositories
public class JavaprojectApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(JavaprojectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		userRepository.deleteAll();

		createUsers();
	}

	public void createUsers() {
		userRepository.save(new User("Juan", "Torres", "8974562924", "jtorres@gmail.com"));
		userRepository.save(new User("Mike", "Johnson", "4568562924", "mikej@gmail.com"));
		userRepository.save(new User("David", "Garcia", "7338562492", "davidGarcia@outlook.com"));
		userRepository.save(new User("Timmy", "Thomson", "7459579543", "timmy32@gmail.com"));

	}
}
