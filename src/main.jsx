import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* To run the app go to the mes-voyages-react folder and write "npm run dev" in the terminal or console */
/* To expose the website, add "npm run dev -- --host", the public address using your IP will show */