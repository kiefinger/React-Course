import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css';

// outlook marks the place where to place children.

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
