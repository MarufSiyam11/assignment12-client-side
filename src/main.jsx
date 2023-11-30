import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthPeovider from './providers/AuthProviders';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthPeovider>
 <div className='max-w-screen-xl mx-auto'>   
  <RouterProvider router={router} />
 </div>
 </AuthPeovider>
  </React.StrictMode>,
)
