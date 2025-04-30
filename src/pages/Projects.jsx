import React from 'react';
import ProjectUI from '../UI/ProjectUI';

export default function Projects() {


  const Projects_Array = [
    {
      id: 1,
      project_name: 'Weather_Dashboard',
      description: 'This application allows users to search for a city and view the current weather conditions as well as the 5-day forecast.',
      image: ["./img/weather.webp","./img/ToDoList.webp","./img/note-taker.jpg"],
      technologies: ["Html5", "CSS", "JavaScript", "APIs", "Bootstrap", "GIT"]
    },

    {
      id: 2,
      project_name: 'Weather_Dashboard',
      description: 'This application allows users to search for a city and view the current weather conditions as well as the 5-day forecast.',
      image: ["./img/weather.webp","./img/wells.webp"],
      technologies: ["Html5", "CSS", "JavaScript", "APIs", "Bootstrap", "GIT"]
    },

    

  ];

  return (
    <div className="projects-container">


        <center className="projects-center">
        <br />
        <h2 style={{ color: 'white' }}> Featured Projects </h2>
        <section className="solid-line"> </section>
        <br />
      </center>
      <ProjectUI projectArray={Projects_Array} />
     
    </div>
    
  );
}
