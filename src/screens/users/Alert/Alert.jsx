import React from 'react';
import {Dialog, DialogTitle} from "@material-ui/core";

const Alert = ({ message, open, onClose }) => {
    console.log({message});
    return (
        <Dialog  aria-labelledby="simple-dialog-title" open={open} onClose={() => onClose()}>
            <DialogTitle id="simple-dialog-title">{message}</DialogTitle>

        </Dialog>
    );
};

export default Alert;