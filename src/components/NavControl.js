
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home'
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
import ErrorPage from '../Pages/ErrorPage'


function NavControl() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/page1" element={<Page1/>} />
          <Route path="/page2" element={<Page2/>} />
          <Route path="/page3" element={<Page3/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>

      </Router>
    )
  }
  
  export default NavControl;














