import React from 'react';
import styles from './page.module.css';

const Introduction = () => {
  return (
    <section className={`${styles.introduction}`}>
      <h1><em className={styles.italicized}>Juan Cabrera</em>, a resilient and determined <em className={styles.italicized}>dad</em> of 2, transitioned from being an <em className={styles.italicized}>award-winning Senior Talent Acquisition Partner</em> to embark on a new path as a Software Engineer. He harnessed his unwavering work ethic, dedicating over <em className={styles.italicized}>1200 hours in just 3 months, working an average of 15 hours a day,</em> to kickstart his software engineering journey. Check out the page to see more.</h1>
    </section>
  );
};

export default Introduction;
