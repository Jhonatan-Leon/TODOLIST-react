import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterPovider } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterPovider>
      <App />
    </CounterPovider>
  </StrictMode>,
)
