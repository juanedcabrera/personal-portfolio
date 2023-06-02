import React from 'react';
import styles from './page.module.css'

const ProjectBlock = ({ title, description, image }) => {
   const index = 0
  return (
    <div className={`${styles.projectBlock}${index}`}>
      <h3 className={`${styles.projectTitle}`}>{title}</h3>
      <p className={`${styles.projectDescription}`}>{description}</p>
      <img className={`${styles.projectImage}`} src={image} alt={title} />
    </div>
  );
};

export default ProjectBlock;
