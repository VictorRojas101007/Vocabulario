import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { vocabularyLoader } from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Traduction from './routes/Traduction.jsx'
import Cards from './routes/Cards.jsx'
import Mean from './routes/Mean.jsx'
import Plural from './routes/Plural.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/traduction',
    element: <Traduction />,
    loader: vocabularyLoader, 
  },
  {
    path: '/cards',
    element: <Cards />,
  },
  {
    path: '/cards/mean',
    element: <Mean />,
    loader: vocabularyLoader,
  },
  {
    path: '/cards/plural',
    element: <Plural />,
    loader: vocabularyLoader,
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
