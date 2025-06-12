import { useState, useEffect } from "react";
import PortfolioUI from "../UI/PortfolioUI";

export default function Portfolio() {
  const portfolioArray = [
    {
      id: 1,
      projectName: "Weather Dashboard",
      description:
        "This application allows users to search for a city and view the current weather conditions as well as the 5-day forecast.",
      image: "./img/weather.webp",
      githubRepo: "https://github.com/khoiphan-9194/Weather-Dashboard-KP",
      deployedLink: "https://khoiphan-9194.github.io/Weather-Dashboard-KP/",
    },
    {
      id: 2,
      projectName: "Pop Quiz",
      description:
        "This application is a timed quiz with multiple-choice questions, and the user's score is based on the time remaining when the quiz is completed.",
      image: "./img/quiz.jpeg",
      githubRepo: "https://github.com/khoiphan-9194/pop_quiz_js",
      deployedLink: "https://khoiphan-9194.github.io/JS_KP_POP_QUIZ/",
    },
    {
      id: 3,
      projectName: "Word Guess Game",
      description:
        "This application is a word guess game where the user has to guess the word by typing in the correct letters.",
      image: "./img/guess-the-word.jpg",
      githubRepo: "https://github.com/khoiphan-9194/Word-Guess-Game",
      deployedLink: "https://khoiphan-9194.github.io/Word-Guess-Game/",
    },
    {
      id: 4,
      projectName: "Work Day Scheduler",
      description:
        "This application is a simple calendar application that allows the user to save events for each hour of the day.",
      image: "./img/workday-schedule.jpg",
      githubRepo: "https://github.com/khoiphan-9194/Work-Day-Scheduler",
      deployedLink: "https://khoiphan-9194.github.io/Work-Day-Scheduler/",
    },
    {
      id: 5,
      projectName: "EV Charging Station Finder",
      description:
        "This application allows users to search for EV charging stations in their area, and view the location on a map.",
      image: "./img/ev-charging-finder.jpg",
      githubRepo: "https://github.com/khoiphan-9194/charge-point",
      deployedLink: "https://khoiphan-9194.github.io/charge-point/",
    },
    {
      id: 6,
      projectName: "To-Do List",
      description:
        "This application is a simple to-do list that allows users to add, and delete tasks when completed.",
      image: "./img/ToDoList.webp",
      githubRepo: "https://github.com/khoiphan-9194/JS-Todo-List",
      deployedLink: "https://khoiphan-9194.github.io/JS-Todo-List/",
    },

    {
      id: 7,
      projectName: "Note Taker",
      description:
        "This application is a note-taking app that allows users to create, save, and delete notes.",
      image: "./img/note-taker.jpg",
      githubRepo: "https://github.com/khoiphan-9194/Express-NoteTaker",
      deployedLink: "https://express-notetaker-dlyc.onrender.com/",
    },

    {
      id: 8,
      projectName: "Text Editor",
      description: `Text Editor is a Progressive Web Application (PWA) that runs in the browser, offline and can be installed locally to your machine.
      It allows users to create, edit, and save text files.`,
      image: "./img/text-editor.jpg",
      githubRepo: "https://github.com/khoiphan-9194/PWA-Text-Editor",
      deployedLink: "https://pwa-text-editor-fqko.onrender.com/",
    },

    {
      id: 9,
      projectName: "Bucket List",
      description: `BucketList is the React application is designed to help users organize and prioritize their daily tasks or job responsibilities efficiently.
      The intuitive interface allows users to quickly add, edit, and remove jobs, while the priority system ensures that important tasks stand out visually.`,
      image: "./img/bucket-list.jpg",
      githubRepo: "https://github.com/khoiphan-9194/React-BucketList/",
      deployedLink: "https://react-bucketlist.onrender.com/",
    },
  ];
  return (
    <div className="portfolio-container">
      <section className="portfolio-section-title">
        <h2> Project Portfolio </h2>
      </section>

      <div className="portfolio-card-container">
        {portfolioArray.map((project) => (
          <PortfolioUI proJectDetail={project} key={project.id} />
        ))}
      </div>
      
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <a
          href="https://github.com/khoiphan-9194"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ color:"white", padding: "0.75rem 2rem", fontSize: "1rem", cursor: "pointer" }}>
            See more projects on my GitHub
          </button>
        </a>
      </div>
    </div>
  );
}
