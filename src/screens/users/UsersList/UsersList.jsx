import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import {Grid} from "@material-ui/core";
import SingleUser from "./SingleUser/";
import Alert from "../Alert";
import {useLocation} from "react-router-dom";


const UsersList = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const users = useSelector(state => state.users.data);

    useEffect(() => {
        if (location.state) {
            setSuccessMessage(location.state.message);
            setOpen(true)
        }
    },[location]);
    const handleClose = () => {
        setOpen(false);
    };

    return (
    <List>
        <div style={{padding: '1rem'}}>
          <Grid container direction={"column"} spacing={2}>
            {users.map(user => (
                <Grid item key={user.id}>
                    <SingleUser user={user}/>
                </Grid>
            ))}
          </Grid>
        </div>
        <Alert message={successMessage} open={open} onClose={handleClose}/>
    </List>
  )
};

export default UsersList;
