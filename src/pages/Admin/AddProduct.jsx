import React, { useState, useEffect, useRef } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Image as ImageIcon,
  X,
  Save,
  AlertCircle
} from 'lucide-react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Input, Textarea, Card, Alert } from '../../components/ui';
import AdminLayout from "../../components/AdminLayout"
import useAddTyre from "../../hooks/useAddTyre";
import useUpdateTyre from "../../hooks/useUpdateTyre";
import useTyreProduct from "../../hooks/useTyreProduct";

// Validation Function
const validateForm = (formData) => {
  const errors = {};
  
  const requiredFields = [
    'tyreWidth', 'profile', 'rimSize', 'tyreBrand', 
    'vehicleCategory', 'makes', 'description', 'price'
  ];

  requiredFields.forEach(field => {
    if (!formData[field]) {
      errors[field] = `${field.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`;
    }
  });

  if (formData.price <= 0) {
    errors.price = 'Price must be positive';
  }

  return errors;
};

const TyreForm = ({ editMode = false }) => {
  const params = useParams();
  const { tyre, loadingProduct, error } = useTyreProduct(params.id);
  const { addTyre } = useAddTyre();
  const { updateTyre } = useUpdateTyre();

  // console.log(tyre);

  // Set form Data to stored data if in edit mode, otherwise null
  const [formData, setFormData] = useState(() => {
    if (editMode && tyre) {
      return { ...tyre };
    } else {
      return {
        tyreWidth: '',
        profile: '',
        rimSize: '',
        tyreBrand: '',
        vehicleCategory: '',
        makes: '',
        description: '',
        price: 0,
        oldPrice: 0,
        mainImage: null,
        secondImage: null,
        thirdImage: null
      };
    }
  });
  
  // Insert current stored images when in edit mode
  useEffect(() => {
    if (formData.images) {
      const [main, second, third] = formData.images;
      setImagePreviews({
        mainImage: main || null,
        secondImage: second || null,
        thirdImage: third || null
      });
    }
  }, [formData.images]);

  // Update formData whenever tyre changes
  useEffect(() => {
    if (editMode && tyre) {
      setFormData({ ...tyre });
    }
  }, [tyre, editMode]);

  const [errors, setErrors] = useState({});
  const [imagePreviews, setImagePreviews] = useState({
    mainImage: null,
    secondImage: null,
    thirdImage: null
  });
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const imageRefs = {
    mainImage: useRef(null),
    secondImage: useRef(null),
    thirdImage: useRef(null)
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [name]: file }));
        setImagePreviews(prev => ({ ...prev, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear individual field error when user starts typing
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const removeImage = (imageType) => {
    setFormData(prev => ({ ...prev, [imageType]: null }));
    setImagePreviews(prev => ({ ...prev, [imageType]: null }));
    
    if (imageRefs[imageType].current) {
      imageRefs[imageType].current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const submissionData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== undefined) {
          submissionData.append(key, formData[key]);
        }
      });

      console.log("FormData entries:");
      for (const [key, value] of submissionData.entries()) {
        console.log(key, value);
      }

      // Using function in hook for API call to add tyre
      if(editMode){
        await updateTyre(params.id, submissionData);
      } else{
        await addTyre(submissionData);
      }
      
      setSubmitSuccess(true);
      setLoading(false);
    } catch (error) {
      setSubmitError(error.message);
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6 space-x-3">
            <Package className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold">
              {editMode ? 'Edit Tyre' : 'Add New Tyre'}
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'tyreWidth', 'profile', 'rimSize', 'tyreBrand',
                'vehicleCategory', 'makes', 'price', 'oldPrice'
              ].map(field => (
                <Input
                  key={field}
                  name={field}
                  label={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  type={field.includes('price') ? 'number' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  error={errors[field]}
                />
              ))}
              <Textarea
                name="description"
                label="Description"
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
                rows={4}
                className="md:col-span-2"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['mainImage', 'secondImage', 'thirdImage'].map(imageType => (
                  <div key={imageType} className="relative">
                    <input
                      type="file"
                      ref={imageRefs[imageType]}
                      name={imageType}
                      accept="image/*"
                      className="hidden"
                      onChange={handleChange}
                    />
                    <div
                      className={`
                        border-2 border-dashed rounded-lg p-4
                        flex flex-col items-center justify-center
                        ${imagePreviews[imageType]
                          ? 'border-blue-300 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-500 cursor-pointer'}
                      `}
                      onClick={() => imageRefs[imageType].current.click()}
                    >
                      {imagePreviews[imageType] ? (
                        <div className="relative">
                          <img
                            src={imagePreviews[imageType]}
                            alt={`Preview ${imageType}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <Button
                            variant="destructive"
                            className="absolute top-2 right-2 p-1 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(imageType);
                            }}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600">
                            Click to upload {imageType.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>{editMode ? 'Update Tyre' : 'Add Tyre'}</span>
              </Button>
            </div>
          </form>
          {submitError && (
            <Alert
              variant="error"
              title="Error"
              message={submitError}
              className="mt-4"
            />
          )}
          {submitSuccess && (
            <Alert
              variant="success"
              title="Success"
              message={`Tyre ${editMode ? 'updated' : 'added'} successfully!`}
              className="mt-4"
            />
          )}
        </Card>
      </div>
    </AdminLayout>
  );
};

export { TyreForm };