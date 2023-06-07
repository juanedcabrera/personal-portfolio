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
      <div className="flex flex-wrap m-4">
        {projects.map((project) => (
          <div key={project.slug} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full rounded" src={project.image} alt={project.title} />
            <div className="px-7 py-4">
              <div className="font-bold text-xl px-20 mb-2">{project.title}</div>
              <p className="text-gray-400 text-base">{project.description}</p>
            </div>
            <div className="px-7 pt-4 pb-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                Project Link
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
