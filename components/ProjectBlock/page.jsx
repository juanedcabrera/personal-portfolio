import React from 'react';

const ProjectBlock = ({ title, description, image }) => {
  return (
    <div className="project-block">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ProjectBlock;
