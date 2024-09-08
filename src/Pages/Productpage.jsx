import React from "react";
import Header from "../Components/Header";
import Sitepath from "../Components/Sitepath";
import Sidecategorymenu from "../Components/Sidecategorymenu";
import Filtermenu from "../Components/Filtermenu";
import Footer from "../Components/Footer";

function Productpage() {
  return (
    <>
      <Header />
      <Sitepath />

      <div className="mt-[20px] flex justify-center">
        <div className="w-[75vw] flex gap-x-[1em] mb-8">
          <div className="w-5vw">
            <Sidecategorymenu />
          </div>
          <div className="w-full">
            <Filtermenu />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Productpage;
