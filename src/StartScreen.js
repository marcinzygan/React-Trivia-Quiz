import { NavLink } from "react-router-dom";

export default function StartScreen(){
    return(
        <main>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blue__bloob">
            <path fill="#DEEBF8"  d="M24.9,-28.5C29.1,-20.6,27.3,-10.3,27.7,0.4C28.1,11.1,30.8,22.3,26.5,37.3C22.3,52.3,11.1,71.1,-5.1,76.2C-21.3,81.3,-42.7,72.7,-58.4,57.7C-74.1,42.7,-84.1,21.3,-82.3,1.8C-80.6,-17.8,-67,-35.6,-51.3,-43.4C-35.6,-51.2,-17.8,-49,-3.7,-45.3C10.3,-41.6,20.6,-36.3,24.9,-28.5Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="yellow__bloob">
            <path fill="#FFFAD1" d="M30.5,-22.9C44.4,-16.6,63.9,-8.3,68.5,4.6C73,17.5,62.7,34.9,48.8,48.8C34.9,62.7,17.5,73,-0.5,73.5C-18.4,73.9,-36.8,64.6,-44.8,50.7C-52.9,36.8,-50.6,18.4,-46.3,4.3C-42,-9.7,-35.6,-19.5,-27.5,-25.7C-19.5,-31.9,-9.7,-34.7,-0.7,-34C8.3,-33.3,16.6,-29.1,30.5,-22.9Z" transform="translate(100 100)" />
          </svg>  
        <div className="start__screen"> 
            <h1 className="start__h1">Quizzical</h1>
            <h3 className="start__h3">Test your knowledge from different topics.</h3>
            <NavLink to="/questions">
            <button className="btn">Start quiz</button>
            </NavLink>
        </div>
        </main>
    )
}