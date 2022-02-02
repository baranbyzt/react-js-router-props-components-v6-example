import React from "react";
import ReactDOM from 'react-dom'
import './Portals.css'
import { useNavigate} from "react-router-dom";


function Portal2() {
  let navigate = useNavigate();
let portal2 = document.getElementById('portal-2-root');
portal2.style.visibility='hidden'

let yes_btn = () => {
  navigate("/page2");
}
let no_btn = () => {
  portal2.style.visibility='hidden'
}


  return ReactDOM.createPortal (
    <div className="div_portal_1">
          
    <div className="other_portal_1_div">
    <p>are you sure ? for page-2</p>
   
   <div className="div_portal_1_inner">
            <p onClick={yes_btn} >yes</p>
            <p onClick={no_btn} >no</p>
   </div>
    </div>
      </div>,portal2
  )
}

export default Portal2
