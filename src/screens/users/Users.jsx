import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import UsersList from './UsersList'
import { loadUsers } from '../../redux/actions/usersActions';
import {Grid} from "@material-ui/core";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Box mt={4} clone>
        <Paper >
          <div style={{ padding: 20 }}>
            <Grid container justify={'space-between'} alignItems={'center'}>
              <Box clone>
                <Typography variant='h3' style={{fontSize: 24}}>Users</Typography>
              </Box>
              <Button variant="contained" style={{backgroundColor: '#43565f', color: '#fff'}} startIcon={<AddIcon/>}>
                ADD USER
              </Button>
            </Grid>
          </div>

          <UsersList />
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
