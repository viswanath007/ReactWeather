var React     = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather      = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});

    // debugger;

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errMsg){
      that.setState({
        isLoading: false
      });
      alert(errMsg);
    });
  },
  render: function(){
    var {isLoading, location, temp} = this.state;
    function renderMsg(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>;
      } else if(location && temp) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1>Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMsg()}
      </div>
      );
  }
});

module.exports  = Weather;