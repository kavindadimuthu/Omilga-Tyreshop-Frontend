import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faPhone, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import sliderimg4 from '/SliderImages/img4.jpg'

function Contactdetailandmapbox() {
  return (
    <div className="contactdetailandmapbox-container mt-[50px] flex justify-center">
      <div className="w-[75vw] flex justify-between">
        <div className="w-[44%] h-[400px] flex flex-col gap-y-[2em] px-[2em] py-[2em] rounded-[5px] bg-blue-300">
          <Contactdetailpoints icon={faPhone} title="Telephone">
            045 7780 380 <br />
            045 482 2800
          </Contactdetailpoints>
          <Contactdetailpoints icon={faMagnifyingGlass} title="Email">
            info@omilgatyres.com
          </Contactdetailpoints>
          <Contactdetailpoints icon={faHouseChimney} title="Location">
            PO BOX 54, Kudugalwatta, <br />
            Rathnapura
          </Contactdetailpoints>  
        </div>

        <img src={sliderimg4} alt=""
          style={{
            width: '55%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px'
          }}
        />
      </div>
    </div>
  );
}

function Contactdetailpoints(props) {
  return (
    <section className="flex gap-x-[1em]">
      <div className="text-[1.3em]"><FontAwesomeIcon icon={props.icon} /></div>
      <div className="flex flex-col gap-y-[0.2em]">
        <span className="font-semibold text-[1.3em]">{props.title}</span>
        <span className="text-[1.1em]">{props.children}</span>
      </div>
    </section>
  )
}

export default Contactdetailandmapbox;
