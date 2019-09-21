import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Weather = props => {
   const weatherRows = props.forecasts.map(f =>
      <tr className="allforecastdisplay">
         <td className = "col1">Image</td>
         <td className = "col2">{f.date && <p> {f.date}</p>}</td>
         <td className = "col3">{f.forecast && <p>{f.forecast}</p>}</td>
         <td className = "col4">{f.temperature.high && f.temperature.low && <p> {f.temperature.high} / {f.temperature.low}</p>}</td>
      </tr>
   );
   return (
      <MDBTable>
         <MDBTableBody>
            {weatherRows}
         </MDBTableBody>
      </MDBTable>
   );
}
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



