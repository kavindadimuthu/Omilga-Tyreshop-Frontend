import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { Button , InputNumber , Tabs } from "antd";
import products from '../data/products.json';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Tyre1 from "/TyreImages/tyre-1-a.png";
import Tyre2 from "/TyreImages/tyre-1-f.png";
import Tyre3 from "/TyreImages/tyre-1-s.png";


const images = [Tyre1, Tyre2, Tyre3];

function Singleproductpage() {

  const params = useParams();
  let productdata = (null)

  


    for (let index = 0; index < products.length; index++) {
      if (params.id == products[index].tyreid) {
        productdata = {
          tyrename: products[index].tyrename,
          image: products[index].image,
          sizeinfo: products[index].sizeinfo,
          oldprice: products[index].oldprice,
          newprice: products[index].newprice,
          description: products[index].description,
          specifications: products[index].specifications,
        }
      }

    }

    return (
      <>
        <Header />
        <div className="w-[75vw] mt-10 m-auto flex gap-10">
          <Imagebox productdata={productdata} />
          <Productdetailbox productdata={productdata} />
        </div>
        <Descriptionbox productdata={productdata} />
        <Footer />
      </>
    );
  }

  export default Singleproductpage;

  function Imagebox() {


    const [bigimage, setBigimage] = useState(Tyre1);

    return (
      <>
      
      <div className="p-4 w-4/12 rounded-[10px]">
        <div className="flex flex-col items-center w-fit">
          <img src={bigimage} alt="Big Tyre" className='w-[300px] p-4 bg-slate-300 rounded-xl' />

          <div className='mt-2 flex gap-2 justify-center w-[160px]'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Tyre ${index + 1}`}
                onClick={() => setBigimage(image)}
                className='w-[30%] bg-slate-300 p-1 rounded-xl cursor-pointer'
              />
            ))}
          </div>
        </div>
        
      </div>
      </>
    );
  }

  function Productdetailbox(props) {



    return (
      <div className="w-6/12 flex flex-col gap-y-6">
        <div className="text-[1.5em] font-bold">
          <div>{props.productdata.sizeinfo}</div>
          <div>{props.productdata.tyrename}</div>
        </div>
        <div>
          <h1 className="text-[1em]"><s>LKR {props.productdata.oldprice}</s></h1>
          <h1 className="text-[1.3em]"> LKR {props.productdata.newprice}</h1>
        </div>
        <div className="flex items-center gap-2">
          Quantity
          <InputNumber min={1} max={10} defaultValue={1} />
        </div>
        <div className="flex items-center gap-2">
          <Button type="primary">Buy Now</Button>
          <Button>Add to Cart</Button>
        </div>
        <div>
          {" "}
          <b>Make:</b> Yamaha FZ, Suzuki Intruder, Bajaj NS 200
        </div>
        <div>
          The Discovery T/L 100/80×17 (Front) Motorcycle Tyre offers a comfortable
          ride and stylish progressive tread design that extends mileage and
          offers better performance and control. The use of specially formulated
          rubber compounds gives an excellent grip during any weather condition.
          Ideal for the Yamaha FZ and Bajaj Pulsar NS 200 models.
        </div>
      </div>
    );
  }

  function Descriptionbox(props) {
    const items = [
      {
        key: "1",
        label: "DESCRIPTION",
        children: props.productdata.description,
      },
      {
        key: "2",
        label: "SPECIFICATIONS",
        children: props.productdata.specifications,
      },
    ];

    return (
      <div className="w-[75vw] mt-6 m-auto">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    );
  }
