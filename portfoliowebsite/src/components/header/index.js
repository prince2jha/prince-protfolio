import React,{useState} from 'react';
import Web from './web/index.js';
import Mobile from './mobile/index.js';
import './header.css';
import logo from './mylogo.png';

function Header() {
    const [isOpen,setIsOpen]= useState(false);
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
                princejha.
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    );
}

export default Header;
