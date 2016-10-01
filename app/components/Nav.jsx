import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created By <a href="http://github.com/JPRoland" target="_blank">Joe Roland</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
