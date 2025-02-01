import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useTyreProducts = (filters) => {
  const [tyres, setTyres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalTyres, setTotalTyres] = useState(0);

  useEffect(() => {
    const fetchTyres = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_BASE_URL}/api/tyre/filterTyres`, { params: filters });

        if (response.data && Array.isArray(response.data.tyres)) {
          const tyresWithImages = response.data.tyres.map((tyre) => {
            const imagesWithBase64 = tyre.images
              .map((image) => {
                if (image.data) {
                  const binaryData = new Uint8Array(image.data.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                  );
                  const base64Image = `data:${image.contentType};base64,${btoa(binaryData)}`;
                  return base64Image;
                }
                return null;
              })
              .filter((img) => img !== null);

            return {
              ...tyre,
              images: imagesWithBase64.length > 0 ? imagesWithBase64 : ["/api/placeholder/300/300"], // Use first image or fallback
            };
          });

          setTyres(tyresWithImages);
          setTotalPages(response.data.totalPages);
          setTotalTyres(response.data.totalTyres);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch tyres");
      } finally {
        setLoading(false);
      }
    };

    fetchTyres();
  }, [filters]);

  return { tyres, loading, error, totalPages, totalTyres };
};

export default useTyreProducts;
