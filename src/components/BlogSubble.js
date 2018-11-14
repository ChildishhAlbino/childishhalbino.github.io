import React from "react";
import Subble from "./subble";
import Clock from './clock';
import style from './subble.module.scss'

const BlogColatorSubble = ({ children }) => (
  <Subble styling = {[style.One, style.shadow]}>
    <div className = {[style.inlineRow, style.blogHeaderFlex].join(' ')}> 
      <h1> Recent Posts </h1>
      <Clock></Clock>
    </div>
    {children}
  </Subble>
);

export default BlogColatorSubble;
