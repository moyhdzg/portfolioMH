import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import FullstackProfile from './components/FullstackProfile.jsx'
import PmProfile from './components/PmProfile.jsx'
import './components/styles.module.css'


document.body.style.backgroundColor = '#152238';
document.body.style.color = 'anitquewhite';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App /> 
  },
  {
    path:'/fullstack',
    element: <FullstackProfile/>
  },
  {
    path:'/pm',
    element: <PmProfile/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
