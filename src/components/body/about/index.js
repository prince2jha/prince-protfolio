import React from 'react';
import SocialContact from '../../common/socialcontact';
import './about.css';
function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-top">
                 <div className="about-info">
                    <span className="hi">Hi there, My name is</span><br/>
                    <span className="name">Prince Jha</span><br/>
                    <span className="profession">And I'm a FullStack Web Developer</span>
                    <div className="social">
                        <SocialContact/>
                    </div>
                    <div className="hire-resume-btn">
                        <a href="#contact" className="hire">Hire Me<i class="fi-rr-arrow-right" ></i></a>
                        <a href="https://drive.google.com/file/d/1gaE6BqGRxp1LUGpj6IzFe-Q_-qVz_73h/view?usp=sharing" className="resume" target="_blank">Resume<i class="fi-rr-download"></i></a>
                    </div>
                 </div>
                </div>
                <div className="about-bottom">
                    <div className="about-pic">
                        <img src={require('../../../assets/me.png').default} alt="developers pic" className="picture"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
