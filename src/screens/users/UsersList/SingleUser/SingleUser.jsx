import React from 'react';
import {ListItemAvatar, Paper, Avatar} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';


const SingleUser = ({ user }) => {
    const history = useHistory();
    return (
            <Paper key={`user-${user.id}`} >
                <ListItem
                    button
                    onClick={() => history.push({
                        pathname: `user/${user.id}`,
                        state: {user}
                    })}
                >
                    <ListItemText
                        primary={
                            <>
                                <Typography variant="body2" style={{color: 'rgba(0,0,0,0.6)'}}>{`ID: ${user.id}`}</Typography>
                                <Typography variant="h6" style={{fontSize: 24, fontWeight: 500}} >{`${user.first_name} ${user.last_name}`}</Typography>
                            </>
                        }
                        secondary={user.email}

                    />
                    <ListItemAvatar >
                        <Avatar
                            alt={`${user.first_name} ${user.last_name}`}
                            src={user.avatar}
                            variant={"square"}
                            style={{minWidth: 103, minHeight: 84}}
                        />
                    </ListItemAvatar>
                </ListItem>
            </Paper>
    );
};

export default SingleUser;