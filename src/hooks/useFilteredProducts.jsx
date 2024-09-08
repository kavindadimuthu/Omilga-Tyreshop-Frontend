import { useCallback } from 'react';
import axios from 'axios';

const useFilteredProducts = ({
  selectedTyreWidth,
  selectedTyreProfile,
  selectedRimSize,
  selectedTubeType,
  query,
  category,
  limit,
  page,
  lastProductId,
  setFilteredProducts,
  setLoading,
  setError,
  setUserCount,
  setLastProductId
}) => {
  const handleFilterClick = useCallback(async () => {
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
      } else {
        // Handle unexpected response format
      }

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch filtered tyres:", error);
      setError("Failed to fetch filtered tyres");
      setLoading(false);
    }
  }, [
    selectedTyreWidth,
    selectedTyreProfile,
    selectedRimSize,
    selectedTubeType,
    query,
    category,
    limit,
    page,
    lastProductId,
    setFilteredProducts,
    setLoading,
    setError,
    setUserCount,
    setLastProductId
  ]);

  return {
    handleFilterClick
  };
};

export default useFilteredProducts;
