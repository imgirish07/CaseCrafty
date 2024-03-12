import Navbar from './components/Navbar';
import Textfile from './components/Textfile';
import About from './components/About';

import React, { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  // DARK MODE
  const [mode, setmode] = useState('light')


  return (
    <>
      <BrowserRouter>
        <Navbar title='CaseCrafty' about='About Us' mode={mode} setmode={setmode} />
       

        <div className='Container1'>

          <Routes>

            <Route path="/about" element={<div className='container'><About mode={mode} /></div>} />

            <Route path="/" element={<>
              <Textfile h1='Try CaseCrafty- Word counter, Character counter and Case converter' mode={mode}  /></>} />
          </Routes>

        </div>
      </BrowserRouter>

    </>
  );
}

export default App;

