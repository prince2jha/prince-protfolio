import React from 'react';
import About from './about/index.js';
import Projects from './projects/index.js';
import Blog from './blogs/index.js'
import Contact from './contact/index.js';
import Skills from './skills/index.js';
import {BrowserRouter,Route} from 'react-router-dom';
import './body.css';
function Body() {
    return (
        <div className="body">
            <section id="about">
                <About/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="blog">
                <Blog/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
            <div className="top-nav">
                <button onClick={()=>window.scroll(0,0)} className="top-nav-btn"><i className="fi-rr-rocket"></i></button>
            </div>
        </div>
    );
}

export default Body;
