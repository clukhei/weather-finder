import React from "react";

  const Weather= props=>(
  
     <div><ul className = "forecastdisplay">
          <li>
           {props.datedisplay && <p>Date: {props.datedisplay}</p>}
           {props.hitemperature && <p>Temperature (high): {props.hitemperature}</p>}
           {props.lotemperature && <p>Temperature (low): {props.lotemperature}</p>}
           {props.forecast && <p>Forecast: {props.forecast}</p>}
            {props.hihumidity &&  <p>Humidity (high): {props.hihumidity}</p>}
            {props.lohumidity &&  <p>Humidity (low): {props.lohumidity}</p>}
            {props.windspeed && <p>Wind speed: {props.windspeed}</p>}
           {props.winddirection && <p>Wind direction: {props.winddirection}</p>} 

           {props.error && <p>{props.error}</p>} </li>
           </ul></div> 
  );
  export default Weather; 
 