import React from "react";

  const Today= props=>{
    
    const currentWeather = props.forecasts.map(f =>
        <div>
            {f.date && <p> {f.date}</p>}
            {f.forecast && <p>{f.forecast}</p>}
            {f.temperature.high && f.temperature.low && <p> {f.temperature.high} / {f.temperature.low}</p>}
            {f.temperature.high && <p>Temperature (high): {f.temperature.high}</p>}
            {f.temperature.low && <p>Temperature (low): {f.temperature.low}</p>}
            {f.relative_humidity.high && <p> Highest: {f.relative_humidity.high}</p>}
            {f.relative_humidity.low && <p> Lowest: {f.relative_humidity.low}</p>}
            {f.wind.speed.high && <p> Image {f.wind.speed.high}</p>}
            {f.wind.direction && <p> Image {f.wind.direction}</p>}
        </div>
        );
        return (
          <div>
            {currentWeather}
            </div>
        );
  
}
  export default Today; 
/*   <div><ul>
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
   </ul></div>  */