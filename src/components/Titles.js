import React from "react";
import { Link } from 'react-router-dom';
import Ham from "./images/ham.svg";


const Titles = () =>
    <div>
        <header>
            <nav>
                <ul>
                    <li className="navbtn"><Link to="/about">About me</Link></li>
                    <li className="title"><Link to="/">Weather Finder</Link></li>
                    <li className="navbtn"><Link to="/contact">Contact me </Link></li>
                    <li className="menubtn"><Link to="#"><img src = {Ham} alt = "togglemenu" class ="menu-hide menu-show"/> </Link></li>
                  

                </ul>
            </nav>
        </header>
    </div>



export default Titles;





