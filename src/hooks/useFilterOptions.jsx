import { useState, useEffect } from 'react';
import axios from 'axios';

const useFilterOptions = () => {
  const [tyreWidthOptions, setTyreWidthOptions] = useState([]);
  const [tyreProfileOptions, setTyreProfileOptions] = useState([]);
  const [rimSizeOptions, setRimSizeOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [widthsResponse, profilesResponse, rimSizesResponse] = await Promise.all([
          axios.get("https://omilgatyreshop-backend.onrender.com/api/tyre/tyreWidths"),
          axios.get("https://omilgatyreshop-backend.onrender.com/api/tyre/tyreProfiles"),
          axios.get("https://omilgatyreshop-backend.onrender.com/api/tyre/rimSizes"),
        ]);

        const widths = widthsResponse.data.map(width => ({
          value: width,
          label: `${width}`,
        }));
        const profiles = profilesResponse.data.map(profile => ({
          value: profile,
          label: `${profile}`,
        }));
        const rimSizes = rimSizesResponse.data.map(rimSize => ({
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

  return { tyreWidthOptions, tyreProfileOptions, rimSizeOptions };
};

export default useFilterOptions;
