import React from 'react';
import { SocialData } from '../../data/social';
import './socialcontact.css'
function SocialContact() {
    const data = SocialData;
    return (
        <div className="social-contact">
            {data.map((item)=>{
                return <a href={item.link}>
                    <div className="social-icon-conatiner">
                        <img src={item.icon} alt="social media icons" className="social-icon"/>
                    </div>
                </a>
            })}
        </div>
    );
}

export default SocialContact;
