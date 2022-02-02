import React from "react";
import PagesComponent from "../components/PagesComponent";
import img1 from '../img/profil-1.jpg'


function Page1() {
  return (
    <div>
      <PagesComponent
      component_image={img1}
      component_text='baran beyazıt'
      component_go='page1'
      btn_sol='to to page-2'
      btn_sag='to to page-3'
      />
    </div>
  )
}

export default Page1;
