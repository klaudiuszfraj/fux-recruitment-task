import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import {Grid} from "@material-ui/core";
import SingleUser from "./SingleUser/";

const UsersList = () => {
  const users = useSelector(state => state.users.data);
  return (
    <List>
        <div style={{padding: '1rem'}}>
          <Grid container direction={"column"} spacing={2}>
            {users.map(user => (
                <Grid item>
                    <SingleUser user={user}/>
                </Grid>
            ))}
          </Grid>
        </div>
    </List>
  )
};

export default UsersList;
