package com.pascualteam.javaproject.model;

import java.util.List;

public class HttpResponse {

    private List<User> data;
    private String message;
    private boolean success;

    public HttpResponse(List<User> data, String message, boolean success) {

        setData(data);

        setMessage(message);

        setSuccess(success);
    }


    public List<User> getData() {
        return data;
    }

    public void setData(List<User> data) {
        this.data = data;
    }

    public String getMessage() {

        return message;

    }



    public void setMessage(String message) {

        this.message = message;

    }



    public boolean isSuccess() {

        return success;

    }



    public void setSuccess(boolean success) {

        this.success = success;

    }

}
