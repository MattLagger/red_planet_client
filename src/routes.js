import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Services
import Auth from './services/auth';

// Pages
import Login from './pages/login';
import Home from './pages/home';
import AppBar from './components/appBar';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated() ? (
        <>
        {Auth.isAuthenticated() ? (<AppBar />) : null}
          <Component {...props} />
        </>
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
      <PrivateRoute path="/home" component={Home} />
      <Route path="*" component={() => <h1>404 Página não Encontrada</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;