import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useTyreProduct = (tyreId) => {
  const [tyre, setTyre] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      console.log("hi im entering");
    if (!tyreId) return;

    const fetchTyre = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_BASE_URL}/api/tyre/filterById/${tyreId}`);

        console.log(response);
        if (response.data) {
          const product = response.data.tyres;

          // Convert binary images to Base64
          const imagesWithBase64 = product.images.map((image) => {
            if (image.data) {
              const binaryData = new Uint8Array(image.data.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              );
              return `data:${image.contentType};base64,${btoa(binaryData)}`;
            }
            return null;
          }).filter(img => img !== null);

          setTyre({ ...product, images: imagesWithBase64.length > 0 ? imagesWithBase64 : ["/api/placeholder/300/300"] });
        }
      } catch (err) {
        setError(err.message || "Failed to fetch tyre product");
      } finally {
        setLoading(false);
      }
    };

    fetchTyre();
  }, [tyreId]);

  return { tyre, loading, error };
};

export default useTyreProduct;
