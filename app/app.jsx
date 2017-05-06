var React        = require('react'),
    ReactDOM     = require('react-dom');
// var Route        = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main         = require('Main');
var Weather         = require('Weather');
var About         = require('About');
var Examples         = require('Examples');


ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>
        </Route>
      </Router>,
      document.getElementById('app')
    );