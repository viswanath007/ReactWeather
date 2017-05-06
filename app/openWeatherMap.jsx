var axios     = require('axios');

const OPEN_WEATHER_MAP_URL  = 'http://api.openweathermap.org/data/2.5/weather?appid=4207dce8507d799da6b96bf8ed08b848&units=metric';
//API key http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=4207dce8507d799da6b96bf8ed08b848

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL      = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}