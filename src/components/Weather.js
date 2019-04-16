import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.temperature && (
      <h1 className="weather__key display-3">{props.temperature}&#176;F</h1>
    )}
    {props.city && props.country && (
      <h3 className="weather__key">
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}
        </span>
      </h3>
    )}
    {props.humidity && (
      <h3 className="weather__key">
        Humidity:
        <span className="weather__value"> {props.humidity}%</span>
      </h3>
    )}
    {props.description && (
      <h3 className="weather__key">
        Condition:<span className="weather__value"> {props.description}</span>
      </h3>
    )}
    {props.error && (
      <div className="error-container">
        <i className="fas fa-exclamation-circle" />
        <h4 className="weather__error">{props.error}</h4>
      </div>
    )}
  </div>
);

export default Weather;
