import React from "react";
import searchbtn from "./images/search-button.svg";



/**
class Form extends React.Component{
    render () {
     return (
         <form onSubmit={this.props.getWeather}>
             <input type="text" name="city" placeholder="City..."/>
             <input type="text" name="country" placeholder="Country..."/>
             <button>Get Weather</button>
         </form>
     );
     }
};

export default Form;  */

/** no state so use stateless format below */

const Form= props => (
    <form onSubmit={props.getWeather}>
             <input type="text" name="date" placeholder="         YYYY/MM/DD" className="textbox"/>
             <input type= "image" src = {searchbtn} className= "searchbtn" alt="get weather by date"/>
             </form>
);

export default Form;