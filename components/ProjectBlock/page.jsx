import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const ProjectBlock = ({ title, description, image, link }) => {
  const index = 0;
  return (
    <div className={`${styles.projectBlock}${index}`}>
      <a href={link} target="_blank" rel="noopener">
      <h3 className={`${styles.projectTitle}`}>{title}</h3>
      <p className={`${styles.projectDescription}`}>{description}</p>
      <div className={`${styles.projectImage}`}>
        <Image src={image} alt={title} width={300} height={200} />
      </div>
      </a>
    </div>
  );
};

export default ProjectBlock;
