import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HeroSearch from './component/HeroSearch';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSearch/>
    </div>
  );
}

export default App;
