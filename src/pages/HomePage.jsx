import { useState,useEffect } from "react";
import Projects from "./Projects";

export default function Home() {
  const introDuceArray = [
    {
      greeting: "Hello, WELCOME TO MY PAGE!",
      intro: "My name is Khoi Phan",
    },
    {
      greeting: "Hello, WELCOME TO MY PAGE!",
      intro: "I am a Full-Stack Developer.",
    },
    {
      greeting: "Hello, WELCOME TO MY PAGE!",  
      intro: "I am living in San Jose, California.",
    },
  ];

  const [introValue, setIntro] = useState(introDuceArray[0]);
  useEffect(() => {
    let currentIndex = 0;   
    const interval = setInterval(() => {
      setIntro(introDuceArray[currentIndex]);
      currentIndex++;
      if (currentIndex === introDuceArray.length) {
        currentIndex = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
// setInterval will run every 3 seconds, and it will change the introValue to the next value in the array


  },[]);// this is the dependency array, it tells the useEffect to run only once when the component is mounted 
  // if we don't include it, it will run every render and it will cause an infinite loop of changing the introValue every 3 seconds   

  return (
    <div className="home-container">
      <div class="home-flex-container">
        <div class="flex-child">
          <h1 className="home-intro">
            <span>
              <em>{introValue.greeting}</em>
              <br />
              <br />
              <em>{introValue.intro}</em>
            </span>
            <br />
          </h1>
        </div>

        <div class="flex-child">
          <img src="./img/profile_pic.jpg" alt="Khoi Phan" />
        </div>
      </div>

      <section className="intro-section-container" style={{ marginTop: "160px", color: "white" }}>
        <div className="intro-section-child" style={{ fontSize: "1.3em" }}>
          <h3>🎯 What I’m Looking For</h3>
          <p>
            I’m seeking an entry-level front-end or full-stack developer role
            where I can contribute to real-world projects, grow under
            mentorship, and be part of a collaborative, mission-driven team.
          </p>
        </div>
      </section>
      <br />

      <br />
   

      <Projects />
    </div>
  );
}
