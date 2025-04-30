
export default function ProjectUI(props) {

const {projectArray} = props;
  

  return (
    <div className="projects-card-container">
        {projectArray.map((project) => (
          <div key={project.id} className="projects-card">
            <ul>

              <li>
              <div className="projects-card-main-Text">
              <h5>
                {project.project_name}
              </h5>
            </div>

            <div className="projects-card-extra-Text">
              <p>
                {project.description}
              </p>
            </div>

            <div className="projects-card-extra-Text">
              <p>
                <strong>Technologies Used: </strong>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="projects-card-extra-Text">
                    {tech}
                    {/* Add a comma between technologies except for the last one */}
                    {/* {index < project.technologies.length - 1 ? ', ' : ''} 
                      means if the index is less than the length of the array - 1 then add a comma */}
                    {index < project.technologies.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
            <div className="projects-card-image">
              {project.image.map((img, index) => (
                <img key={index} src={img} alt="Project" />
              ))}
            </div>
          
            <br />
            <section className="solid-line"> </section>
            </li>

            </ul>
            
          </div>
        ))}
      </div>
  );


}
