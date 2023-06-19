import React from 'react';
import styles from '../NavBar/NavBar.module.scss';
// import Favorite from './components/Favorite/Favorite';
// import About from './components/About/About';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <section className={styles.navBarPosition}>
        <section className={styles.icon}>
          <span className='fa fa-tasks' /> 
        </section>
          <div className={styles.rightLinks}>
            <a href="/">Home</a>
            <a href="/favorite">Favorite</a>
            <a href="/about">About</a>
          </div>
      </section>  
    </div>
  );
}

export default NavBar;
