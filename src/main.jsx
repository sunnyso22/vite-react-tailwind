import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TailwindApp from "./TailwindApp"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TailwindApp />
  </StrictMode>,
)
