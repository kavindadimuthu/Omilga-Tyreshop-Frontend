// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import ProductCatalog from "./pages/ProductCatalog";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import UserProfilePage from "./pages/UserProfilePage";
import { ProductList } from "./pages/Admin/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { TyreForm } from "./pages/Admin/AddProduct";
import ServicesPage from "./pages/Services";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProtectedRoute element={<UserProfilePage />} allowedRoles={["user", "admin"]} />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute element={<ProductList />} allowedRoles={["admin"]} />} />
          <Route path="/admin/add-product" element={<ProtectedRoute element={<TyreForm />} allowedRoles={["admin"]} />} />
          <Route path="/admin/edit-product/:id" element={<ProtectedRoute element={<TyreForm editMode={true} />} allowedRoles={["admin"]} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
