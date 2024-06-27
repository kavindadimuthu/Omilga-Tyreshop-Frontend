import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './input.css'

import Home from './Home.jsx'
import Productpage from './Pages/Productpage.jsx'
import Singleproductpage from './Pages/Singleproductpage.jsx'
import Categorypage from './Pages/Categorypage.jsx'
import Aboutuspage from './Pages/Aboutuspage.jsx'
import Contactpage from './Pages/Contactpage.jsx'
import Userpage from './Pages/Userpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Productpage />,
  },
  {
    path: "/categories",
    element: <Categorypage />,
  },
  {
    path: "/about",
    element: <Aboutuspage />,
  },
  {
    path: "/contact",
    element: <Contactpage />,
  },
  {
    path: "/user",
    element: <Userpage />,
  },
  {
    path: "/singleproduct/:id",
    element: <Singleproductpage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

