import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeClassName="active">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" activeClassName="active">
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
