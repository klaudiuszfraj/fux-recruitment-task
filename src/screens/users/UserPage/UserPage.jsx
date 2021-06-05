import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {TextField, Button, Grid} from "@material-ui/core";


const UserPage = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

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
                            <Typography variant='h3' style={{fontSize: 24}} mt={4}>New user details</Typography>
                        </Box>
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid container direction={'column'} spacing={2}>
                                <Grid item>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        error={nameError}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        item
                                        id="surname"
                                        label="Surname"
                                        variant="outlined"
                                        fullWidth
                                        error={surnameError}
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
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Grid container justify={'flex-end'}>
                                        <Button>CANCEL</Button>
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