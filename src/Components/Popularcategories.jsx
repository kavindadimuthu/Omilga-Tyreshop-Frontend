import React from 'react'
import Motorbike from '/CategoryImages/motorbike.jpg'
import Scooter from '/CategoryImages/scooter.jpg'
import Threewheel from '/CategoryImages/threewheel.jpg'
import Bicycle from '/CategoryImages/bicycle.jpg'

function Popularcategories() {
    return (
        <div className='popularcategory-container mt-[50px] flex justify-center'>
            <div className='w-[75vw] flex flex-col gap-y-[20px] items-center '>
                <h1 className='text-center font-bold text-[50px]'>Popular Categories</h1>
                <div className='flex w-[100%] justify-between gap-x-[10px]'>
                    <Categoryboxes image={Motorbike} imagetext="Motorbike" url="#Motorbike" />
                    <Categoryboxes image={Scooter} imagetext="Scooter" url="#Scooter" />
                    <Categoryboxes image={Threewheel} imagetext="Threewheel" url="#Threewheel" />
                    <Categoryboxes image={Bicycle} imagetext="Bicycle" url="#Bicycle" />
                </div>
            </div>
        </div>

    )
}

function Categoryboxes(props) {

   

    return (
        <a href={props.url} className='relative w-[100%] h-[400px] overflow-hidden flex items-center rounded-lg'>
            <img src={props.image} alt="" className='absolute w-[100%] opacity-90 contrast-125' />
            <span className='relative w-[100%] h-[100%] pb-[10%] flex justify-center items-end text-white text-[25px] font-bold '>{props.imagetext}</span>
        </a>
    )
}

export default Popularcategories