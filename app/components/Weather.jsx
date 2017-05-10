var React     = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal     = require('ErrorModal');

var Weather      = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    // debugger;

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function(){
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
            <ErrorModal message={errorMessage}/>
          );
      }
    }

    function renderMsg(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if(location && temp) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 SclassName="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMsg()}
        {renderError()}
      </div>
      );
  }
});

module.exports  = Weather;