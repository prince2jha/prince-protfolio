//rcfc
import React from 'react';
import Home from './components/home/index.js'
import ParticleBackground from './particle-bg.js';

function App() {
  return (
    <div class="app">
      <ParticleBackground />
      <DisplayApp/>
    </div>
  );
}
function DisplayApp(){
  return(
    <div>
      <Home/>
    </div>
  );
}

export default App
