import React from "react";
import searchbtn from "./images/search-button.svg";


const Form = props =>
    <form onSubmit={props.getWeather} className="form1">
        <input type="text" name="date" placeholder="         YYYY-MM-DD" className="textbox" />
        <input type="image" src={searchbtn} className="searchbtn" alt="get weather by date" />
    </form>




export default Form;