import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Productcard from './Productcard';
import products from '../data/products.json';

function Topsellingproductcarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  return (
    <div className='topsellingproductcarousel-container mt-[50px] flex flex-col items-center'>
      <h1 className='text-center font-bold text-[50px]'>Top Selling Products</h1>

      <Carousel
        centerMode={true}
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
        containerClass="carousel-container w-[75vw] "
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType="desktop"
        dotListClass="custom-dot-list-style"
        // renderDotsOutside={true}
        itemClass="carousel-item-padding-40-px"
      >

        {products.map((product, index) => (
          <div key={index} style={{ padding: "0 5px" }} >
            <Productcard tyrename={product.tyrename} images={product.image} description={product.description} oldprice={product.oldprice} newprice={product.newprice} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Topsellingproductcarousel