import React from 'react';
import './mobile.css';

function Mobile({isOpen,setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
                <i class="fi-rr-cross"></i>
            </div>
            <div className="mobile-options" onClick={()=>setIsOpen(!isOpen)}>
                <div className="mobile-option">
                    <a href="#home">
                        <i class="fi-rr-home option-icon"></i>Home
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#projects">
                        <i class="fi-rr-notebook option-icon"></i>Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        <i class="fi-rr-laptop option-icon"></i>Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#blog">
                        <i class="fi-rr-edit"></i>Blogs
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <i class="fi-rr-user option-icon"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Mobile;
