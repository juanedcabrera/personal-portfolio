import React from 'react';
import styles from './page.module.css'

const ProjectBlock = ({ title, description, image }) => {
  return (
    <div className={`${styles.projectBlock}`}>
      <h3 className={`${styles.projectTitle}`}>{title}</h3>
      <p className={`${styles.projectDescription}`}>{description}</p>
      <img className={`${styles.projectImage}`} src={image} alt={title} />
    </div>
  );
};

export default ProjectBlock;
