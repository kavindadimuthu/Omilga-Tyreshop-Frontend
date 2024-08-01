import React, { useState, useEffect, useCallback } from "react";
import { Tabs, Button } from "antd";
import Selectdropdown from "./Selectdropdown";
import axios from "axios";
import debounce from "lodash.debounce";
import Productcard from "./Productcard";

import { useLocation } from "react-router-dom";

const Filtermenu = () => {
  const location = useLocation();
  const [activeTabKey, setActiveTabKey] = useState("1");
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

  useEffect(() => {
    console.log(query);
    console.log(category);
  }, [query, category]);


  const tabPaneStyle = {
    backgroundColor: "#333333",
    padding: "16px",
    borderRadius: "6px",
  };

  const selectBoxStyles = {
    marginTop: "1em",
    display: "flex",
    columnGap: "1em",
  };

  const options4 = [
    { value: "toyota", label: "Toyota" },
    { value: "honda", label: "Honda" },
    { value: "ford", label: "Ford" },
  ];

  const options5 = [
    { value: "corolla", label: "Corolla" },
    { value: "civic", label: "Civic" },
    { value: "focus", label: "Focus" },
  ];

  const options6 = [
    { value: "false", label: "Tubeless" },
    { value: "true", label: "Tubed" },
  ];

  const handleTabChange = (key) => {
    setActiveTabKey(key);
  };


  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [widthsResponse, profilesResponse, rimSizesResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/tyre/tyreWidths"),
          axios.get("http://localhost:5000/api/tyre/tyreProfiles"),
          axios.get("http://localhost:5000/api/tyre/rimSizes"),
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
        "http://localhost:5000/api/tyre/filterTyres",
        {
          params: {
            tyreWidth: selectedTyreWidth,
            profile: selectedTyreProfile,
            rimSize: selectedRimSize,
            tube: selectedTubeType,
            tyreBrand: query,
            vehicleCategory: category !== "All products" ? category : undefined,
          },
        }
      );

      console.log("API Response:", response.data);

      if (response.data && Array.isArray(response.data.tyres)) {
        const productsWithImages = response.data.tyres.map((product) => {
          if (product.image && product.image.data) {
            const binaryData = new Uint8Array(product.image.data.data).reduce(
              (data, byte) => {
                return data + String.fromCharCode(byte);
              },
              ""
            );
            const base64Image = `data:${
              product.image.contentType
            };base64,${btoa(binaryData)}`;

            return {
              ...product,
              image: base64Image,
            };
          }
          return product;
        });
        setFilteredProducts(productsWithImages);
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
  }, [query, category, initialLoadComplete]);

  return (
    <div>
      <Tabs onChange={handleTabChange} type="card" activeKey={activeTabKey}>
        <Tabs.TabPane
          tab="FIND BY TYRE DIMENSIONS"
          key="1"
          style={tabPaneStyle}
        >
          <div>
            <span className="text-white text-[1.1em]">
              Your path to the perfect set of tyres begins here
            </span>
            <div style={selectBoxStyles}>
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
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="FIND BY VEHICLE MODEL" key="2" style={tabPaneStyle}>
          <div>
            <span className="text-white text-[1.1em]">
              Find the best tyres for your vehicle
            </span>
            <div style={selectBoxStyles}>
              <Selectdropdown placeholder="Make" options={options4} />
              <Selectdropdown placeholder="Model" options={options5} />
              <Button type="primary">Filter</Button>
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className="grid grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product, index) => (
          <div key={index}>
            <Productcard
              tyrename={product.tyreBrand}
              image={product.image}
              tyreWidth={product.tyreWidth}
              profile={product.profile}
              rimSize={product.rimSize}
              tube={product.tube}
              vehicleCategory={product.vehicleCategory}
              newprice={product.price}
              oldprice={product.oldPrice || null}
              tyreurl={`singleproduct/${product.tyreId}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtermenu;
