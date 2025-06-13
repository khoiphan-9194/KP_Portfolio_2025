import React from 'react';
import ProjectUI from '../UI/ProjectUI';

export default function Projects() {


  const Projects_Array = [
    {
      id: 1,
      project_name: 'Weather_Dashboard',
      description: 'This application allows users to search for a city and view the current weather conditions as well as the 5-day forecast.',
      image: ["./img/weather.webp","./img/weather1.jpg","./img/weather2.jpg"],
      technologies: ["Html5", "CSS", "JavaScript", "APIs", "Bootstrap", "GIT","Local Storage", "jQuery"],
      github_repo: "https://github.com/khoiphan-9194/Weather-Dashboard-KP",
    },

    {
      id: 2,
      project_name: 'MERN_Brewtip',
      description: `BrewTip is a comprehensive full-stack web application designed to bridge the gap between coffee enthusiasts and local coffeehouses. Users can discover independent coffee shops, browse detailed profiles, and explore a curated list of upcoming events hosted by their favorite venues. 
      Each coffeehouse owner is provided with an intuitive dashboard to manage their business profile, upload images, share stories, and promote special events or community gatherings`,
      image: ["./img/homepage.jpg","./img/coffeehouse1.jpg","./img/event1.jpg","./img/profile.jpg"],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "GraphQL", "Apollo", "JWT Authentication", "CSS","bcrypt","Axios"],
      github_repo: "https://github.com/khoiphan-9194/MERN_BREWTIP-KP",

    },

    {
      id: 3,
      project_name: 'Book_Search_Engine',
      description: `This project is a book search engine that allows users to search for books using the Google Books API. 
      It is built using React, Node.js, Express.js, and MongoDB. The application provides a user-friendly interface for searching and saving books.`,
      image: ["./img/opening-page.jpg","./img/logged-in1.jpg","./img/logged-in3.jpg","./img/sign-up.jpg"],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "GraphQL", "Apollo", "JWT Authentication", "CSS","bcrypt"],
      github_repo: "https://github.com/khoiphan-9194/MERN-BOOK-SEARCH"
    },
    
    {
      id: 4,
      project_name: 'E-Shop',
      description: `This project is an e-commerce application that allows users to browse and purchase products online. 
      It is built using React, Node.js, Express.js, and MongoDB. The application provides a user-friendly interface for browsing and purchasing products.
      Also, it has a user authentication system that allows users to sign up, log in, and manage their accounts.
      and implement Stripe payment gateway for secure transactions.`,
      image: ["./img/e-shop-home.jpg","./img/e-shop-signup.jpg","./img/e-shop-item.jpg"],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "CSS", "Stripe", "bcrypt","Axios"],
      github_repo: "https://github.com/khoiphan-9194/MERN_KP_E-SHOP"
    },
    {
      id: 5,
      project_name: 'Word_Guess_Game',
      description: `This project is a word guessing game that allows users to guess a word by entering letters. 
      It is built using Node.js, CSS, and JavaScript. The application provides a user-friendly interface for playing the game.
      The game randomly selects a word from a predefined list, and the user has to guess the word by entering letters within a time limit.`,
      image: ["./img/wgg1.jpg","./img/wgg2.jpg","./img/wgg3.jpg"],
      technologies: ["Node.js","CSS","JavaScript","localStorage"],
      github_repo: "https://github.com/khoiphan-9194/Word-Guess-Game"
    }     

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
