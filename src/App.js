import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";


class App extends React.Component {
    state = {
        forecasts: [],
        error: undefined
    }
    async componentDidMount() {
        var now = new Date();
        var day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
        var month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
        var year = now.getFullYear();
        var date = year + '-' + month + '-' + day;
        const api_call = await fetch(`https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date_time=${date}T00:00:00`);
        const data = await api_call.json();
        this.setState({
            forecasts: data.items[0].forecasts,
            error: undefined
        });
    }
    getWeather = async (e) => {
        e.preventDefault();
        const date = e.target.elements.date.value;
        //const country = e.target.elements.country.value;

        if (date) {
            const api_call = await fetch(`https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date_time=${date}T00:00:00`);
            const data = await api_call.json();
            console.log(data);
            this.setState({
                forecasts_day1: data.items[0].forecasts[0],
                forecasts: data.items[0].forecasts,
                error: undefined
            });
        } else {
            this.setState({
                error: "Please enter the value"
            });
        }
    }
    render() {
        const Weathers = this.state.forecasts.map((f) =>
            <Weather
                datedisplay={f.date}
                hitemperature={f.temperature.high}
                lotemperature={f.temperature.low}
                forecast={f.forecast}
                hihumidity={f.relative_humidity.high}
                lohumidity={f.relative_humidity.low}
                windspeed={f.wind.speed.high}
                winddirection={f.wind.direction}
                error={f.error}
            />
        );

        return (
            <BrowserRouter>
                <div>
                    <Titles />

                    <Route exact path="/" render={() =>
                        <div>
                            <div className="weathercontainer">
                                {Weathers}
                            </div>
                            <div>
                                <Form getWeather={this.getWeather} />
                                {this.state.error && <p>{this.state.error}</p>}
                            </div>
                        </div>
                    }/>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </BrowserRouter>
        );
    }
};


export default App;