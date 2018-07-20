import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ( { startLogout } ) => (
  <header>
    <h1>Fix The Bank</h1>
    <h3>Keep track of your expenses</h3>
    <NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink> |
    <NavLink to="/create" activeClassName="is-active">Log New Expense</NavLink> |
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);