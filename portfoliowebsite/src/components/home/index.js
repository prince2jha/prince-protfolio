import React from 'react';
import Header from '../header/index.js';
import Body from '../body/index.js';
import Footer from '../footer/index.js';

import './home.css'


function Home() {
    return (
        <div className="home home-container" id="home">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;
