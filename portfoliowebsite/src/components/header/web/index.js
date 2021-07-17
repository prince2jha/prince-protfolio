import React from 'react';
import './web.css';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#home">
                    <i class="fi-rr-home option-icon"></i>Home
                </a>
            </div>
            <div className="web-option">
                <a href="#projects">
                    <i class="fi-rr-notebook option-icon"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    <i class="fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#blog">
                    <i class="fi-rr-edit"></i>Blogs
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <i class="fi-rr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    );
}

export default Web;
