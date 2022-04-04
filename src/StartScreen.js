import { NavLink } from "react-router-dom";

export default function StartScreen(){
    return(
        <div className="start__screen">
            <h1>Quizzical</h1>
            <h3>Some description if needed</h3>
            <NavLink to="/questions">
            <button className="btn_start">Start</button>
            </NavLink>
        </div>
    )
}