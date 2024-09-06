import React, { useState, useEffect, useCallback } from "react";
import { Tabs, Button } from "antd";
import Selectdropdown from "./Selectdropdown";
import axios from "axios";
import debounce from "lodash.debounce";
import AdminUpdateProductcard from "./AdminUpdateProductcard";
import { Pagination } from 'antd';

import { useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";

const AdminUpdateFiltermenu = () => {
  const location = useLocation();
  const [tyreWidthOptions, setTyreWidthOptions] = useState([]);
  const [tyreProfileOptions, setTyreProfileOptions] = useState([]);
  const [rimSizeOptions, setRimSizeOptions] = useState([]);
  const [selectedTyreWidth, setSelectedTyreWidth] = useState(null);
  const [selectedTyreProfile, setSelectedTyreProfile] = useState(null);
  const [selectedRimSize, setSelectedRimSize] = useState(null);
  const [selectedTubeType, setSelectedTubeType] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Declare state variables
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [ userCount, setUserCount] = useState();
  const [lastProductId, setLastProductId] = useState(null);

  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
    setPage(current);
  };

  const showTotal = (total, range) => {
    return `${range[0]}-${range[1]} of ${total} items`;
  };

  useEffect(() => {
    // Parse the query string and set the initial query and category
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('search');
    const categoryParam = params.get('category');

    setQuery(queryParam || '');
    setCategory(categoryParam || 'All products');

    // Set the initial load flag to true after fetching the initial state
    setInitialLoadComplete(true);
  }, [location]);

  const selectBoxStyles = {
    display: "flex",
    columnGap: "1em",
  };

  const options6 = [
    { value: "false", label: "Tubeless" },
    { value: "true", label: "Tubed" },
  ];


  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [widthsResponse, profilesResponse, rimSizesResponse] = await Promise.all([
          axios.get("https://omilgatyreshop-backend.onrender.com/tyre/tyreWidths"),
          axios.get("https://omilgatyreshop-backend.onrender.com/api/tyre/tyreProfiles"),
          axios.get("https://omilgatyreshop-backend.onrender.com/api/tyre/rimSizes"),
        ]);

        const widths = widthsResponse.data.map((width) => ({
          value: width,
          label: `${width}`,
        }));
        const profiles = profilesResponse.data.map((profile) => ({
          value: profile,
          label: `${profile}`,
        }));
        const rimSizes = rimSizesResponse.data.map((rimSize) => ({
          value: rimSize,
          label: `${rimSize}`,
        }));

        setTyreWidthOptions(widths);
        setTyreProfileOptions(profiles);
        setRimSizeOptions(rimSizes);

      } catch (error) {
        console.error("Failed to fetch tyre options:", error);
      }
    };

    fetchOptions();
  }, []);


  const handleFilterClick = async () => {
    setLoading(true);
  
    try {
      const response = await axios.get(
        "https://omilgatyreshop-backend.onrender.com/api/tyre/filterTyres",
        {
          params: {
            tyreWidth: selectedTyreWidth,
            profile: selectedTyreProfile,
            rimSize: selectedRimSize,
            tube: selectedTubeType,
            tyreBrand: query,
            vehicleCategory: category !== "All products" ? category : undefined,
            limit: limit,
            page: page,
            lastId: lastProductId,
          },
        }
      );
  
      console.log("API Response:", response.data);
      setUserCount(response.data.totalTyres);
      setLastProductId(response.data.lastId);
  
      if (response.data && Array.isArray(response.data.tyres)) {
        const productsWithImages = response.data.tyres.map((product) => {
          const imagesWithBase64 = product.images.map((image) => {
            if (image.data) {
              const binaryData = new Uint8Array(image.data.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              );
              const base64Image = `data:${image.contentType};base64,${btoa(binaryData)}`;
              return base64Image;
            }
            return null;
          }).filter(img => img !== null);
  
          return {
            ...product,
            images: imagesWithBase64,
          };
        });
  
        setFilteredProducts(productsWithImages);
        console.log("these are products with converted images:",productsWithImages);
      } else {
        setError("Unexpected response format");
      }
  
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch filtered tyres:", error);
      setError("Failed to fetch filtered tyres");
      setLoading(false);
    }
  };
  


  useEffect(() => {
    // Fetch filtered products only after the initial load is complete
    if (initialLoadComplete) {
      handleFilterClick();
    }
  }, [query, category, initialLoadComplete, limit, page]);

  
  console.log("Here Last product id", lastProductId);


  return (
    <div>
          <div className="bg-[#333333] px-6 py-6 rounded-lg flex justify-between">
            
            <div style={selectBoxStyles} >
              <Selectdropdown
                placeholder="Tubeless or tubed"
                options={options6}
                onChange={(value) => {
                  setSelectedTubeType(value);
                  if (value === "true") {
                    setSelectedTyreProfile(null);
                  }
                }}
              />

              <Selectdropdown
                placeholder="Tire Width"
                options={tyreWidthOptions}
                onChange={(value) => setSelectedTyreWidth(value)}
              />

              {selectedTubeType !== "true" && (
                <Selectdropdown
                  placeholder="Profile"
                  options={tyreProfileOptions}
                  onChange={(value) => setSelectedTyreProfile(value)}
                />
              )}

              <Selectdropdown
                placeholder="Rim Size"
                options={rimSizeOptions}
                onChange={(value) => setSelectedRimSize(value)}
              />

              <Button
                type="primary"
                className="bg-[#0055AA]"
                onClick={handleFilterClick}
              >
                Filter
              </Button>
            </div>
            <div className="text-white text-lg font-bold mb-2">FIND TYRE BY DIMENSION</div>
          </div>


      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className="grid grid-cols-6 gap-2 py-4">
        {filteredProducts.map((product, index) => (
          <div key={index}>
            <AdminUpdateProductcard
              tyrename={product.tyreBrand}
              images={product.images} // Pass the images array
              tyreWidth={product.tyreWidth}
              profile={product.profile}
              rimSize={product.rimSize}
              tube={product.tube}
              vehicleCategory={product.vehicleCategory}
              newprice={product.price}
              oldprice={product.oldPrice || null}
              tyreurl={`editSingleProduct/${product._id}`}
            />
          </div>
        ))}
      </div>

      <div className='w-[auto] m-auto py-2 flex justify-end border-solid border-b-2 border-gray-400'>
      
        <Pagination
        defaultCurrent={1}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        current={page}
        pageSize={limit}
        total={userCount}
        onChange={setPage}
        showTotal={showTotal}
      />
    </div>
    </div>
  );
};

export default AdminUpdateFiltermenu;
