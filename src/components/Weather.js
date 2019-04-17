import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.temperature && (
      <div className="row">
        <div className="col-12">
          <h1 className="weather__key temp display-3">
            {props.temperature}&#176;F
          </h1>
        </div>
      </div>
    )}

    {props.temperature_max && props.temperature_min && (
      <div className="row">
        <div className="col-12">
          <h4 className="weather__key">
            Min:{" "}
            <span className="weather__value">
              {" "}
              {props.temperature_min}&#176;F{" "}
            </span>{" "}
            / Max:{" "}
            <span className="weather__value">
              {props.temperature_max}&#176;F
            </span>
          </h4>
        </div>
      </div>
    )}

    {props.city && props.country && (
      <h4 className="weather__key">
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}
        </span>
      </h4>
    )}
    {props.humidity && (
      <h4 className="weather__key">
        Humidity:
        <span className="weather__value"> {props.humidity}%</span>
      </h4>
    )}
    {props.description && (
      <h4 className="weather__key">
        Condition:<span className="weather__value"> {props.description}</span>
      </h4>
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
