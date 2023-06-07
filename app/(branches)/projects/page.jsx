import Header from '../../../components/Header/page.jsx';
import NavHorizontal from 'components/NavHorizontal/page';
import React from 'react';
import fs from 'fs';

const getProjectMetaData = () => {
  const folder = './public/uploads/projects';
  const files = fs.readdirSync(folder);
  const projects = files.map((file) => {
    const fileContent = fs.readFileSync(`${folder}/${file}`, 'utf8');
    const lines = fileContent.split('\n');
    const title = lines[0].replace('Title: ', '');
    const date = lines[1].replace('Date: ', '');
    const description = lines[2].replace('Description: ', '');
    const image = lines[3].replace('Image: ', '');
    const link = lines[4].replace('Link: ', '');
    const github = lines[5].replace('Github: ', '');
    const tech = lines[6].replace('Tech: ', '');
    const slug = file.replace('.md', '');
    return {
      title,
      date,
      description,
      image,
      link,
      github,
      tech,
      slug,
    };
  });
  return projects;
};
      

const Projects = () => {
  const projects = getProjectMetaData();
  return (
    <section>
      <Header />
      <NavHorizontal />
      <div className="projects">
        {projects.map((project) => (
          <div key={project.slug} className="project">
            <h1>{project.title}</h1>
            <p>{project.date}</p>
            <p>{project.description}</p>
            <div>
            <img src={project.image} alt={project.title} />
            </div>
            <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
            </div>
            <div>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {project.github}
            </a>
            </div>
            <p>{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;