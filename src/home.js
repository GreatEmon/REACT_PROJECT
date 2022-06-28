import React from 'react';
import Common from "./Common";
import Hello from './images/hello.png';

const home = () => {
  return (
    <>
      <Common name='Grow your business with '
        imgsrc={Hello}
        visit='/services'
        btnName="Get Started"
        class="homeheader"
      />
    </>
  )
}

export default home