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
        </div>
    );
}

export default Body;
