import React from "react";
import {Link} from 'react-router-dom';


const Titles = ()=> (
    <div>
        <header>
               <nav>
            <ul>
            <li className="navbtn"><Link to = "/about">About me</Link></li>
            <li className="title"><Link to = "/">Weather Finder</Link></li>    
            <li className="navbtn"><Link to = "/contact">Contact me </Link></li>
            </ul>
        </nav>
        </header>
        
    </div>
);

export default Titles;

/**class Titles extends React.Component{
    render() {
        return(
        <div>
            <h1>Weather Finder</h1>
            <p>Find out temperature, conditions and more...</p>
        </div>
        );
    }
} ;
export default Titles;*/

/** no states so use the stateless form like below */



