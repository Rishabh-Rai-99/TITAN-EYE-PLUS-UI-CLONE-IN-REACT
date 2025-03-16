import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, Route,RouterProvider } from "react-router";
import WomenSection from "./pages/WomenSection";
import KidsSection from "./pages/KidsSection";
import Home from './components/Home.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'women',
    element:<WomenSection />
  },
  {
    path:'kids',
    element:<KidsSection />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>  
      <App />
    </RouterProvider>
  </StrictMode>,
)
