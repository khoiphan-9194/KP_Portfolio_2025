
export default function PortfolioUI({ proJectDetail }) {

  const{projectName, description, image, githubRepo, deployedLink} = proJectDetail
  ;
  

  return (
    
    <div className="portfolio-card">
            <div className="portfolio-card-main-Text">
<<<<<<< HEAD
              <h5>
                {projectName}
              </h5>
=======
              <h6>
                {projectName}
              </h6>
>>>>>>> 966c0de32f2756c8134ae3e629f8ad25fb7d7f39
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
