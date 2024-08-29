import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHouseChimney, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



function AdminHeader() {
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
                <Menu />
            </div>
        </nav>

    );
}

function Logo() {
    return (
        <Link to="/"><h1 className="text-3xl font-bold">OMILGA</h1><h2>Admin panel</h2></Link>
    )

}

function Menu() {
    return (
        <div className="flex items-center">
            <ul className="flex items-center list-none gap-x-[20px] text-[0.95em] hidden md:flex">
                <Menuitems linkname="Add-Tyre" url="/admin" />
                <Menuitems linkname="Edit-Tyre" url="/editTyre" />
                <Menuitems linkname="Delete-Tyre" url="/deleteTyre" />
                <Menuitems linkname={<FontAwesomeIcon icon={faRightFromBracket} size="2x"/>} url="/" />
            </ul>
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

export default AdminHeader