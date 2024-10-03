import React from "react";
import ProjectSection from "./ProjectSection";
import projectImage1 from '../assests/proImg1.png'

const MyProjects = () => {

  const projects = [
    {
      image: projectImage1,
      title: 'Crypto Screener Application',
      des: 'I am Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to create a specimen book.',
      index: '01',
    },
    {
      image: projectImage1,
      title: 'Euphoria - Ecommerce (Apparels) Website Template',
      des: 'I am Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to create a specimen book.',
      index: '02', 
    },
    {
      image: projectImage1,
      title: 'Blog Website Template',
      des: 'Im Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.',
      index: '03', 
    },
  ];

  return (
    <div className="w-full font-sora">
      <h1 className="text-[38px] text-center pt-2">
        <span className="opacity-90">My </span><span className="font-extrabold">Projects</span>
      </h1>

     <div className="mt-10 mb-10">
      {
        projects.map( (project, index) => (
          <ProjectSection 
            key={index}
            image={project.image}
            title={project.title}
            des={project.des}
            index={project.index}
            reverse={index % 2 === 1}
          />
        ))
      }  
     </div>

    </div>
  );
};

export default MyProjects;
