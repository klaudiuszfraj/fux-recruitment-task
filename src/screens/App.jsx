import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Users from './users';
import TopBar from './_shared/TopBar';
import UserPage from "./users/UserPage";
import Footer from "./_shared/Footer";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    minHeight: '100vh'
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
        <Route path={'/user/:id'} exact component={UserPage}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
  )
};

export default App;
