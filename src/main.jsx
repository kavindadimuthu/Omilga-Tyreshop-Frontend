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

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/categories" element={<Categorypage />} />
      <Route path="/about" element={<Aboutuspage />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/singleproduct/:id" element={<Singleproductpage />} />
      <Route path="/admin" element={<AddTyre />} />
      <Route path="/deleteTyre" element={<DeleteTyre />} />
      <Route path="/editTyre" element={<EditTyre />} />
      <Route path="/editSingleProduct/:id" element={<EditSingleProduct />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
