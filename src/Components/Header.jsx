import React from 'react';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import Searchbar from './Searchbar';

function Header() {
    return (
        <header>
            {/* Navbar Section */}
            <nav className='navbar-container flex justify-center bg-[#0055aa]'>
                <div className="w-[75vw] flex items-center justify-between px-[0px] py-[16px] text-white">
                    {/* Logo */}
                    <Link to="/"><h1 className="text-3xl font-bold">OMILGA</h1></Link>

                    {/* Searchbar */}
                    <Searchbar />

                    {/* Menu */}
                    <div className="flex items-center">
                        <ul className="flex items-center list-none gap-x-[20px] text-[0.95em] hidden md:flex">
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li>
                                <Link to="/login">
                                    <Avatar shape="square" icon={<UserOutlined />} />
                                </Link>
                            </li>
                        </ul>
                        <FontAwesomeIcon icon={faBars} className="block md:hidden" />
                    </div>
                </div>
            </nav>

            {/* Header Lowbar Section */}
            <div className='headerlowbar-container mt-[1px] flex justify-center bg-[#0055aa]'>
                <div className="w-[75vw] flex items-center justify-between py-[3px] text-[0.8em] text-white">
                    <div className="flex items-center gap-x-[10px]">
                        <FontAwesomeIcon icon={faPhone} /> <span>077 111 2233</span>
                    </div>
                    <div className="flex items-center gap-x-[10px]">
                        <FontAwesomeIcon icon={faHouseChimney} />
                        <span>54, Main Street, Kudugalwatta, Rathnapura</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

