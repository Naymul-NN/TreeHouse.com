import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from './authprovider/AuthProvider.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
       <AuthProvider>
        <RouterProvider router={router} />
       </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
