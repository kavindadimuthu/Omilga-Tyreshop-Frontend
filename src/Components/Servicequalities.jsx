import React from 'react'

import Truck from '/ServiceImages/truck.png'
import Customercare from '/ServiceImages/customercare.png'
import Card from '/ServiceImages/card.png'
import Badge from '/ServiceImages/badge.png'

function Servicequalities() {
    return (
        <div className='servicequalities-container mt-[30px] flex justify-center '>
            <div className='w-[75vw] flex justify-around border-solid border-2 border-sky-500'>
                <Servicequalitypoints imagename={Truck} tag="DELIVERY TO YOUR DOORSTEP" />
                <Servicequalitypoints imagename={Customercare} tag="CUSTOMER SUPPORT" />
                <Servicequalitypoints imagename={Card} tag="SECURED PAYMENT" />
                <Servicequalitypoints imagename={Badge} tag="3 YEAR WARRANTY" />
            </div>
        </div>

    )
}

function Servicequalitypoints(props) {
    return (
        <div className='w-fit flex flex-col items-center'>
            <img src={props.imagename} alt="" className='w-[62px] aspect-square' />
            <span>{props.tag}</span>
        </div>
    )
}

export default Servicequalities