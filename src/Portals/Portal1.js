import React from "react";
import ReactDOM from 'react-dom'
import { useNavigate} from "react-router-dom";
import './Portals.css'

function Portal1() {
  let navigate = useNavigate();
let portal1 = document.getElementById('portal-1-root');
portal1.style.visibility='hidden'

let yes_btn = () => {
  navigate("/page1");
}
let no_btn = () => {
  portal1.style.visibility='hidden'
}


  return ReactDOM.createPortal (
      <div className="div_portal_1">
          
 <div className="other_portal_1_div">
 <p>are you sure ? for page-1</p>

<div className="div_portal_1_inner">
         <p onClick={yes_btn} >yes</p>
         <p onClick={no_btn} >no</p>
</div>
 </div>
          
      </div>,portal1
  )
}

export default Portal1
