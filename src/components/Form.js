import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <div className="form-group">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control "
            name="city"
            placeholder="City"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="country"
            placeholder="Country"
          />
        </div>
      </div>
    </div>
    <button className="btn btn-primary btn-block">Get Weather</button>
  </form>
);

export default Form;
