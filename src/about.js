import React from 'react'
import Common from "./Common";
import About from './images/about.png';

const about = () => {
  return (
    <>
      <Common name='Welcome to About Us '
        imgsrc={About}
        visit='/contact'
        btnName="Contact Now"
        class="header"
      />
    </>
  )
}

export default about;