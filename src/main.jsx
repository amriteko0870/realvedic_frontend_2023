import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import ScrollToTop from './helpers/scrollToTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
)
