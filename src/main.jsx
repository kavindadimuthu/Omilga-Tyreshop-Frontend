import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './input.css';

import Home from './Home.jsx';
import Productpage from './Pages/Productpage.jsx';
import Singleproductpage from './Pages/Singleproductpage.jsx';
import Categorypage from './Pages/Categorypage.jsx';
import Aboutuspage from './Pages/Aboutuspage.jsx';
import Contactpage from './Pages/Contactpage.jsx';
import AddTyre from './Pages/Admin/AddTyre.jsx';
import DeleteTyre from './Pages/Admin/DeleteTyre.jsx';
import EditTyre from './Pages/Admin/EditTyre.jsx';
import Login from './Pages/LoginForm.jsx';


import { createContext, useContext, useState } from 'react';
import EditSingleProduct from './Pages/Admin/EditSingleProduct.jsx';

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
    path: "/singleproduct/:id",
    element: <Singleproductpage />,
  },
  {
    path: "/admin",
    element: <AddTyre />,
  },
  {
    path: "/deleteTyre",
    element: <DeleteTyre />,
  },
  {
    path: "/editTyre",
    element: <EditTyre />,
  },
  {
    path: "/editSingleProduct/:id",
    element: <EditSingleProduct />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
)

