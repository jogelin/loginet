import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/AppBar';
import Main from './components/Main';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppBar />
      <Main />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
