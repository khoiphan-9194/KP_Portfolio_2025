
export default function PortfolioUI({ proJectDetail }) {

  const{projectName, description, image, githubRepo, deployedLink} = proJectDetail
  ;
  

  return (
    
    <div className="portfolio-card">
            <div className="portfolio-card-main-Text">
              <h5>
                {projectName}
              </h5>
            </div>

              <div className="portfolio-card-extra-Text">
                <p>
                 {description}
                </p>
              </div>
         
      <br />
      <img src={image} alt={projectName} />
      <br />
      <a href={githubRepo}>Github Repo</a>
      <br />
      <a href={deployedLink}>Deployed Link</a>
      <br />
    </div>
  );


}
