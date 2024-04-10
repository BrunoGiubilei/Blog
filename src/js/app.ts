// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.js';

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
const divApp = document.getElementById('app');
if (!divApp) {
  throw new Error("Não foi possível encontrar o elemento com id 'app'");
}
const root = createRoot(divApp);
root.render(React.createElement(App));
