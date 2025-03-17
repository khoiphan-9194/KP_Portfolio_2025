import Nav from './Nav';
import "../css-styles/component.css";
import { useState, useEffect } from 'react';
import { DateTime } from "./Date";

const ArrQuotes=[
    "It's not about ideas. It's about making ideas happen.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Practice will make you perfect. ",
    "The only way to do great work is to love what you do.",
    "Ideas are created by people who are curious.",
]



function Header() {
 
    const [quote, setQuote] = useState(ArrQuotes[0]);
    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(ArrQuotes[Math.floor(Math.random() * ArrQuotes.length)]);
        }, 8000);
        return () => clearInterval(interval);
    });




    return (
      <div className="header">
        <header className="main-header">

        <h1>Khoi Phan's Portfolio </h1>
        <DateTime />
        <Nav />
        
        </header> 
       
        <blockquote>
          <div class="small-quote">
          <h1>
            <span>
              <em>"{quote}" </em> 
              
            </span>
          </h1>
        </div>
 
          </blockquote>

        
        {/* <DateTime /> */}
        
      </div>

    );
}

export default Header;