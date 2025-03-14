import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Route from './Router/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={Route}>

</RouterProvider>
  </StrictMode>,
)
