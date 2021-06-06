import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as Logo} from '../../../assets/users-app-logo.svg';

export default function TopBar() {
  return (
    <AppBar position="static" style={{height: 60, backgroundColor: '#617D8B'}}>
      <Container maxWidth="md">
        <Toolbar style={{padding: 0}}>
            <Logo style={{width: 47, height: 45, display: 'inline-block', marginRight: '1rem'}}/>
            <Typography variant="h6" >
                Users app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
