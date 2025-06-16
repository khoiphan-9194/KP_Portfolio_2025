import React from 'react';
import CardUI from '../UI/CardUI';

export default function Resume() {


  const Skill_Array = [
    {
      id: 1,
      skillName: 'Front-End',
      arraySkill: ["Html5", "CSS", "JavaScript", "APIs", "Bootstrap", "GIT"]

    },
    {
      id: 2,
      skillName: 'Technologies',
      arraySkill: ["NPM Packages", "Insomnia", "Heroku", "jQuery", "Handlebars"]

    },
    {
      id: 3,
      skillName: 'Back-End',
      arraySkill: ["Node.Js", "Jest", "Express.js", "MySQL", "Sequelize", "Object-Relational Mapping(ORM)", "Model-View-Controller (MVC)"]

    },

    {
      id: 4,
      skillName: 'Performance Tech',
      arraySkill: ["NoSQL", "Progressive Web Applications (PWA)", "MongoDB", "Mongoose", "GraphQL", "React", "MERN", "State"]

    }
  ];


  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("./public/resume.pdf")
    .then(async (response) => {
      if(!response.ok){
        alert("Network response was not ok");
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      // Creating new object of PDF file
      console.log(blob);
      //Blob {size: 463295, type: 'application/pdf'}
      //blob object will display the size and type of the file
      // for example, if we have a PDF file named "KhoiPhan-resume.pdf" then it will display the size and type of the file
      // and the data will be displayed as "Blob {size: 463295, type: 'application/pdf'}"
      // size of the file is 463295 means 463295 bytes and type of the file is 'application/pdf'
      const fileURL = window.URL.createObjectURL(blob);
      // window.URL.createObjectURL(blob) method will create a URL for the object of the file
      // alert(fileURL);
      //blob:http://localhost:3001/c86da624-9b90-4ced-bd82-8cdff43dbf2b means the data is displayed in binary format
      //
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "KhoiPhan-resume.pdf";
      alink.click(); // This will download the PDF file in the browser window
     
    });
  };


  return (
    <div className="resume-container">


        <center className="resume-downLoad">
        <h1> My Resume </h1>
        <section className="solid-line"> </section>
        <button className="resume-downLoad-btn" onClick={onButtonClick}><i className="fa fa-download"></i>
        <pre>Download Resume</pre>
        </button>
      </center>

      <br />
      <br />
      <section className="resume-section-title">
        <h2>Skills</h2>
      </section>

     <CardUI cardArray={Skill_Array} />
    </div>
    
  );
}
