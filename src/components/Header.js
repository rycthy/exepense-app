import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Fix The Bank</h1>
    <h3>Keep track of your expenses</h3>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard!</NavLink> |
    <NavLink to="/create" activeClassName="is-active">Add Expense Page!</NavLink> |
  </header>
);

export default Header;