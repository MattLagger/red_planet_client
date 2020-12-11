import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Services
import {isAuthenticated} from './services/auth';

// Pages
import Login from './pages/login';
import Main from './pages/main';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/main" component={Main} />
      <Route path="*" component={() => <h1>404 Página não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;