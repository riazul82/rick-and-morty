import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// fonts
import './assets/fonts/TTTravels-Thin.ttf';
import './assets/fonts/TTTravels-ExtraLight.ttf';
import './assets/fonts/TTTravels-Light.ttf';
import './assets/fonts/TTTravels-Regular.ttf';
import './assets/fonts/TTTravels-Medium.ttf';
import './assets/fonts/TTTravels-DemiBold.ttf';
import './assets/fonts/TTTravels-Bold.ttf';
import './assets/fonts/TTTravels-ExtraBold.ttf';
import './assets/fonts/TTTravels-ExtraBoldItalic.ttf';
import './assets/fonts/TTTravels-Black.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);