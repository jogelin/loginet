import "./node_modules/picnic/picnic.min.css";
import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  //<MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppBar />
      <Header />
      <Main />
    </div>
  //</MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
