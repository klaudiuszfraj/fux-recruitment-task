import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


//todo:: I cant download the icon from the mock up
export default function TopBar() {
  return (
    <AppBar position="static" style={{height: 60, backgroundColor: '#617D8B'}}>
      <Container maxWidth="md">
        <Toolbar style={{padding: 0}}>
            <div style={{width: 47, height: 45, backgroundColor: '#43565f', display: 'inline-block', marginRight: '1rem'}}/>
            <Typography variant="h6" >
                Users app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
