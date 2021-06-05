import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Users from './users';
import TopBar from './_shared/TopBar';
import UserPage from "./users/UserPage";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
  <Router>
    <div className={classes.container}>
      <TopBar />
      <Switch>
        <Route path={'/'} exact component={Users}/>
        <Route path={'/new-user'} exact component={UserPage}/>
      </Switch>
    </div>
  </Router>
  )
};

export default App;
