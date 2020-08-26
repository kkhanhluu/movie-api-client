import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <header className={classes.header}>
        <Link to='/' className={classes.logo}>
          <img src={require('../../assets/tmdb.svg')} alt='tmdb logo' />
        </Link>
        <div className={classes.rightContainer}>
          <nav className={classes.nav}>
            <ul>
              <li className={classes.navItem}>Demos</li>
              <li className={classes.navItem}>Features</li>
              <li className={classes.navItem}>Contact</li>
            </ul>
          </nav>
          <Link to='/' className={classes.login}>
            Login
          </Link>
        </div>
      </header>

      <header className={classes.headerMobile}>
        <Link to='/' className={classes.logo}>
          Flugwege
        </Link>
        <label htmlFor='toggle-input' className={classes.toggleButton}>
          <ion-icon name='menu-outline'></ion-icon>
        </label>
        <input
          id='toggle-input'
          className={classes.toggleInput}
          type='checkbox'
          style={{ display: 'none' }}
        />

        <div className={classes.navDrawerBackground}>&nbsp;</div>
        <div id='navDrawer' className={classes.navDrawer}>
          <div className={classes.navDrawerInner}>
            <div className={classes.drawerTop}>
              <div className={classes.drawerTopLogo}>Flugwege</div>
              <label htmlFor='toggle-input' className={classes.closeButton}>
                <ion-icon name='close-outline'></ion-icon>
              </label>
            </div>

            <nav className={classes.drawerBody}>
              <ul className={classes.drawerItems}>
                <li className={classes.drawerItem}>
                  <Link className={classes.drawItemLink} to='/'>
                    Demos
                  </Link>
                </li>
                <li className={classes.drawerItem}>
                  <Link className={classes.drawItemLink} to='/'>
                    Features
                  </Link>
                </li>
                <li className={classes.drawerItem}>
                  <Link className={classes.drawItemLink} to='/'>
                    Kontakt
                  </Link>
                </li>
                <li className={classes.drawerItem}>
                  <Link className={classes.drawItemLink} to='/'>
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;