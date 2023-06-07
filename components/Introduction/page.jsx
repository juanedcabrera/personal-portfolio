'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Introduction = () => {
  const [showDadModal, setShowDadModal] = useState(false);
  const [showAwardModal, setShowAwardModal] = useState(false);

  const handleDadModalOpen = () => {
    setShowDadModal(true);
  };

  const handleDadModalClose = () => {
    setShowDadModal(false);
  };

  const handleAwardModalOpen = () => {
    setShowAwardModal(true);
  };

  const handleAwardModalClose = () => {
    setShowAwardModal(false);
  };

  return (
    <section className={`${styles.introduction}`}>
      <h1>
        <a
          href="https://www.linkedin.com/in/juanedcabrera"
          target="_blank"
          rel="noreferrer noopener"
        >
          <em className={`${styles.italicized} ${styles.underline}`}>
            Juan E. Cabrera
          </em>
        </a>
        , a resilient and determined{' '}
        <em
          className={`${styles.italicized} ${styles.hoverImage}`}
          onClick={handleDadModalOpen}
        >
          dad
        </em>{' '}
        of 2, transitioned from being an{' '}
        <em
          className={`${styles.italicized} ${styles.hoverImage}`}
          onClick={handleAwardModalOpen}
        >
          award-winning
        </em>{' '}
        Senior Talent Acquisition Partner to embark on a new path as a{' '}
        <a
          href="https://www.github.com/juanedcabrera"
          target="_blank"
          rel="noreferrer noopener"
        >
          <em className={`${styles.italicized} ${styles.underline}`}>
            Software Engineer
          </em>
        </a>
        . To kickstart his software engineering journey, he worked an average of
        15 hours a day (over 1200 hours total) to complete his{' '}
        <a
          href="https://generalassemb.ly/education/software-engineering-immersive"
          target="_blank"
          rel="noreferrer noopener"
        >
          <em className={`${styles.italicized} ${styles.underline}`}>
            General Assembly Software Engineering Immersive bootcamp
          </em>
        </a> in 3 months. Check out his work.
      </h1>

      {showDadModal && (
        <div className={styles.modal} onClick={handleDadModalClose}>
          <Image
            src="https://res.cloudinary.com/dcbu6vxdi/image/upload/f_auto,q_auto/v1/portfolio/parent-of-two"
            alt="Dad"
            height={250}
            width={500}
          />
        </div>
      )}

      {showAwardModal && (
        <div className={styles.modal} onClick={handleAwardModalClose}>
          <Image
            src="https://res.cloudinary.com/dcbu6vxdi/image/upload/f_auto,q_auto/v1/portfolio/juan-award"
            alt="Award"
            height={500}
            width={400}
          />
        </div>
      )}
    </section>
  );
};

export default Introduction;
