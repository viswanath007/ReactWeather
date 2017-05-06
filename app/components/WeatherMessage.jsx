var React     = require('react');

var WeatherMessage      = ({location, temp}) => {
  return (
      <div>
        <h1>It's {temp} in the {location}</h1>
      </div>
      );
};

module.exports  = WeatherMessage;