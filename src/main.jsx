import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Body from './Body.jsx'





ReactDOM.createRoot(document.getElementById('tete')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('pied')).render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
)