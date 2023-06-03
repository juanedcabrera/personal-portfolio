'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Introduction = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
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
          onClick={handleModalOpen}
        >
          dad
        </em>{' '}
        of 2, transitioned from being an{' '}
        <em className={styles.italicized}>award-winning </em>Senior Talent
        Acquisition Partner to embark on a new path as a{' '}
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
        15 hours a day to complete his General Assembly Software Engineering
        Immersive bootcamp in 3 months. Check out his work.
      </h1>

      {showModal && (
        <div className={styles.modal} onClick={handleModalClose}>
          <Image
            src="/../public/uploads/dad.jpeg"
            alt="Dad"
            height="250"
            width="500"
          />
        </div>
      )}
    </section>
  );
};

export default Introduction;
