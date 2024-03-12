import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import News from './components/news.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <News />
  </React.StrictMode>,
)
