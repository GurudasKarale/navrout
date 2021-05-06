import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Homecontent from './Homecontent';

function Home() {
  return (
    
      <>
      <ImageSlider slides={SliderData} />
      <Homecontent/>
      </>
    
  );
}

export default Home;