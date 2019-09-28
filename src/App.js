import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Today from "./components/todayweather";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";


class App extends React.Component {
    state = {
        forecasts: [],
        selectedForecast: null,
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
            selectedForecast: data.items[0].forecasts[0],
            error: undefined
        });
    }
    getWeather = async (e) => {
        e.preventDefault();
        const date = e.target.elements.date.value;
       

        if (date) {
            const api_call = await fetch(`https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date_time=${date}T00:00:00`);
            const data = await api_call.json();
            console.log(data);
            if (data.items && data.items[0].forecasts) {
                this.setState({
                    forecasts: data.items[0].forecasts,
                    selectedForecast: data.items[0].forecasts[0],
            
                    error: undefined
                });
            } else {
                this.setState({
                    error: "Can't see the future nor the past"
                });
            }
        } else {
            this.setState({
                error: "Please enter the value"
            });
        }
    }
    render() {
        console.log(this.state);
        return (
            <BrowserRouter>
                <div>
                    <Titles />
                    <Route exact path="/" render={() =>
                        <div>
                            <div className="form1">
                                <Form getWeather={this.getWeather} />
                                {this.state.error && <p>{this.state.error}</p>}
                            </div>
                            <div>
                                <Today selectedForecast={this.state.selectedForecast}/>   
                            </div>
                            <div className="weathercontainer">
                                <Weather forecasts={this.state.forecasts} />
                            </div>

                        </div>
                    } />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </BrowserRouter>
        );
    }
};

export default App;