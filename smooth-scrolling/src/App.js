import React from "react";
import './App.css'

import Section from './components/Section/Section'
import SmoothScrolling from "./components/SmoothScroll/SmoothScrolling";

function App(){
  return(
    <SmoothScrolling>
      <h2>Smooth Scrolling</h2>
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
    </SmoothScrolling>
  )
}
export default App;
