import React, { useEffect } from "react";
import "./Form.scss";
import InputForm from "../../components/InputForm/InputForm";
import { Link } from "@mui/material";
import axios from "axios";
import agent from "../../data/agent";

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

function Form({handleClosePopup}) {
  
  const [form_firstname, setFirstname] = React.useState("");
  const [form_lastname, setLastname] = React.useState("");
  const [form_phoneNumber, setPhoneNumber] = React.useState("");
  const [form_email, setEmail] = React.useState("");

  const [submitForm, setSubmitform] = React.useState(false);
  

  useEffect(()=>{

    if(form_firstname.length===0) console.log("no firstname");
    if(form_lastname.lenght===0) console.log("no lastname");
    if(form_phoneNumber.lenght===0) console.log("no phone");
    if(form_email.length===0) console.log("no email");

    if(form_firstname&& form_lastname&& form_phoneNumber&& form_email){
      Submit();
      console.log(" submit")
    }
    else{      
      console.log("no submit")
    }
  },[submitForm])

 
  const Submit = () => {
    console.log(form_firstname);
    
      console.log("wewe")
      axios({
        method: 'post',
        url: 'http://localhost:8080/userAPI/save',
        data: {
          firstname:form_firstname,
          lastname: form_lastname,
          phoneNumber: form_phoneNumber,
          email: form_email
        }
      }).then(response=>{
        console.log(response.data.message);
        console.log(form_firstname);
      })
    
    handleClosePopup();
  }

  function SetAllData(value){
    submitForm = value;
  }


  return (
    <form className="mainForm">
      <div className="textInputs">
        <TextField id="name" label="first name" defaultValue="Default Value" variant="standard"
          value={form_firstname} onChange={(e) => setFirstname(e.target.value)} />
        <br/>
        <TextField id="name" label="last name" defaultValue="Default Value" variant="standard"
          value={form_lastname} onChange={(e) => setLastname(e.target.value)} />
        <br/>
        <TextField id="name" label="phone number"  type="number" defaultValue="Default Value" variant="standard"
          value={form_phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <br/>
        <TextField id="name" label="email" defaultValue="Default Value" variant="standard"
          value={form_email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="formButtons">
      <Button variant="contained"
        className="submitBtn"
        type="button"
        value="Save"
        onClick={() => {setSubmitform(!submitForm)}}
        
      >Submit</Button>
      <Button variant="outlined"  
        className="submitBtn"
        type="button"
        value="Cancel"
        onClick={() => handleClosePopup()}
      >
        Cancel
      </Button>
      </div>
    </form>
  );
}

export default Form;