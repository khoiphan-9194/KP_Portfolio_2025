import { useState,useEffect } from "react";
import PortfolioUI from "../UI/PortfolioUI";

export default function Portfolio() {

const portfolioArray = [
    { id: 1,
      projectName: "Weather Dashboard",
      description: "This application allows users to search for a city and view the current weather conditions as well as the 5-day forecast.",
      image: "./src/img/weather.webp",
      githubRepo: "https://github.com/khoiphan-9194/Weather-Dashboard-KP",
      deployedLink: "https://khoiphan-9194.github.io/Weather-Dashboard-KP/",
    },
    { id: 2,
      projectName: "Pop Quiz",
      description: "This application is a timed quiz with multiple-choice questions, and the user's score is based on the time remaining when the quiz is completed.",
      image: "./src/img/quiz.jpeg",
      githubRepo: "https://github.com/khoiphan-9194/pop_quiz_js",
      deployedLink: "https://khoiphan-9194.github.io/pop_quiz_js/",
    },
    { id: 3,
      projectName: "Word_Guess_Game",
      description: "This application is a word guess game where the user has to guess the word by typing in the correct letters.",
      image: "./src/img/guess-the-word.jpg",
      githubRepo: "https://github.com/khoiphan-9194/Word-Guess-Game",
      deployedLink: "https://khoiphan-9194.github.io/Word-Guess-Game/"
    },
    { id: 4,
      projectName: "Work Day Scheduler",
      description: "This application is a simple calendar application that allows the user to save events for each hour of the day.",
      image: "./src/img/workday-schedule.jpg",
      githubRepo: "https://github.com/khoiphan-9194/Work-Day-Scheduler",
      deployedLink: "https://khoiphan-9194.github.io/Work-Day-Scheduler/",
    },
    { id: 5,
      projectName: "EV Charging Station Finder",
      description: "This application allows users to search for EV charging stations in their area, and view the location on a map.",
      image: "./src/img/ev-charging-finder.jpg",
      githubRepo: "https://github.com/khoiphan-9194/charge-point",
      deployedLink: "https://khoiphan-9194.github.io/charge-point/",
    },
    { id: 6,  
      projectName: "To-Do List",
      description: "This application is a simple to-do list that allows users to add, and delete tasks when completed.",
      image: "./src/img/ToDoList.webp",
      githubRepo: "https://github.com/khoiphan-9194/JS-Todo-List",
      deployedLink: "https://khoiphan-9194.github.io/JS-Todo-List/"
    },
 
  ];
  return (
    <div className="portfolio-container">
     
     <section className="portfolio-section-title">
        <h2>Portfolio</h2>
     </section>

     <div className="portfolio-card-container">
    
      {portfolioArray.map((project) => (
        <PortfolioUI proJectDetail={project} key={project.id}/>
      ))}

    
      </div>

     



    </div>
    
  );
}
