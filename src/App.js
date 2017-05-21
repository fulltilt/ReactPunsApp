import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PunComponent from './PunComponent';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <PunComponent />
  </MuiThemeProvider>
);

export default App;
