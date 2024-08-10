import React from 'react'
import ReactDOM from 'react-dom/client'

import './Styles/index.css'
import { RotaMestre } from './routes.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RotaMestre/>
  </React.StrictMode>,
)
