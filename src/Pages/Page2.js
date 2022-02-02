import React from "react";
import PagesComponent from "../components/PagesComponent";
import img2 from '../img/profile-2.jpg'

function Page2() {
  return (
    <div>
        <PagesComponent
      component_image={img2}
      component_text='kerem beyazıt'
      component_go='page2'
      btn_sol='to to page-1'
      btn_sag='to to page-3'
      />
    </div>
  )
}

export default Page2;
