import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const SingleUser = ({ user }) => {
    return (
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
    );
};

export default SingleUser;