import React from 'react';
import styles from '../NavBar/NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <section className={styles.navBarPosition}>
        <section className={styles.icon}>
        <Link to='/'>
          <span className='fa fa-tasks'/> 
          </Link>
        </section>
          <div className={styles.rightLinks}>
            <ul>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
            </ul>
          </div>
      </section>  
    </div>
  );
}

export default NavBar;
