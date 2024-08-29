import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Productcard from './Productcard';
import products from '../data/products.json';
import axios from 'axios';



function Featuredproductcarousel() {

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };


  const getProduts = async () => {
    setLoading(true);
  
    try {
      const response = await axios.get("http://localhost:5000/api/tyre/filterTyres",);
  
      console.log("API Response:", response.data);
  
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
  
        setAllProducts(productsWithImages);
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

  useEffect(()=>{
    getProduts();
  },[])

  return (
    <div className="featuredproductcarousel-container  mt-[50px] flex flex-col items-center">
      <h1 className="text-center font-bold text-[50px]">Featured Products</h1>

      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container w-[75vw]"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType="desktop"
        dotListClass="custom-dot-list-style"
        // renderDotsOutside={true}
        itemClass="carousel-item-padding-40-px "
      >
        {products.map((product, index) => (
          <div key={index} style={{ padding: "0 5px" }}>
            <Productcard
              tyrename={product.tyreBrand}
              image={product.image}
              description={product.description}
              oldprice={product.oldprice}
              newprice={product.newprice}
            />
          </div>
        ))}

        {/* {allProducts.map((product, index) => (
          <div key={index}>
            <Productcard
              tyrename={product.tyreBrand}
              images={product.images} // Pass the images array
              tyreWidth={product.tyreWidth}
              profile={product.profile}
              rimSize={product.rimSize}
              tube={product.tube}
              vehicleCategory={product.vehicleCategory}
              newprice={product.price}
              oldprice={product.oldPrice || null}
              tyreurl={`singleproduct/${product._id}`}
            />
          </div>
        ))} */}
      </Carousel>
    </div>
  );
}

export default Featuredproductcarousel