import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

import classes from './rootlayout.module.css';

function Layout() {
  return (
    <>
      <header className={classes.header}>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
