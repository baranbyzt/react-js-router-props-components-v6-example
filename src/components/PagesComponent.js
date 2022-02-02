

import React from "react";
import '../App.css'
import { useNavigate} from "react-router-dom";



function PagesComponent(props) {
let options_1 = null;
let options_2 = null;

  if(props.component_go == 'page1'){
    options_1='/page2';
    options_2='/page3';
    }
    else if(props.component_go == 'page2'){
      options_1='/page1';
      options_2='/page3';
      }
      else if(props.component_go == 'page3'){
        options_1='/page1';
        options_2='/page2';
        }


  let navigate = useNavigate();
    let btn_1 = function() {
      navigate(options_1);
    }
    let btn_2 = function() {
      navigate(options_2);
    }
    
let go_home_btn = () => {
  navigate('/');
}

  return (
   
    <div className="PagesComponent">

<p className="out" onClick={go_home_btn}>return to Home</p>

<img src={props.component_image} />

      <p>{props.component_text}</p>

<div className="PagesComponent_routers">
<p onClick={btn_1}   > {props.btn_sol}</p>
<p onClick={btn_2}>{props.btn_sag}</p>
</div>

    </div>
  )
}

export default PagesComponent;
