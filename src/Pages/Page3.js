import React from "react";
import PagesComponent from "../components/PagesComponent";
import img3 from '../img/profile-3.jpg'

function Page3() {
  return (
    <div>
         <PagesComponent
      component_image={img3}
      component_text='azad beyazıt'
      component_go='page3'
      btn_sol='to to page-1'
      btn_sag='to to page-2'
      />
    </div>
  )
}

export default Page3;
