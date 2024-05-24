import React from 'react'
import payimage from '/pay.png'

function Footer() {
    return (
        <footer className='footer-container mt-[30px] flex justify-center py-[35px] bg-[#0051A3]'>
            <div className="w-[75vw] flex flex-wrap text-white text-[1.1em] font-[RobotoBold] leading-[2em]">
                <div className="col1 flex flex-col shrink grow basis-1/4">
                    <Footermenulinks name="Products" url="#Products" />
                    <Footermenulinks name="Categories" url="#Categories" />
                    <Footermenulinks name="Accessories" url="#Accessories" />
                    <Footermenulinks name="Catalogue" url="#Catalogue" />
                </div>
                <div className="col2 flex flex-col shrink grow basis-1/4">
                    <Footermenulinks name="Services" url="#Services" />
                    <Footermenulinks name="About Us" url="#About Us" />
                    <Footermenulinks name="Contact" url="#Contact" />
                    <Footermenulinks name="Terms and Conditions" url="#Terms and Conditions" />
                </div>
                <div className="col3 flex flex-col shrink grow basis-1/4">
                    <Footermenulinks name="My Account" url="#My Account" />
                    <Footermenulinks name="Register" url="#Register" />
                    <Footermenulinks name="Cart" url="#Cart" />
                    <Footermenulinks name="Branches" url="#Branches" />
                </div>
                <div className="col4 flex flex-col shrink grow basis-1/4">
                    <span className='font-bold'>Address</span>
                    <span className='text-[1em]'>No.54, Main street,<br />Kudugalwatta, Rathnapura.</span>
                    <span className='font-bold'>Payment Methods</span>
                    <img src={payimage} alt="" width="150px" />
                </div>
            </div>
        </footer>

    )
}

function Footermenulinks(props) {
    return (
        <a href={props.url}>{props.name}</a>
    )
}

export default Footer