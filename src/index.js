import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'

import App from './App'
// import reportWebVitals from './reportWebVitals'

// import AuthProvider from './Components/Context/AuthContext'
import { HashRouter as Router } from 'react-router-dom'

import './index.css'
import './styles/common.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // AuthProvider
  <Router>
    <App />
  </Router>,
  // AuthProvider,
)

// reportWebVitals()
