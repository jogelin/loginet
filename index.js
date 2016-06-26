import "./node_modules/picnic/picnic.min.css";
import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
import Service from './components/Service';
import Description from './components/Description';
import FootBar from './components/FootBar';


const App = () => (
  //<MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppBar />
      <Header />
      <Description />
      <Service />
      <FootBar />
    </div>
  //</MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
