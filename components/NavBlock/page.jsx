import React from 'react';
import styles from './page.module.css';

const NavBlock = () => {
  return (
    <footer>
      <div className={`${styles.navBlock}`}>
        <a href="/blog" className={`${styles.navLink}`}>Blog</a>
        <a href="/readlist" className={`${styles.navLink}`}>Readlist</a>
        <a href="/projects" className={`${styles.navLink}`}>Projects</a>
      </div>
    </footer>
  );
};

export default NavBlock;
