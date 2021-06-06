import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {TextField, Button, Grid} from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';


const UserPage = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            const { state: { user } } = location;
            setName(user.first_name);
            setSurname(user.last_name);
            setEmail(user.email);
        }
    },[location])


    const handleErrors = () => {
        if (!name || !surname || !email) {
            window.alert("please fill all fields");
            if (!name) {setNameError(true)}else {setNameError(false)}
            if (!surname) {setSurnameError(true)}else {setSurnameError(false)}
            if (!email) {setEmailError(true)}else {setEmailError(false)}
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleErrors();
    }

    return (
        <Container maxWidth={'xs'}>
            <Box mt={4} p={2} clone>
                <Paper >
                    <Box style={{ padding: 20 }}>
                        <Box mb={2}>
                            <Typography variant='h3' style={{fontSize: 24}}>New user details</Typography>
                        </Box>
                        {location.state &&
                        <Box mb={2}>
                            <Typography variant='body2'>ID: {location.state.user.id}</Typography>
                        </Box>}
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container direction={'column'} spacing={2}>
                                <Grid item>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        error={nameError}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="surname"
                                        label="Surname"
                                        variant="outlined"
                                        fullWidth
                                        error={surnameError}
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        error={emailError}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Grid container justify={'flex-end'}>
                                        <Button
                                            onClick={() => history.push(`/`)}
                                        >CANCEL</Button>
                                        <Box ml={2}>
                                            <Button variant="contained" type={'submit'}>SUBMIT TO REVIEW</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>

                </Paper>
            </Box>
        </Container>
    );
};

export default UserPage;