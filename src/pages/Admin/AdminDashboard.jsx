import React, { useState, useEffect } from "react";
import {
  Package,
  Plus,
  Search,
  Edit,
  Trash2,
  Image as ImageIcon,
  Save,
  AlertCircle,
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../components/shadcn/dialog";
import { Button } from "../../components/shadcn/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../components/shadcn/alert";
import useTyreProducts from "../../hooks/useTyreProducts";
import AdminLayout from "../../components/AdminLayout";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProductList = () => {
  // State management
  const [filters, setFilters] = useState({
    tyreBrand: "",
    query: "",
    priceRange: "",
    tyreWidth: "",
    rimSize: "",
    profile: "",
    inStock: "all"
  });
  
  const [deleteDialog, setDeleteDialog] = useState({ 
    open: false, 
    tyreId: null,
    tyreName: "" 
  });
  
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: ""
  });

  const { tyres, loading, error, refetch } = useTyreProducts(filters);
  const [localTyres, setLocalTyres] = useState([]);
  
  // Price range options
  const priceRanges = [
    { label: "All Prices", value: "" },
    { label: "Under $100", value: "0-100" },
    { label: "$100 - $200", value: "100-200" },
    { label: "$200 - $300", value: "200-300" },
    { label: "Over $300", value: "300+" }
  ];

  useEffect(() => {
    setLocalTyres(tyres);
  }, [tyres]);

  // Filter handlers
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      tyreBrand: "",
      query: "",
      priceRange: "",
      tyreWidth: "",
      rimSize: "",
      profile: "",
      inStock: "all"
    });
  };

  // Delete handling
  const confirmDelete = (tyre) => {
    setDeleteDialog({
      open: true,
      tyreId: tyre._id,
      tyreName: `${tyre.tyreBrand} ${tyre.tyreWidth}/${tyre.rimSize}-${tyre.profile}`
    });
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tyre/removeTyre/${deleteDialog.tyreId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete tyre');
      }

      // Update local state and show success notification
      setLocalTyres((prev) => prev.filter((tyre) => tyre._id !== deleteDialog.tyreId));
      setNotification({
        show: true,
        type: "success",
        message: "Product successfully deleted"
      });
      
    } catch (err) {
      setNotification({
        show: true,
        type: "error",
        message: err.message
      });
    } finally {
      setDeleteDialog({ open: false, tyreId: null, tyreName: "" });
      
      // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 3000);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <a href="/admin/add-product" className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-800">
          <Plus className="w-5 h-5" />
          <span>Add New Product</span>
        </a>
      </div>

      {/* Notification */}
      {notification.show && (
        <Alert className={`mb-4 ${notification.type === 'error' ? 'bg-red-50 text-red-900' : 'bg-green-50 text-green-900'}`}>
          <AlertCircle className="w-4 h-4" />
          <AlertTitle>{notification.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
          <AlertDescription>{notification.message}</AlertDescription>
        </Alert>
      )}

      {/* Advanced Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="query"
              placeholder="Search by brand, size, or description..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              value={filters.query}
              onChange={handleFilterChange}
            />
          </div>
          <Button 
            variant="outline" 
            onClick={resetFilters}
            className="px-4 py-2"
          >
            Reset Filters
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <select
            name="tyreBrand"
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            value={filters.tyreBrand}
            onChange={handleFilterChange}
          >
            <option value="">All Brands</option>
            <option value="Michelin">Michelin</option>
            <option value="Bridgestone">Bridgestone</option>
            <option value="Goodyear">Goodyear</option>
            <option value="Continental">Continental</option>
            <option value="Pirelli">Pirelli</option>
          </select>

          <select
            name="priceRange"
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            value={filters.priceRange}
            onChange={handleFilterChange}
          >
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>

          <select
            name="tyreWidth"
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            value={filters.tyreWidth}
            onChange={handleFilterChange}
          >
            <option value="">All Widths</option>
            {[175, 185, 195, 205, 215, 225, 235, 245, 255, 265].map(width => (
              <option key={width} value={width}>{width}mm</option>
            ))}
          </select>

          <select
            name="profile"
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            value={filters.profile}
            onChange={handleFilterChange}
          >
            <option value="">All Profiles</option>
            {[35, 40, 45, 50, 55, 60, 65, 70].map(profile => (
              <option key={profile} value={profile}>{profile}</option>
            ))}
          </select>

          <select
            name="rimSize"
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            value={filters.rimSize}
            onChange={handleFilterChange}
          >
            <option value="">All Rim Sizes</option>
            {[14, 15, 16, 17, 18, 19, 20, 21, 22].map(size => (
              <option key={size} value={size}>{size}"</option>
            ))}
          </select>

          <select
            name="inStock"
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            value={filters.inStock}
            onChange={handleFilterChange}
          >
            <option value="all">All Stock Status</option>
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow">
        {loading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-2">Loading products...</p>
          </div>
        ) : error ? (
          <Alert variant="destructive" className="m-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Brand</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Size</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {localTyres.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No products found matching your criteria
                  </td>
                </tr>
              ) : (
                localTyres.map((tyre) => (
                  <tr key={tyre._id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        {tyre.images[0] ? (
                          <img 
                            src={tyre.images[0]} 
                            alt={tyre.tyreBrand} 
                            className="w-12 h-12 rounded-lg object-contain"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center">
                            <Package className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                        <span className="font-medium">{tyre.tyreBrand} {tyre.tyreWidth}/{tyre.rimSize}-{tyre.profile}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{tyre.tyreBrand}</td>
                    <td className="px-6 py-4">{tyre.tyreWidth}/{tyre.profile}/{tyre.rimSize}</td>
                    <td className="px-6 py-4">LKR {tyre.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        tyre.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {tyre.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <a 
                          href={`/admin/edit-product/${tyre._id}`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="Edit product"
                        >
                          <Edit className="w-5 h-5" />
                        </a>
                        <button
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          onClick={() => confirmDelete(tyre)}
                          title="Delete product"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog.open} onOpenChange={() => setDeleteDialog(prev => ({ ...prev, open: false }))}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {deleteDialog.tyreName}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialog(prev => ({ ...prev, open: false }))}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export { ProductList };