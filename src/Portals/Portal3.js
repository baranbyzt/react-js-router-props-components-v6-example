import React from "react";
import ReactDOM from 'react-dom'
import './Portals.css'
import { useNavigate} from "react-router-dom";


function Portal3() {
  let navigate = useNavigate();
  let portal3 = document.getElementById('portal-3-root');
  portal3.style.visibility='hidden'

  let yes_btn = () => {
    navigate("/page3");
  }
  let no_btn = () => {
    portal3.style.visibility='hidden'
  }

  
  return ReactDOM.createPortal(
    <div className="div_portal_1">
          
    <div className="other_portal_1_div">
    <p>are you sure ? for page-3</p>
   
   <div className="div_portal_1_inner">
            <p onClick={yes_btn} >yes</p>
            <p onClick={no_btn} >no</p>
   </div>
    </div>
      </div>,portal3
  )
}

export default Portal3;






