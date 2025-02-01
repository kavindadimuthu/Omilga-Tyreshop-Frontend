import { useState, useCallback } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useUpdateTyre = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateTyre = useCallback(async (tyreId, formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // if (formData.description.length > 5000) {
    //     console.log("Description is too long (max 5000 characters)");
    //     // errors.description = 'Description is too long (max 5000 characters)';
    //   }

    try {
      const response = await axios.put(`${API_BASE_URL}/api/tyre/updateTyre/${tyreId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setSuccess(true);
        return response.data;
      } else {
        throw new Error(response.data.message || "Failed to update tyre");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { updateTyre, loading, error, success };
};

export default useUpdateTyre;
