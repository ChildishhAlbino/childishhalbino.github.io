import React from "react";

import "./BlogSubble.scss";
import Subble from "./subble";
import Clock from './clock';

let clock = new Clock({date: new Date()})
const BlogSubble = ({ children }) => (
  <Subble stylingClass="subble One shadow">
    <div className = "inlineRow buildTime"> 
      <h1> Recent Posts </h1>
      <Clock></Clock>
    </div>

    {children}
  </Subble>
);

export default BlogSubble;
