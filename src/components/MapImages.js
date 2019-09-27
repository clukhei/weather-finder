import React from "react";
import HazeImg from "./images/038-fog.svg";
import ShowerImg from "./images/042-rain.svg";
import FairImg from "./images/033-sun.svg";
import ThunderImg from "./images/004-storm.svg";
import WindyImg from "./images/034-wind.svg";
import RainImg from "./images/002-rain.svg";
import WarmImg from "./images/022-sun.svg";

const mapImage = description => {
    if (description.toLowerCase().includes("haz")) {
       return HazeImg;
    } else if (description.toLowerCase().includes("afternoon showers")) {
       return ShowerImg;
    } else if (description.toLowerCase().includes("warm")) {
       return WarmImg;
    } else if (description.toLowerCase().includes("thunder")) {
       return ThunderImg;
    } else if (description.toLowerCase().includes("wind")) {
       return WindyImg;
    } else if (description.toLowerCase().includes("showers")) {
       return RainImg;
    } else if (description.toLowerCase().includes("fair")) {
       return FairImg;
    }
 }

 export default mapImage;