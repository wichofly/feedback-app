import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'
import App from './App'

const root = ReactDom.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/*
  - To run de project:
    - Open one terminal and run "npm start"
    - Open second terminal and run "npm server"
*/