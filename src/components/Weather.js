import React from "react";

  const Weather= props=>(
  
     <div className ="allweathercontainer"><ul className = "allforecastdisplay">
          <li>{props.datedisplay && props.forecast && <p> {props.datedisplay} . {props.forecast}</p>}</li>
           <li>{props.hitemperature && props.lotemperature && <p> {props.hitemperature} / {props.lotemperature}</p>}</li>
            <li> {props.error && <p>{props.error}</p>} </li>
           </ul></div> 
  );
  export default Weather; 
 

/**with state */

/** class Weather extends React.Component{
    render(){
        return (
           <div>
           {this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
           {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
            {this.props.humidity &&  <p>Humidity: {this.props.humidity}</p>}
           {this.props.description && <p>Conditions: {this.props.description}</p>}
           {this.props.error && <p>{this.props.error}</p>}
           </div> 
        ) ;
       }
};

export default Weather;  */
/**for stateless */


 /** const Weather= (props)=>{
  return(
     <div>
           {props.city && props.country && <p>Location: {props.city},{props.country}</p>}
           {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity &&  <p>Humidity: {props.humidity}</p>}
           {props.description && <p>Conditions: {props.description}</p>}
           {props.error && <p>{props.error}</p>}
           </div> 
  );
}
export default Weather;  */


 
