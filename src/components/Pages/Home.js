import React from 'react';
// import '../App.css';
import Home from '../Hero';
import SliderData from '../SliderData';


function About() {
  return (
    <>
        <Home slides={SliderData}/>
    </>
  )
}

export default Home