import React from 'react';
import styles from './page.module.css';

const NavBlock = () => {
  return (
    <footer>
      <div className={`${styles.navBlock}`}>
        <a href="/blog" className={`${styles.navLink1}`}>Blog</a>
        <a href="/readlist" className={`${styles.navLink2}`}>Readlist</a>
        <a href="/projects" className={`${styles.navLink3}`}>Projects</a>
      </div>
    </footer>
  );
};

export default NavBlock;
