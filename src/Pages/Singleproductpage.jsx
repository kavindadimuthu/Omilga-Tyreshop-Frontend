import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { InputNumber } from "antd";
import { Tabs } from "antd";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import axios from "axios";

function Singleproductpage() {
  const params = useParams();
  const [productData, setProductData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(params);
  console.log(params.id);

  const fetchProductById = async () => {
    // setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/tyre/filterById/${params.id}`);
      console.log("API response:",response.data);

      if (response.data && response.data.tyres) {
        console.log("good! array is their");
        console.log("array is this:",response.data.tyres);
        const product = response.data.tyres;
        console.log("after assingning to product:",product)

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

        console.log("here are new images array:",imagesWithBase64);
        product.images = imagesWithBase64;
        console.log("final product after imagesWithBase64:",product)

        setProductData(product);


      } else {
        console.log("no array is their");
        setError("Unexpected response format");
      }

      // setLoading(false);
    } catch (error) {
      console.error("Failed to fetch", error);
      setError("Failed to fetch browsed tyre details");
      // setLoading(false);
    }
  };

  useEffect(()=> {
    fetchProductById();
  },[]);

  useEffect(() => {
    console.log("these are productData with converted images:",productData);
    // Imagebox();
  }, [productData]);

  console.log(productData);

  return (
    <>
      <Header />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="w-[75vw] mt-10 m-auto flex gap-10">
        <Imagebox productData={productData} />
        <Productdetailbox productData={productData} />
      </div>
      <Descriptionbox productdata={productData} />
      <Footer />
    </>
  );
}

  export default Singleproductpage;

  

  function Imagebox({productData}) {
    // Check if productData and productData.images are defined
    if (
      !productData ||
      !productData.images ||
      productData.images.length === 0
    ) {
      return <p>No images available</p>;
    }
    const [bigImage, setBigImage] = useState(productData.images[0]);

    return (
      <>
        <div className="p-4 w-4/12 rounded-[10px]">
          <div className="flex flex-col items-center w-fit">
            <img
              src={bigImage}
              alt="Big Tyre"
              className="w-[300px] p-4 bg-slate-300 rounded-xl"
            />

            <div className="mt-2 flex gap-2 justify-center w-[160px]">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Tyre ${index + 1}`}
                  onClick={() => setBigImage(image)}
                  className="w-[30%] bg-slate-300 p-1 rounded-xl cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  function Productdetailbox({ productData }) {
    // Ensure productData is defined and has the expected structure
    if (!productData) {
      return <div>No product data available</div>;
    }
  
    return (
      <div className="w-6/12 flex flex-col gap-y-6">
        <div className="text-[1.5em] font-bold">
          <span>{productData.tyreWidth}</span> / <span>{productData.profile}</span> - <span>{productData.rimSize}</span> | <span>{productData.tube? 'Tube':'Tubeless'}</span>
          <div>{productData.tyreBrand}</div>
        </div>
        <div>
          <h1 className="text-[1em]"><s>LKR {productData.oldPrice}</s></h1>
          <h1 className="text-[1.3em]">LKR {productData.price}</h1>
        </div>
        <div className="flex items-center gap-2">
          Quantity
          <InputNumber min={1} max={10} defaultValue={1} />
        </div>
        <div className="flex items-center gap-2">
          <Button type="primary">Add to favourites</Button>

        </div>
        <div>
          <b>Make:</b> {productData.makes.map((make, index) => (
            <span key={index}> {make} </span>
          )) || "Not specified"}
        </div>
        <div>
          {productData.description || "No description available"}
        </div>
      </div>
    );
  }

  function Descriptionbox({productdata}) {
    const items = [
      {
        key: "1",
        label: "DESCRIPTION",
        children: productdata.description 
      },
    ];

    return (
      <div className="w-[75vw] mt-6 m-auto">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    );
  }
