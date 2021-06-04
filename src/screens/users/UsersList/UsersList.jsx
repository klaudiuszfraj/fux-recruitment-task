import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {Box, Grid, Paper} from "@material-ui/core";

const UsersList = () => {
  const users = useSelector(state => state.users.data);
  console.log(users);
  return (
    <List>
        <div style={{padding: '1rem'}}>
          <Grid container direction={"column"} spacing={2}>
            {users.map(user => (
              <Grid item>
                <Paper key={`user-${user.id}`} >
                  <ListItem>
                    <ListItemText
                        primary={
                          <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
                        }
                        secondary={user.email}
                    />
                  </ListItem>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
    </List>
  )
};

export default UsersList;
