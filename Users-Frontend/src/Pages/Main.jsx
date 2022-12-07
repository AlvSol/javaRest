import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Form from './Form/Form';
import agent from "../data/agent";
import { responsiveFontSizes, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Main.scss'
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";

function Main(){

    const usersArray = [
        {
            id:'1234',
            name:'asdf',
            surname:'qwerty',
            email:'sadf@gmail.com',
            phone:123456
        },
        {
            id:'5678',
            name:'ghjk',
            surname:'tyui',
            email:'vbvcn@gmail.com',
            phone:123456
        },
    ]

    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState([]);

    const updateArray = (usernew) => {
        const newarray = [...users, usernew];
        setUsers(newarray);
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        console.log("CLOSE");
        setOpen(false);
    };

    useEffect(()=>{        
        axios.get("http://localhost:8080/userAPI/all")
        .then(response=>{

            setUsers(response.data.data);
        })
    },[])
    console.log({users})

    return(
        <div className="content">
            <div className="tableHeader">
                <h2>TableTitle</h2>
                <Button variant="contained" onClick={handleClickOpen}> + Add User </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title"> {"Login"} </DialogTitle>
                        <DialogContent>
                            <Form updateArray={updateArray} handleClosePopup={handleClose}/>
                        </DialogContent>
                    </Dialog>
            </div>
            <div className="userTable">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Surname</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Phone number</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map((user) => (
                                <StyledTableRow key={user.id}>
                                    <StyledTableCell align="left">{user.firstname}</StyledTableCell>
                                    <StyledTableCell align="left">{user.lastname}</StyledTableCell>
                                    <StyledTableCell align="left">{user.phoneNumber}</StyledTableCell>
                                    <StyledTableCell align="left">{user.email}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  

export default Main;