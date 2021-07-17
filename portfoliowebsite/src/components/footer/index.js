import React from 'react';
import SocialContact from '../common/socialcontact';
import './footer.css'
import logo from  '../header/mylogo.png';

function Footer() {
    return (
        <div class="footer">
            <div className="footer-container">
                    <div className="footer-logo">
                        <img src={logo} alt="logo"/>
                        princejha.
                    </div>
                    <div className="rights"> 
                        <p>Copyright &copy;2021 designed by Prince Jha.</p>
                    </div>
                    <div className="footer-social">
                            <SocialContact/>
                    </div>                                
            </div>
        </div>
    );
}

export default Footer;
