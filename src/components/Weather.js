import React from "react";
import { MDBTable, MDBTableBody } from 'mdbreact';
import { Link } from 'react-router-dom';
import mapImage from "./MapImages"

const Weather = props => {
   const weatherRows = props.forecasts
      .map(f =>
         <Link to = "#"><tr className="allforecastdisplay">
            <td className="col1"><img src={mapImage(f.forecast)} /></td>
            <td className="col2"><p>{f.date}</p></td>
            <td className="col3"><p>{f.forecast}</p></td>
            <td className="col4">{f.temperature.high && f.temperature.low && <p> {f.temperature.high}° / {f.temperature.low}°</p>}</td>
         </tr></Link>
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




