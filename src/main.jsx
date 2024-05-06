import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import '/node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './index.css'

import App from './App.jsx'

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App/>);