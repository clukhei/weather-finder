import React from "react";
import Insta from "./images/instagram.svg";
import Linkedin from "./images/linkedin.svg";
import Youtube from "./images/youtube.svg";
import Gmail from "./images/gmail.svg";


const Contact = props=>(
    
        <div className = "smcontainer">
            <h3>Contact me</h3>
        <ul className = "smul">
            <li><a target = "_blank" href = "https://www.instagram.com/lukhei_chong/"><img src = {Insta} className = "sm" alt = "IGacc" /></a></li>
            <li><a target = "_blank" href = "mailto:clukhei@gmail.com"><img src = {Gmail} className = "sm" alt = "clukhei@gmail.com" /></a></li>
            <li><a target = "_blank" href = "https://www.linkedin.com/in/lu-khei-chong-709544b6"><img src = {Linkedin} className = "sm" alt = "linkedin" /></a></li>
            <li><a target = "_blank" href = "https://www.youtube.com/channel/UCqEFTrIrxBCXtqQHNu2qwSA?view_as=subscriber"><img src = {Youtube} className = "sm" alt = "youtube" /></a></li>
        </ul>
        </div>
        
)
export default Contact; 
