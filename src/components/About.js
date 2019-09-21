import React from "react";
import mypic from "./images/mypic.jpg";
import tehc from "./images/teh.svg";
import ckt from "./images/charkuayteow.svg";
import wushu from "./images/wushu.svg";
import dance from "./images/dancer.svg";

 
const About = props=>(
  
    <div className = "aboutcontainer">
        <img src = {mypic} className = "myphoto" alt = "about me" />
        <p className = "paragraphme">
            Hi! My name is Lu Khei. You will never find a second Lu Khei in Singapore. I am a true blue Singaporean who likes my char kuay teow sweet <img src = {ckt} className = "charkuayteow" alt = "ckt" />  and my teh c bing siu dai <img src = {tehc} className = "tehc" alt = "tehc" />. 
            I believe in going with your heart and not think too much about the hard. I danced<img src = {dance} className = "dance" alt = "dance" /> and practice Wushu <img src = {wushu} className = "wushu" alt = "wushu" />when I was in school but now have moved on to music as my body gets stiffer by day. I am a research coordinator by day, toilet singer by night and tutor on weekends. These days I plucked up courage to perform live at openmic events. 90% of my instagram feed are about Shiba Inu and my favourite shiba is @shibainu.berry. Please check out that cutie. 
            <br/><br/>
            I started coding after attending a free UX intro course which got me interested in this field. I self learned HTML, CSS and javascript skills through the Youtube community. However, I am still a noob. I am an ISTP whoes characteristics are a builder. I think that is why I find joy in coding as I get to build a website/app from scratch.  
        </p>
        
        
    </div> 
 );
 export default About; 