import React from 'react';
import {Box, Dialog,     Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const Alert = ({ message, open, onClose }) => {
    const useStyles = makeStyles({
        scrollPaper: {
            alignItems: 'baseline',
        }
    });
    const classes = useStyles();

    return (
        <Dialog  aria-labelledby="simple-dialog-title"
                 open={open} onClose={() => onClose()}
                 classes={{scrollPaper: classes.scrollPaper }}
        >
            <Box p={2} color={'#fff'} style={{backgroundColor: 'rgba(0,0,0,0.87)'}}>
                <Typography variant={'body2'} id="simple-dialog-title">{message}</Typography >
            </Box>
        </Dialog>
    );
};

export default Alert;