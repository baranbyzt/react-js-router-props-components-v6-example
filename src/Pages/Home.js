import React from "react";
import Portal_page_1 from '../Portals/Portal1';
import Portal_page_2 from '../Portals/Portal2';
import Portal_page_3 from '../Portals/Portal3';
import './pages.css'

function Home() {


  let btn_1 = () =>{
  document.getElementById('portal-1-root').style.visibility = 'visible';
  }
  let btn_2 = () =>{
    document.getElementById('portal-2-root').style.visibility = 'visible';
  }
  let btn_3 = () =>{
    document.getElementById('portal-3-root').style.visibility = 'visible';
  }

  return (
    <div className="home_page">
    <p className="main_txt_home_page">HOME PAGE</p>
    
    <p onClick={btn_1} className="home_btn"> go page 1</p>
    <p onClick={btn_2} className="home_btn"> go page 2</p>
    <p onClick={btn_3} className="home_btn"> go page 3</p>

    <Portal_page_1/>
    <Portal_page_2/>
    <Portal_page_3/>
    

    </div>
  )
}

export default Home;
