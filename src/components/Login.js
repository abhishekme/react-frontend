import React from 'react';
// import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
// import { Face, Fingerprint } from '@material-ui/icons'
//import { Redirect } from 'react-router-dom'
import { Redirect } from 'react-router';
import Dashboard from './Dashboard'
import { useHistory } from "react-router-dom";
import {LOGIN_FORM_NAME} from '../constants'
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
    } from "@material-ui/core";

import {Auth} from './Main'
import axios from "axios";


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            errors: []
          };     
    }
    login = () =>{
        //console.log("Login....", this.props);
        //const history = useHistory();
        //Auth.signedIn = true;
       // localStorage.setItem('token', 'JWT#');
        //history.push("/dashboard");
        //window.location.reload();
        //return (<Redirect to="/dashboard" component={Dashboard}/>);
        //return <Dashboard />;

        const options = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8','Access-Control-Allow-Origin':'http://localhost:8085' }
        };
        const headers = {
          'Content-Type': 'application/json'
      };
  
        const loginURL = 'http://localhost:8085/login'
        const postData = {};
        postData['email'] = 'chaitali.das1991@gmail.com';
        postData['password'] = 'Abcd!234';
        console.log(postData, " :: ", loginURL);
        axios.post(loginURL, postData, {headers: headers})
          .then(response => {
            console.log(">>>Login Data: ", response);
            let respBody = response;
            if(respBody != undefined && typeof respBody == 'object' && respBody.data != undefined){
                let getData = respBody.data;
                if(getData.status){
                  console.log("@Login success....", getData.token, " -- ", getData.message);
                  if(getData.token != ''){
                    localStorage.setItem('token', getData.token);
                    window.location.reload();
                  }
                }
            }
          })
          .catch(error => {
            let getError = error.response;
            if(getError != undefined && typeof getError == 'object' && getError.data != undefined){
              let getData = getError.data;
              if(!getData.status){
                console.log("@Login Error....", getData.message);
              }
          }

            //console.log(">>>>Login Error:: ",getError)
          })
    }

    handleChange = (e) =>{
        this.setState({
            email: e.target.value
        })
      }

    render() {
        return (

    <div class="hold-transition login-page">
   
    <div class="login-box">
        <div class="login-logo">
            <a href="javascript:void(0)"><b>ADMIN</b>LOGIN</a>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
            <p class="login-box-msg">Secure Login</p>
      {/* <form> */}
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember"></input>
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <div class="col-4">
            <button type="submit" onClick={this.login} class="btn btn-primary btn-block">LOGIN</button>
          </div>
        </div>
      {/* </form> */}
      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
    </div>
  </div>
    </div>
    </div>  
        );
    }
}
export default Login;