import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
    <div className="float-right d-none d-sm-block">
      <b>Secure</b> Login...
    </div>
    <strong>Copyright &copy; 2019-2020 <a href="http://adminlte.io">Admin Panel</a>.</strong> All rights
    reserved.
  </footer>
    )
  }
}

export default Footer