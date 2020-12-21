import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';

export const Auth = {
    // SET TO TRUE TO SIMULATE LOGGED IN
    signedIn: false
};
export const LessAuth = ({ children }) => {
    //if (Auth.signedIn) {
        console.log('auth call....', localStorage.getItem('token'));
    if(localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null && 
        localStorage.getItem('token') !== ''){
        return <Redirect to="/dashboard" component={Dashboard} />;
    }
    return children;
};
export const RequireAuth = ({ children }) => {
    //if (!Auth.signedIn) {
    // if(getToken() === ''){
    //   return <Redirect to={LOGIN_URL} />;
    // }
    //if (!Auth.signedIn) {
    if(localStorage.getItem('token') === undefined || localStorage.getItem('token') === null ||
    localStorage.getItem('token') === ''){
        return <Redirect to="/login" />;
    }
    return children;
};

class Main extends Component {
  render() {
    return (
      
      <div className="hold-transition sidebar-mini">
        <div className="wrapper">
        <RequireAuth>
          <Navbar />
          <Sidebar />
        </RequireAuth>
        <Switch>        
        <RequireAuth>        
          <Route path="/dashboard" component={withRouter(Dashboard)} />
          <Route path="/profile" component={UserProfile} />        
        </RequireAuth>        
        </Switch>
        <RequireAuth>
          <Footer />
        </RequireAuth>
        </div>
      </div>
    )
  }
}

export default Main