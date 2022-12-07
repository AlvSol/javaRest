package com.pascualteam.javaproject.model;

import com.pascualteam.javaproject.exceptions.EmptyException;
import com.pascualteam.javaproject.exceptions.FormatException;
import com.pascualteam.javaproject.exceptions.LengthException;
import jakarta.persistence.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Entity // This tells Hibernate to make a table out of this class
@EntityScan
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	@Column(length = 25)
	private String firstname;

	@Column(length = 25)
	private String lastname;

	@Column(length = 20)
	private String phoneNumber;

	@Column(length = 25)
	private String email;

	public User() {
	}

	public User(String firstname, String lastname, String phoneNumber, String email) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}

	public User(Integer id, String firstname, String lastname, String phoneNumber, String email) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User{" +
				"\"id\": \"" + id +
				"\", \"firstname\": \"" + firstname +
				"\", \"lastname\": \"" + lastname +
				"\", \"phoneNumber\": \"" + phoneNumber +
				"\", \"email\": \"" + email +
				"\"}";
	}

	public void validate() throws EmptyException, FormatException, LengthException {
		if(getFirstname().trim().equals("")) {
			throw new EmptyException("First name can't be empty");
		}
		if(getLastname().trim().equals("")) {
			throw new EmptyException("Last name can't be empty");
		}
		if(getEmail().trim().equals("")) {
			throw new EmptyException("Email can't be empty");
		}
		if(getPhoneNumber().trim().equals("")) {
			throw new EmptyException("Phone number can't be empty");
		}

		Pattern pattern = Pattern.compile("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
		Matcher mat = pattern.matcher(this.email);

		if(!mat.matches()) {
			throw new FormatException("Email does not match the format");
		}

		Pattern patternPhone = Pattern.compile("[0-9]+");
		Matcher matPhone = patternPhone.matcher(this.phoneNumber);

		if(!matPhone.matches()) {
			throw new FormatException("Phone number does not match the format or too short (min: 10)");
		}

		if (getFirstname().length() > 25) {
			throw new LengthException("First Name too long");
		}
		if (getLastname().length() > 25) {
			throw new LengthException("Last Name too long");
		}
		if (getEmail().length() > 25) {
			throw new LengthException("Email too long");
		}
		if (getPhoneNumber().length() > 20) {
			throw new LengthException("Phone number too long");
		}
	}

}
