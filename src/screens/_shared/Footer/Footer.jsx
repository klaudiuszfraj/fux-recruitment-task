import React from 'react';
import {Container, Box, Typography} from "@material-ui/core";


const Footer = () => {
    return (
            <Container style={{
                backgroundColor: '#E1E4E5',
                borderTop: '2px solid #C1C6C8',
                marginTop: '2rem'
            }}>
                <Box p={2} color={'#607D8B'}>
                    <Typography variant={"body2"} align={"center"}>
                        &copy; USERS APP
                    </Typography>
                </Box>
            </Container>
    );
};

export default Footer;