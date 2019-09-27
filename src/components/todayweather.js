import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import WindDirection from "./images/041-wind sign.svg";
import Wind from "./images/017-wind.svg";
import Humidity from "./images/007-drops.svg";
import Temperature from "./images/023-thermometer.svg";
import mapImage from "./MapImages";

const Today = props => {
  const f = props.selectedForecast;
  return (
    f &&
    <div className="today-container">
      <MDBTable>
        <MDBTableBody>
          <tr className="row1">
            <td className="row1-col1">{f.forecast && <p><img src={mapImage(f.forecast)} className="mainicon" /></p>} </td>
            <td colspan="2" className="row1-col2">{f.date && <p className="tdyboldtxt"> {f.date}</p>}{f.forecast && <p>{f.forecast}</p>}</td>
          </tr>
          <tr className="row2">
            <td className="row2-col1"><img src={Temperature} alt="temperature" /></td>
            <td className="row2-col2">{f.temperature.high && <p> Highest: <span className="tdyboldtxt">{f.temperature.high}°</span></p>}</td>
            <td className="row2-col3">{f.temperature.low && <p> Lowest:<span className="tdyboldtxt"> {f.temperature.low}°</span></p>}</td>
          </tr>
          <tr className="row3">
            <td className="row3-col1" ><img src={Humidity} alt="humidity" /></td>
            <td>{f.relative_humidity.high && <p className="tdytitle"> Highest: <span className="tdyboldtxt">{f.relative_humidity.high} %</span></p>}</td>
            <td>{f.relative_humidity.low && <p className="tdytitle"> Lowest: <span className="tdyboldtxt">{f.relative_humidity.low} %</span> </p>}</td>
          </tr>
          <tr className="row4">
            <td colspan="2">{f.wind.speed.high && <p className="tdywindspd"> <img src={Wind} alt="wind speed" /> <span className="tdyboldtxt">{f.wind.speed.high} km/h </span> </p>}</td>
            <td>{f.wind.direction && <p className="tdywinddirec"> <img src={WindDirection} alt="wind direction" /> <span className="tdyboldtxt">{f.wind.direction}</span></p>}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>

  );
}


export default Today;
