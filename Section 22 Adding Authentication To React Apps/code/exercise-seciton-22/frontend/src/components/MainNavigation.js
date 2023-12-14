import { NavLink, Form } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';
import {getAuthToken} from '../util/auth';
import {AuthContext} from '../store/auth-context';



function MainNavigation() {
  const token = getAuthToken();
  const auth = useContext(AuthContext)
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Authentication
            </NavLink>
          </li>
          {token &&
          <li>
          <Form action="/logout" method="POST">
              <button>Logout</button>
          </Form>
          </li>
          }
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
