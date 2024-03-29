import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { apiSlice } from "./api/apiSlice.js";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react/ApiProvider.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
      </ApiProvider>
    
  </React.StrictMode>,
)
