import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/common/Navbar.jsx';
import Blur1 from './components/common/Blur1.jsx';
import Blur2 from './components/common/Blur2.jsx';
import Header from './components/pages/Header.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Blur1 />
    <Navbar />
    <Blur2 />
    <Header />
  </React.StrictMode>,
)
