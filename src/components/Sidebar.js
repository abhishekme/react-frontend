import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {


  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/dashboard">
      <img src="../../dist/img/AdminLTELogo.png"></img>
      &nbsp;&nbsp;<span className="brand-text font-weight-light">Site Admin</span>
      </Link>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"></img>
        </div>
        <div className="info">
        <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Management
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/profile">
                  <i className="far fa-circle nav-icon"></i>
                    <p>User </p>
                  </Link>
              </li>
              
            </ul>
          </li>
         
        </ul>
      </nav>
    </div>
  </aside>
    )
  }
}

export default Sidebar