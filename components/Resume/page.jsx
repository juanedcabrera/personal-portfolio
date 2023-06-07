'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import ReactPlayer from 'react-player';

const Resume = () => {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isClient && (
        <section className={styles.resumeBlock}>
          <ReactPlayer
            className="react-player"
            url="/uploads/resume-video.mp4"
            width="100%"
            height="30em"
            padding="px"
            controls={true}
          />
          <div>
            {windowWidth >= 768 && (
              <div className={styles.resumeDocument}>
                <iframe
                  title="Resume"
                  src="/uploads/web-resume.pdf"
                  className={styles.resumeIframe}
                />
                <a
                  href="/uploads/resume.pdf"
                  className={styles.resumeDownload}
                  download
                >
                  Download Resume Here
                </a>
              </div>
            )}
            {windowWidth < 768 && (
              <div className={styles.resumeDownloadContainer}>
                <a
                  href="/uploads/resume.pdf"
                  className={styles.resumeDownload}
                  download
                >
                  Download Resume Here
                </a>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Resume;
