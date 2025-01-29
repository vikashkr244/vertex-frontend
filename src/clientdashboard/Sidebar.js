// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../clientdashboardcss/Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <NavLink to="/account-settings" activeClassName="active">Account Settings</NavLink>
    <NavLink to="/" activeClassName="active">Logout</NavLink>
  </div>
);

export default Sidebar;
