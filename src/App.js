import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "7b72138de671b8f573016d578f9dd614";

class App extends React.Component {
  state = {
    temperature: undefined,
    temperature_min: undefined,
    temperature_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await api_call.json();

    console.log(data);

    if (data.cod === "404") {
      console.log("404 ERROR!");
      this.setState({
        temperature: undefined,
        temperature_min: undefined,
        temperature_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Sorry, city not found."
      });
    } else if (city && country) {
      this.setState({
        temperature: Math.trunc((data.main.temp*(9/5))+32),
        temperature_min: Math.trunc((data.main.temp_min*(9/5))+32),
        temperature_max: Math.trunc((data.main.temp_max*(9/5))+32),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container app-container">
            <div className="row">
              <div className="col-12 col-md-6 title-container">
                <Titles />
                <hr />
                <Form getWeather={this.getWeather} />
              </div>
              <div className="col-12 col-md-6 weather-container">
                <Weather
                  temperature={this.state.temperature}
                  temperature_min={this.state.temperature_min}
                  temperature_max={this.state.temperature_max}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
