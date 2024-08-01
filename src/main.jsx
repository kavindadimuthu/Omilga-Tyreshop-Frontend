import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './input.css'

import Home from './Home.jsx'
import Productpage from './Pages/Productpage.jsx'
// import Filterpage from './Pages/Filterpage.jsx';
import Singleproductpage from './Pages/Singleproductpage.jsx'
import Categorypage from './Pages/Categorypage.jsx'
import Aboutuspage from './Pages/Aboutuspage.jsx'
import Contactpage from './Pages/Contactpage.jsx'
import Userpage from './Pages/Userpage.jsx';

import { createContext, useContext, useState } from 'react';


export const MyContext = createContext();
const SearchFilterContext = createContext();

const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('All products');

  return (
    <SearchFilterContext.Provider value={{ searchQuery, setSearchQuery, selectedOption, setSelectedOption }}>
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useSearchFilter = () => {
  return useContext(SearchFilterContext);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Productpage />,
  },
  // {
  //   path: "/filter",
  //   element: <Filterpage />,
  // },
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
  <AppProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AppProvider>
)

