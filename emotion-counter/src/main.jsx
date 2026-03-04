import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Emotion from './emotion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Emotion />
  </StrictMode>,
)
