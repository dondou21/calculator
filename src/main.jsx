import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Display from '../components/Display.jsx'
import Button from '../components/Button.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
