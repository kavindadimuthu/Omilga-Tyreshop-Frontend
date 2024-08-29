import React from 'react'
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faPhone, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import Searchbar from './Searchbar';



function Header() {

    return (
        <header>
            <Navbar />
            
            <Headerlowbar />

        </header>
    )
}

function Navbar() {
    return (
        <nav className='navbar-container flex justify-center bg-[#0055aa]'>
            <div className="w-[75vw] flex items-center justify-between px-[0px] py-[16px] text-white">
                <Logo />
                <Searchbar/>
                <Menu />
            </div>
        </nav>

    );
}

function Logo() {
    return (
        <Link to="/"><h1 className="text-3xl font-bold">OMILGA</h1></Link>
    )

}

function Menu() {
    return (
        <div className="flex items-center">
            <ul className="flex items-center list-none gap-x-[20px] text-[0.95em] hidden md:flex">
                <Menuitems linkname="Products" url="/products" />
                <Menuitems linkname="Categories" url="/categories" />
                <Menuitems linkname="About" url="/about" />
                <Menuitems linkname="Contact" url="/contact" />
                <Menuitems linkname={
                    <Avatar shape="square" icon={<UserOutlined />} />} url="/login" />
            </ul>
            <FontAwesomeIcon icon={faBars} className="block md:hidden" />
        </div>
    );
}
function Menuitems(props) {
    return (
        <>
        <li>
            <Link to={props.url}>{props.linkname}</Link>
        </li>
        </>
        
    );
}

function Headerlowbar() {
    return (
        <div className='headerlowbar-container mt-[1px] flex justify-center bg-[#0055aa]'>
            <div className="w-[75vw] flex items-center justify-between py-[3px] text-[0.8em] text-white">
                <div className="flex items-center gap-x-[10px]"><FontAwesomeIcon icon={faPhone} /> <span>077 111 2233</span></div>
                <div className="flex items-center gap-x-[10px]"><FontAwesomeIcon icon={faHouseChimney} /><span>54, Main Street, Kudugalwatta, Rathnapura</span></div>
            </div>
        </div>

    )
}

export default Header