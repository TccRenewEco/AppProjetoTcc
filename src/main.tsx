import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import './Styles/index.css'
import { RotaMestre } from './routes.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
     <RotaMestre/>
    </ChakraProvider>
  </React.StrictMode>,
)
