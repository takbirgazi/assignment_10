import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routs from './routs/Routs.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={routs}/>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
